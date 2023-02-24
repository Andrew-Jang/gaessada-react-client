import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./phoneInput.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";

const Waitlist = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;

  function sendEmail() {
    emailjs
      .send(
        serviceId,
        templateId,
        {
          phone_number: phoneValue,
        },
        userId
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage("Successfully submitted!");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Something went wrong...");
        }
      );
  }

  return (
    <div className="w-full h-screen sm:h-screen flex flex-col items-center gradient-animation">
      <Navbar />

      <div className="flex flex-col items-center h-full">
        <h1 className="font-poppins text-3xl sm:text-5xl text-white mt-4">
          Join Turnup
        </h1>
        <p className="font-poppins text-white mt-2 text-sm px-8 text-center">
          We'll send you a text once we add you to the invited list.
        </p>
        <div className="mt-12 bg-white py-2 px-2 rounded-lg bg-opacity-10">
          <PhoneInput
            defaultCountry="US"
            placeholder="Enter phone number"
            value={phoneValue}
            onChange={setPhoneValue}
          />
        </div>
        {errorMessage && (
          <p className="mt-4 text-xs font-poppins">{errorMessage}</p>
        )}

        <button
          onClick={() => sendEmail()}
          disabled={errorMessage === "Successfully submitted!"}
          className={`${
            errorMessage === "Successfully submitted!"
              ? "bg-gray-400 text-gray-600"
              : "bg-white text-black"
          } font-poppins  font-semibold text-sm  p-2 rounded-full px-6 mt-6`}
        >
          {errorMessage === "Successfully submitted!" ? "Submitted!" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Waitlist;
