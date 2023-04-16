import React from "react";
import Navbar from "../components/Navbar";
import DevSolution1 from "../assets/service/dev_solution1.png";
import DevSolution2 from "../assets/service/dev_solution2.png";
import DevSolution3 from "../assets/service/dev_solution3.png";
import DevWelcome2 from "../assets/service/dev_welcome2.png";
import DevPeople from "../assets/service/dev_people.png";
import Footer from "../components/Footer";
import Checkmark from "../assets/main/checkmark.png";
import { useTranslation } from "react-i18next";

const ServiceDeveloper = () => {
  const { t } = useTranslation("serviceDeveloper");

  const WelcomeSection = () => (
    <div
      style={{ backgroundColor: "#FAFAFD" }}
      className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24 mt-16`}
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full relative h-full flex px-4 flex-col items-center"
      >
        <p
          style={{ color: "#1FAD72" }}
          className="font-bold font-nanum text-xs"
        >
          {t("first.subtitle1")}
        </p>
        <p
          style={{ color: "#272D37" }}
          className="text-4xl font-bold mt-6 font-nanum"
        >
          {t("first.title")}
        </p>
        <p
          style={{ color: "#5F6D7E" }}
          className="font-nanum mt-8 text-center break-keep"
        >
          {t("first.subtitle2")}
        </p>

        <div className="hidden sm:flex space-x-1 font-poppins sm:text-base text-sm justify-end items-center mt-12">
          <button
            style={{ backgroundColor: "#1FAD72" }}
            className="text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
          >
            {t("first.signup")}
          </button>
        </div>
      </div>
    </div>
  );

  const SecondSection = () => {
    const Cell = ({ icon, title, text, learnMore }) => (
      <div className="flex flex-col font-nanum px-7 py-5 rounded max-w-sm">
        <div className="flex items-center justify-between w-full">
          <img src={icon} className="w-10" alt="" draggable={false} />
          {learnMore && (
            <a href="/">
              <button
                style={{ color: "#1FAD72" }}
                className="bg-white px-3 py-2 text-xs font-bold font-nanum rounded-md hover:opacity-75 transition"
              >
                {t("learnMore")}
              </button>
            </a>
          )}
        </div>
        <p className="font-semibold mt-4">{title}</p>
        <p
          style={{ fontSize: "0.85rem", color: "#5F6D7E" }}
          className="text-xs mt-3 break-keep leading-5"
        >
          {text}
        </p>
      </div>
    );
    return (
      <div
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex flex-col items-center px-4 "
        >
          <p className="font-nanum text-2xl font-bold mb-4 px-4">
            {t("second.title")}
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum text-sm px-4 text-center mb-12"
          >
            {t("second.subtitle")}
          </p>
          <div className="flex w-full flex-col sm:flex-row sm:justify-center sm:space-x-4 items-center sm:items-start">
            <Cell
              icon={DevSolution1}
              title={t("second.1.title")}
              text={t("second.1.text")}
            />
            <Cell
              icon={DevSolution2}
              title={t("second.2.title")}
              text={t("second.2.text")}
            />
            <Cell
              icon={DevSolution3}
              title={t("second.3.title")}
              text={t("second.3.text")}
            />
          </div>
        </div>
      </div>
    );
  };

  const ThirdSection = () => {
    const IndexCell = () => (
      <div className="flex p-8 w-full justify-center sm:space-x-12">
        <div className="w-full max-w-lg">
          <p className="font-nanum font-bold text-2xl mt-8 break-keep">
            {t("third.title")}
          </p>

          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum mt-4 break-keep text-xs leading-6"
          >
            {t("third.subtitle")}
          </p>

          <div className="mt-8">
            <div className="flex items-start">
              <img src={Checkmark} className="w-3 object-contain mt-1" alt="" />
              <p
                style={{ color: "#5F6D7E" }}
                className="text-xs font-nanum ml-2 break-keep"
              >
                {t("third.text1")}
              </p>
            </div>
            <div className="flex items-start mt-4">
              <img src={Checkmark} className="w-3 object-contain mt-1" alt="" />
              <p
                style={{ color: "#5F6D7E" }}
                className="text-xs font-nanum ml-2 break-keep"
              >
                {t("third.text2")}
              </p>
            </div>
            <div className="flex items-start mt-4">
              <img src={Checkmark} className="w-3 object-contain mt-1" alt="" />
              <p
                style={{ color: "#5F6D7E" }}
                className="text-xs font-nanum ml-2 break-keep"
              >
                {t("third.text3")}
              </p>
            </div>
          </div>

          <a href="/">
            <button
              style={{ backgroundColor: "#1FAD72" }}
              className="text-white px-4 py-3 text-xs font-bold font-nanum rounded-md hover:opacity-75 transition mt-12"
            >
              {t("learnMore")}
            </button>
          </a>
        </div>
        <div className="hidden sm:flex h-full">
          <img
            src={DevWelcome2}
            alt=""
            className="w-full h-full hidden sm:flex max-w-sm object-contain rounded-md"
            draggable={false}
          />
        </div>
      </div>
    );
    return (
      <div
        style={{ backgroundColor: "#FAFAFD" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24 mt-16`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-4 flex-col items-center"
        >
          <IndexCell />
        </div>
      </div>
    );
  };

  const FifthSection = () => (
    <div
      className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24`}
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full relative h-full flex flex-col items-center px-4 "
      >
        <p className="font-nanum text-2xl font-bold mb-4 px-4">
          {t("fifth.title")}
        </p>
        <p
          style={{ color: "#5F6D7E" }}
          className="font-nanum text-sm px-4 text-center mb-12"
        >
          {t("fifth.subtitle")}
        </p>

        <img src={DevPeople} alt="" className="max-w-4xl" />
      </div>
    </div>
  );
  const SeventhSection = () => {
    return (
      <div
        style={{ backgroundColor: "#0E5034" }}
        className="flex w-screen items-center justify-center sm:flex-row flex-col py-24"
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-nanum mt-2 mb-12 text-xl text-white">
            {t("seventh.title")}
          </p>
          <button
            style={{ backgroundColor: "#FFFFFF", color: "#0E5034" }}
            className="text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
          >
            {t("seventh.button")}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center min-h-screen overflow-x-hidden">
      <Navbar light />
      <WelcomeSection />
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
};

export default ServiceDeveloper;
