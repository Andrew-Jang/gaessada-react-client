import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { AiFillCheckCircle } from "react-icons/ai";
import { Seek } from "react-loading-indicators";
import Logo from "../assets/plain.png";

const ZelleDetails = () => {
  const inputClass =
    "w-full border border-gray-300 rounded-lg py-3 px-2 outline-none text-sm";

  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [cellphoneText, setCellphoneText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const location = useLocation();
  let userId = location.state.userId;
  let username = location.state.username;
  let accessToken = location.state.accessToken;

  const ConfirmModal = () => {
    const apiURL = process.env.REACT_APP_API_URL;
    const [isLoading, setLoading] = useState(false);

    async function withdraw(accessToken) {
      axios
        .post(
          `${apiURL}/transaction/withdrawal`,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: {
              data: `TYPE: ZELLE, USERNAME: ${username}, USERID: ${userId}, FULLNAME: ${nameText}, EMAIL: ${emailText}, PHONE: ${cellphoneText}`,
            },
          }
        )
        .then((response) => {
          setErrorMessage("");
          setWithdrawSuccess(true);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response.status === 403) {
            setErrorMessage("Try again from the app by pressing Withdraw");
          } else {
            setErrorMessage("Something went wrong...");
            setLoading(false);
          }
        });
    }

    async function submit() {
      setLoading(true);
      setErrorMessage("");
      if (accessToken) {
        withdraw(accessToken);
      } else {
        console.log("Something went wrong..");
        setLoading(false);
      }
    }
    if (withdrawSuccess)
      return (
        <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 flex items-start justify-center px-6 pt-16">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full py-6 bg-white rounded-lg"
          >
            <div className="w-full flex justify-center px-6 mb-4 flex-col items-center">
              <AiFillCheckCircle size={100} color="green" />
              <p className="text-center font-poppins font-medium text-xl">
                Success
              </p>
              <p className="text-center font-poppins font-medium text-xs mt-4 text-gray-500">
                It can take about 5 business days to process your withdrawal.
                We'll notify you when it's done!
              </p>
            </div>

            <div className="px-4 flex justify-center w-full mt-6">
              <button
                onClick={() => {
                  window.location.replace(
                    "com.andrewdhjang.curiyusreactnative://main"
                  );
                }}
                className="bg-blue-500 text-white w-32 h-10 flex items-center justify-center  font-poppins font-medium rounded text-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div
          onClick={() => {
            setModalVisible(false);
            setErrorMessage("");
          }}
          className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 flex items-start justify-center px-6 pt-12"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full py-6 bg-white rounded-lg"
          >
            <div className="w-full flex justify-center px-4 mb-4">
              <p className="text-center font-poppins font-medium">
                Are you withdrawing to the following Zelle account?
              </p>
            </div>
            <div className="w-full px-6">
              <div className="w-full bg-gray-100 rounded-lg p-4 font-poppins space-y-4">
                <div>
                  <p className="text-xs mb-1 text-gray-500">FULL NAME</p>
                  <p className="text-sm font-medium">{nameText}</p>
                </div>
                <div>
                  <p className="text-xs mb-1 text-gray-500">EMAIL ADDRESS</p>
                  <p className="text-sm font-medium">{emailText}</p>
                </div>
                <div>
                  <p className="text-xs mb-1 text-gray-500">PHONE NUMBER</p>
                  <p className="text-sm font-medium">{cellphoneText}</p>
                </div>
              </div>
            </div>

            {errorMessage && (
              <p className="font-poppins text-xs text-red-500 mt-2 text-center w-full">
                {errorMessage}
              </p>
            )}

            <div className="px-6 flex justify-center w-full mt-6">
              <button
                onClick={() => submit()}
                disabled={isLoading}
                className={`${
                  isLoading
                    ? "bg-gray-200 text-gray-400"
                    : "bg-blue-500 text-white"
                } w-28 h-10 flex items-center justify-center font-poppins font-medium rounded text-sm`}
              >
                {isLoading ? (
                  <Seek color="#a5a5a5" size="small" text="" textColor="" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-4">
      {modalVisible && <ConfirmModal />}
      <div className="h-16 flex items-center w-full">
        <img src={Logo} alt="" className="w-6 h-6 object-contain" />
        <p className="text-xl font-poppins font-semibold ml-1">Turnup</p>
      </div>
      <p className="text-xl font-poppins text-black mt-4 text-center font-medium px-6">
        Withdrawing with Zelle
      </p>

      <p className="text-xs font-poppins font-medium mt-2 text-gray-500">
        Transfer fee : Free
      </p>

      <p className="font-poppins text-black mt-4 text-center px-6 text-xs">
        Submit the information below to proceed with the withdrawal. Make sure
        the information you entered is correct.
      </p>

      <div className="px-2 my-8">
        <input
          className={inputClass}
          placeholder="FULL NAME"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        />
        <input
          className={`${inputClass} mt-2`}
          placeholder="EMAIL ADDRESS"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
        />
        <input
          className={`${inputClass} mt-2`}
          placeholder="CELL PHONE NUMBER"
          value={cellphoneText}
          onChange={(e) => setCellphoneText(e.target.value)}
        />
      </div>

      <div className="px-2 flex justify-end w-full">
        <button
          onClick={() => setModalVisible(true)}
          disabled={!nameText || !emailText || !cellphoneText}
          className={`${
            !nameText || !emailText || !cellphoneText
              ? "bg-gray-200 text-gray-400"
              : "bg-blue-500 text-white"
          } w-28 h-10 flex items-center justify-center font-poppins font-medium rounded text-sm`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ZelleDetails;
