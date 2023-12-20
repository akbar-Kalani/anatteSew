"use client";

import React, { useState } from "react";

import styles from "@/components/addUser/adduser.module.css";
import { countries } from "@/components/statics/countries";

const AddPage = () => {
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    date: "",
    description: "",
  });

  console.log(data, "Helloo user jan");
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onclick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://6573b4f7f941bda3f2af176c.mockapi.io/event/UserEvent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Data submitted successfully");
        // Reset the form after successful submission if needed
        setData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          date: "",
          description: "",
        });
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      alert("Error submitting data:", error);
    }
  };
  return (
    <div
      className={`${styles.container} w-full md:w-[870px] mt-36 border mx-auto rounded-xl  contact py-6`}
    >
      <h3 className="font-bold text-[34px] text-center">Book a session</h3>
      <form action="" onSubmit={onclick} className={`${styles.form}  `}>
        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
          <input
            className={`w-full myInput ${isValid ? "valid" : "invalid"}`}
            onChange={changeHandler}
            type="text"
            placeholder="Name"
            value={data.name}
            name="name"
            required
          />
        </div>

        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
          <input
            onChange={changeHandler}
            type="text"
            className={`w-full myInput ${isValid ? "valid" : "invalid"}`}
            placeholder="Last Name"
            value={data.lastName}
            name="lastName"
            required
          />
        </div>

        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
          <input
            onChange={changeHandler}
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            className={`w-full myInput ${isValid ? "valid" : "invalid"}`}
            required
          />
        </div>

        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
          <input
            onChange={changeHandler}
            type="tel"
            placeholder="Phone"
            value={data.phone}
            name="phone"
            className={`w-full myInput ${isValid ? "valid" : "invalid"}`}
          />
        </div>

        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
          <select
            onChange={changeHandler}
            className={`${styles.select} w-full   bg-[#182237] mt-3 myInput ${isValid ? 'valid' : 'invalid'} `}
            value={data.country}
            name="country"
            id="country" // Remove the space before "country"
          >
            <option className="" value="country">
         country
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap">
          <input
            className={`w-full myInput ${isValid ? "valid" : "invalid"}`}
            onChange={changeHandler}
            type="date"
            placeholder="date"
            value={data.date}
            name="date"
          />
        </div>

        <div className=" w-full md:w-[45%]  mx-2 mt-3 flex flex-wrap"></div>

        <textarea
          className={`w-full myInput ${isValid ? "valid" : "invalid"}`}
          onChange={changeHandler}
          value={data.description}
          name="description"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button className="mt-32 topTitel font-medium text-white bg-[#1d5db6] w-[200px] h-14 rounded-xl">
          Book new
        </button>
      </form>
    </div>
  );
};

export default AddPage;
