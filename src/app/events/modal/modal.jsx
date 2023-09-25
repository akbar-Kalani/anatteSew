"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import "./styleModules.css";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalInterval = setInterval(() => {
      setShowModal(true);

      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }, 9000);

    return () => clearInterval(modalInterval);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      {showModal && (
        <div className={` modal ${showModal ? "active" : ""}`}>
          <div className="modal-content w-[250px]">
            <button onClick={closeModal}>
              <span className="bg-red-600 h-[30px] w-[30px] flex justify-center items-center rounded-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#ffffff"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
              </span>
            </button>
            <p className="font-semibold text-black mt-2">
              Please click at the pictures for more information about available
              events
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
