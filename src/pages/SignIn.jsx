import React, {useState} from "react";
import Navbar from "../components/Navbar";
import "./phoneInput.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const SignIn = () => {
    const [phoneValue, setPhoneValue] = useState("");
    const [codeValue, setCodeValue] = useState("");
    const [submittedPhone, setSubmittedPhone] = useState(false);
    const [errorMessage, ] = useState("");
    const apiURL = process.env.REACT_APP_API_URL;

    const login = async (phone) => {
        return axios.post(`${apiURL}/auth/login`, {
            phone: phone,
        }).then((response) => {
            return response.data
        })
    }

    function submit() {
        if (!submittedPhone) {
            axios.get(`${apiURL}/auth/authorize_phone`, {
                params: {phone: phoneValue},
            }).then((response) => {
                return response.data;
            })
        }
        if (submittedPhone) {
            axios.get(`${apiURL}/auth/validate_authorize_phone`, {
                params: {
                    phone: phoneValue,
                    code: codeValue
                },
            }).then((response) => {
                if (response.data) {
                    axios.get(`${apiURL}/user/is_phone`, {
                        params: {phone: phoneValue},
                    }).then((response) => {
                        if (response.data) {
                            login(phoneValue).then(value => console.log(value))
                        } else {
                            axios.post(`${apiURL}/auth/register`, {
                                phone: phoneValue,
                            }).then((response) => {
                                if (response.status === 200) {
                                    login(phoneValue).then(value => console.log(value))
                                }
                            })
                        }
                    })
                }
            })
        }
        setSubmittedPhone(true);
    }

    return (
        <div className="w-full h-screen sm:h-screen flex flex-col items-center gradient-animation font-poppins">
            <Navbar/>

            <div className="flex flex-col items-center h-full">
                <h1 className="font-poppins text-4xl text-white mt-12 md:mt-20 font-semibold">
                    Sign in or sign up
                </h1>

                <div className="mt-12 bg-white p-4 rounded-lg bg-opacity-10 w-80">
                    <PhoneInput
                        defaultCountry="US"
                        countries={["US", "CA", "KR"]}
                        placeholder="XXXXXXXXXX"
                        value={phoneValue}
                        limitMaxLength={true}
                        onChange={setPhoneValue}
                        disabled={submittedPhone}
                    />
                </div>
                {phoneValue && (
                    <p className="font-poppins mt-2 text-gray-300 font-thin flex-wrap text-sm w-80">
                        {submittedPhone
                            ? "We've just sent a 6-digit verification code. It may take a moment to arrive."
                            : "We'll send a verification code to this number"}
                    </p>
                )}

                {submittedPhone && (
                    <div className="w-80 font-poppins">
                        <p className="mt-8 text-sm">VERIFICATION CODE</p>
                        <div className="mt-1 bg-white p-4 rounded-lg bg-opacity-10">
                            <input
                                maxLength={6}
                                placeholder="Verification Code"
                                className="bg-transparent outline-none text-xl w-full tracking-wide"
                                value={codeValue}
                                onChange={(e) => setCodeValue(e.target.value)}
                            />
                        </div>

                        <p className="text-xs mt-6 text-gray-400 font-thin">
                            By clicking I AGREE, you agree to our <button>Terms</button> and{" "}
                            <button>Privacy Policy</button>
                            .
                        </p>
                    </div>
                )}

                {errorMessage && (
                    <p className="mt-4 text-xs font-poppins">{errorMessage}</p>
                )}
                <button
                    onClick={() => submit()}
                    disabled={errorMessage === "Successfully submitted!"}
                    className={`${
                        errorMessage === "Successfully submitted!"
                            ? "bg-gray-400 text-gray-600"
                            : "bg-white text-black"
                    } font-poppins font-medium text-sm p-3 rounded-lg px-6 mt-6`}
                >
                    {submittedPhone ? "I AGREE" : "Continue"}
                </button>
            </div>
        </div>
    );
};

export default SignIn;
