const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: true }));

    server.post('/reserve', (req, res) => {
        const userEmail = req.body.email;
        const userName = req.body.name;
        const reservationTime = req.body.time;

        // ارسال ایمیل به کاربر
        sendEmail(userEmail, 'تایید رزرو', `وقت شما با موفقیت رزرو شده است. زمان رزرو: ${reservationTime}`);

        // ارسال ایمیل به ادمین
        sendEmail('admin@example.com', 'رزرو جدید', `یک رزرو جدید از ${userName} برای زمان ${reservationTime}`);

        res.send('رزرو با موفقیت انجام شد.');
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3001, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3001');
    });
});

// تابع ارسال ایمیل
function sendEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
