import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AiFillCheckCircle } from "react-icons/ai";

const VerifyTicket = () => {
  const [searchParams] = useSearchParams();
  const apiURL = process.env.REACT_APP_API_URL;
  const userId = decodeURI(searchParams.get("userId"));
  const myAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNH0.Y8e-rpsXznla6u9OCf0cqQB8JzAmGdKFFH_fudz1oI8";
  const [userInfo, setUserInfo] = useState(null);

  function concatObject(obj) {
    var strArray = []; //new Array
    for (var prop in obj) {
      strArray.push(prop + ":\t" + obj[prop]);
    }
    return strArray.join("\n");
  }

  useEffect(() => {
    function getUserInfo() {
      axios
        .get(`${apiURL}/user/profile`, {
          params: { user_id: userId },
          headers: { Authorization: `Bearer ${myAccessToken}` },
        })
        .then((response) => {
          if (response.status === 200) {
            setUserInfo(response.data);
          }
        })
        .catch((error) => {
          console.log("GET USER INFO ERROR: ", error);
        });
    }
    getUserInfo();
    return () => {};
  }, [userId, apiURL]);

  if (userInfo)
    return (
      <div className="w-full h-full flex flex-col items-center font-poppins gradient-animation min-h-screen">
        <Navbar />
        <div className="w-full px-12 py-12 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white">
              <AiFillCheckCircle size={40} color="green" />
            </div>
            <p className="mt-2 mb-8 text-center">
              Verified ticket for the person below
            </p>
          </div>

          <img src={userInfo.user_img} alt="" className="w-full rounded-xl" />
          <div className="w-full">
            <p className="text-2xl mt-4">{userInfo.nickname}</p>
            <p className=" mt-4">{concatObject(userInfo.about)}</p>
          </div>
        </div>
      </div>
    );
};

export default VerifyTicket;
