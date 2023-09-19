
"use client";



import React, { useEffect, useState } from 'react'
import { Validation } from './Validition';
import axios from 'axios';
import './style.css'
import { countries } from "../../../statics/countries"

const Form = () => {

    const [isValid, setIsValid] = useState(true);
    const [focus, setFocus] = useState({});
    const [errors, setErrors] = useState({});



    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        country : ""
    });

  
    

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value });
         setData(event.target.value);


    };

    useEffect(() => {
        setErrors(Validation(data));
    }, [data]);

    const focucHandaler = event => {
        setFocus({ ...focus, [event.target.name]: true });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (Object.values(data).every((value) => value.trim() === '')) {
        /*     console.log("Data is empty. Form not submitted."); */
            return;
        }


        if (Object.keys(errors).length === 0) {
         

        } else {

            setFocus({
                name: true,
                lastName: true,
                email: true,
                phone: true,
                message: true,
                date: true,

            });
        }
        try {
            const response = await axios.post('https://64cfe80affcda80aff52489d.mockapi.io/anette', data);

          


            setData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                date: "",
            });
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };




    return (
        <section className='px-6'>
            <div className='w-full md:w-[750px] mt-32 border mx-auto rounded-xl  contact py-6'>
                <h3 className='font-bold text-[34px] text-center'>Book a session</h3>




                <form onSubmit={submitHandler} action="" className='flex justify-center flex-wrap px-6 '>

                    <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
                        <label htmlFor="name" className='w-full py-2 font-medium'>First Name</label>
                        <input
                            type="text"
                            className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                            name='firstName'
                            onChange={changeHandler}
                            onFocus={focucHandaler} />
                        {errors.firstName && focus.firstName && <span className='formField' >{errors.firstName}</span>}
                    </div>
                    <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
                        <label className='w-full py-2 font-medium' htmlFor="lastName"> Last Name</label>
                        <input
                            type="text"
                            className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                            name='lastName'
                            onChange={changeHandler}
                            onFocus={focucHandaler} />
                        {errors.lastName && focus.lastName && <span className='formField' >{errors.lastName}</span>}
                    </div>


                    <div className="  w-full md:w-[45%] mx-2 mt-3 flex flex-wrap">
                        <label className='w-full py-2 font-medium' htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focucHandaler} />
                        {errors.email && focus.email && <span className='formField' >{errors.email}</span>}

                    </div>

                    <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
                        <label className='w-full py-2 font-medium' htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            name='phone'
                            className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                            value={data.phone}
                            onChange={changeHandler}
                            onFocus={focucHandaler} />
                        {errors.phone && focus.phone && <span className='formField' >{errors.phone}</span>}
                    </div>

                    <div className=' w-full md:w-[45%] mx-2  '>

                        <div className='w-full me-4 mt-3 flex flex-wrap'>

                            <label className='w-full py-2 font-medium' htmlFor="country">Country:</label>
                            <select
                                className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                                id="country"
                                value={data.country}
                                onChange={changeHandler}
                            >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={data.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>

                           

                        </div>
                    </div>

                    <div className=' w-full md:w-[45%] mx-2 mt-3 flex flex-wrap'>
                        <label className='w-full py-2 font-medium' htmlFor='date'>
                            Date
                        </label>
                        <input
                            type='date'
                            name='date'
                            className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                            value={data.date}
                            onChange={changeHandler}
                            onFocus={focucHandaler}
                        />
                        {errors.date && focus.date && <span className='formField' >{errors.date}</span>}
                    </div>

                    <div className=" w-[93%]  mx-2 mt-3 flex flex-wrap">
                        <label className='w-full py-2 font-medium' htmlFor="email">Message</label>
                        <textarea
                            name='message'
                            className={`w-full myInput ${isValid ? 'valid' : 'invalid'}`}
                            value={data.message}
                            onChange={changeHandler}
                            onFocus={focucHandaler} id="" cols="30" rows="10"></textarea>
                        {errors.message && focus.message && <span className='formField' >{errors.message}</span>}
                    </div>
                    <button className='mt-12 topTitel font-medium text-white bg-[#1d5db6] w-[200px] h-14 rounded-xl'>
                        Book new
                    </button>
                </form>
            </div>



        </section>
    )
}

export default Form
