import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import PaypalIcon from "../assets/paypal.png";
import ZelleIcon from "../assets/zelle.png";
import Logo from "../assets/plain.png";

const Withdraw = () => {
  const buttonClass =
    "w-full h-14 border rounded-lg flex items-center px-4 text-xl border-1 overflow-hidden relative";
  const buttonSelectedClass =
    "w-full h-14 border rounded-lg flex items-center px-4 text-xl bg-blue-100 border-1 border-blue-500 overflow-hidden relative";

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  function toDetail() {
    if (paymentMethod === 0) {
      navigate("/withdraw/zelle", {
        state: {
          accessToken: decodeURI(searchParams.get("accessToken")),
          userId: decodeURI(searchParams.get("userid")),
          username: decodeURI(searchParams.get("username")),
        },
      });
    } else {
      navigate("/withdraw/paypal", {
        state: {
          accessToken: decodeURI(searchParams.get("accessToken")),
          userId: decodeURI(searchParams.get("userid")),
          username: decodeURI(searchParams.get("username")),
        },
      });
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center px-4">
      <div className="h-16 flex items-center w-full">
        <img src={Logo} alt="" className="w-6 h-6 object-contain" />
        <p className="text-xl font-poppins font-semibold ml-1">
          Turnup
        </p>
      </div>
      <p className="text-2xl font-poppins text-black mt-4 text-center font-medium px-6">
        Choose a withdrawal method
      </p>
      <p className="font-poppins text-black mt-4 text-center px-4 text-sm">
        Payments can take up to 5 business days.
      </p>
      <p className="font-poppins text-black text-center px-4 text-sm">
        Some payment methods may have transfer fees.
      </p>

      <div className="w-full space-y-2 py-10 px-2">
        <button
          className={paymentMethod === 0 ? buttonSelectedClass : buttonClass}
          onClick={() => setPaymentMethod(0)}
        >
          <div
            className={`${
              paymentMethod === 0 ? "bg-blue-500" : ""
            } w-4 h-4 rounded-full mr-4 border-2 flex items-center justify-center`}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <img className="h-7" src={ZelleIcon} alt="" />
          <div className="absolute top-0 right-2 text-xs font-poppins font-medium bg-green-600 text-white px-3 py-1 rounded-b-lg">
            Best option
          </div>
        </button>
        <button
          className={paymentMethod === 1 ? buttonSelectedClass : buttonClass}
          onClick={() => setPaymentMethod(1)}
        >
          <div
            className={`${
              paymentMethod === 1 ? "bg-blue-500" : ""
            } w-4 h-4 rounded-full mr-4 border-2 flex items-center justify-center`}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <img className="h-12" src={PaypalIcon} alt="" />
        </button>
        <button className={`${buttonClass} bg-gray-200`}>
          <div className="w-4 h-4 rounded-full mr-4 border-2 flex items-center justify-center bg-white">
            <div className="w-2 h-2 rounded-full"></div>
          </div>
          <div className="flex flex-col items-start">
            <p className="font-poppins font-medium text-base">Bank transfer</p>
            <p className="font-poppins font-medium text-gray-500 text-xs -mt-1">
              Transfer fee: $5.00
            </p>
          </div>
          <div className="absolute top-0 right-2 text-xs font-poppins font-medium bg-gray-300 text-gray-500 px-3 py-1 rounded-b-lg">
            Coming soon
          </div>
        </button>
      </div>

      <div className="px-2 flex justify-end w-full">
        <button
          disabled={paymentMethod === null}
          onClick={() => toDetail()}
          className={`${
            paymentMethod !== null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-400"
          } w-28 h-10 flex items-center justify-center  font-poppins font-medium rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
