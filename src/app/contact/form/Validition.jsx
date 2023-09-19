import React from 'react';

export const Validation = (data) => {
  const errors = {}
  
  
  
  if (!data.firstName.trim()) {
    errors.firstName = 'Username is required';
  } else {
    delete errors.firstName;
  }

  if ( data.lastName.trim()  ) {
    errors.lastName = 'Last name is required';
  } else {
    delete errors.lastName;
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
    errors.email = 'Email address is invalid';
  } else {
    delete errors.email;
  }

  if (!data.phone) {
   errors.phone = 'Phone number is required';
 } else if  (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(data.phone)) {
   errors.phone = 'Your phone number is invalid';
 } else {
   delete errors.phone;
 }


  if (!data.message) {
    errors.message = 'Message is required';
  } else if (data.message.length < 20) {
    errors.message = 'Message needs to be 20 characters or more';
  } else {
    delete errors.message;
  }

  return errors;
};