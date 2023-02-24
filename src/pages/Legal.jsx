import React from "react";
import Navbar from "../components/Navbar";

const Legal = () => {
  return (
    <div className="w-full h-screen sm:h-screen flex flex-col items-center gradient-animation">
      <Navbar />

      <a href="/legal/terms-of-use">
        <button className="hover:bg-white hover:text-black transition rounded-full p-1 sm:p-2 px-2 sm:px-3 mt-4">
          Terms of Service
        </button>
      </a>
      <a href="/legal/privacy-policy">
        <button className="hover:bg-white hover:text-black transition rounded-full p-1 sm:p-2 px-2 sm:px-3 mt-3">
          Privacy Policy
        </button>
      </a>
      <a href="/legal/payment-terms">
        <button className="hover:bg-white hover:text-black transition rounded-full p-1 sm:p-2 px-2 sm:px-3 mt-3">
          Payment Terms
        </button>
      </a>
    </div>
  );
};

export default Legal;
