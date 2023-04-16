import React from "react";
import Navbar from "../components/Navbar";
import CompanyWelcome from "../assets/service/company_welcome.png";
import CompanyWelcome2 from "../assets/service/company_welcome2.png";
import Solution1 from "../assets/service/solution1.png";
import Solution2 from "../assets/service/solution2.png";
import Solution3 from "../assets/service/solution3.png";
import Solution4 from "../assets/service/solution4.png";
import Solution5 from "../assets/service/solution5.png";
import Solution6 from "../assets/service/solution6.png";
import CompanyDevs from "../assets/service/company_devs.png";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const ServiceCompany = () => {
  const { t } = useTranslation("serviceCompany");

  const WelcomeSection = () => {
    return (
      <div
        style={{ minHeight: "42rem", backgroundColor: "#FAFAFD" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-4 sm:flex-row flex-col items-center"
        >
          <div
            style={{ maxWidth: "39rem" }}
            className="flex flex-col justify-center h-full z-20 sm:mt-0 mt-48 px-4 sm:px-12"
          >
            <img
              src={t("welcome")}
              alt=""
              className="object-contain"
              draggable={false}
            />
            <div className="w-full mt-8 flex justify-center sm:justify-start">
              <button
                style={{ backgroundColor: "#1FAD72" }}
                className="text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
              >
                {t("welcomeButton")}
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center px-4 sm:px-12 mt-24 sm:mb-12 mb-24">
            <img
              src={CompanyWelcome}
              alt=""
              className="object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    );
  };

  const SecondSection = () => {
    const Cell = ({ title, text }) => (
      <div className="font-nanum w-1/4">
        <p className="text-xl font-black text-center sm:text-left">{title}</p>
        <p
          style={{ color: "#5F6D7E" }}
          className="text-sm mt-3 break-keep text-center sm:text-left"
        >
          {text}
        </p>
      </div>
    );
    return (
      <div className="flex h-full z-20 w-screen py-16 justify-center">
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-12 sm:px-4 sm:flex-row flex-col sm:items-center sm:space-x-12 sm:space-y-0 space-y-12 items-center"
        >
          <Cell title={t("second.1.title")} text={t("second.1.text")} />
          <Cell title={t("second.2.title")} text={t("second.2.text")} />
          <Cell title={t("second.3.title")} text={t("second.3.text")} />
          <Cell title={t("second.4.title")} text={t("second.4.text")} />
        </div>
      </div>
    );
  };

  const ThirdSection = () => {
    const Cell = ({ icon, title, text, learnMore }) => (
      <div
        style={{ backgroundColor: "#176343" }}
        className="flex flex-col font-nanum p-7 py-5 rounded max-w-sm"
      >
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
          style={{ fontSize: "0.85rem", color: "#BFDED1" }}
          className="text-xs mt-3 break-keep leading-5"
        >
          {text}
        </p>
      </div>
    );
    return (
      <div
        style={{ backgroundColor: "#0E5034" }}
        className="flex w-screen items-center justify-center sm:flex-row flex-col py-24"
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="text-white flex flex-col items-center"
        >
          <p className="font-nanum text-2xl font-bold mb-4 px-4">
            {t("third.title")}
          </p>
          <p
            style={{ color: "#BFDED1" }}
            className="font-nanum text-sm px-4 text-center"
          >
            {t("third.subtitle1")}
          </p>
          <p
            style={{ color: "#BFDED1" }}
            className="font-nanum text-sm mt-1 mb-16 px-4 text-center"
          >
            {t("third.subtitle2")}
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 px-4 gap-6">
            <Cell
              icon={Solution1}
              title={t("third.1.title")}
              text={t("third.1.text")}
            />
            <Cell
              icon={Solution2}
              title={t("third.2.title")}
              text={t("third.2.text")}
            />
            <Cell
              icon={Solution3}
              title={t("third.3.title")}
              text={t("third.3.text")}
              learnMore
            />
            <Cell
              icon={Solution4}
              title={t("third.4.title")}
              text={t("third.4.text")}
            />
            <Cell
              icon={Solution5}
              title={t("third.5.title")}
              text={t("third.5.text")}
            />
            <Cell
              icon={Solution6}
              title={t("third.6.title")}
              text={t("third.6.text")}
              learnMore
            />
          </div>
        </div>
      </div>
    );
  };

  const FourthSection = () => {
    return (
      <div
        style={{ minHeight: "42rem", backgroundColor: "#FAFAFD" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-4 sm:flex-row flex-col items-center"
        >
          <div
            style={{ maxWidth: "39rem" }}
            className="flex flex-col justify-center h-full z-20 sm:mt-0 mt-48 px-4 sm:px-12"
          >
            <img
              src={t("fourth.welcome")}
              alt=""
              className="object-contain"
              draggable={false}
            />
            <div className="w-full mt-8 flex justify-center sm:justify-start">
              <button
                style={{ backgroundColor: "#1FAD72" }}
                className="text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
              >
                {t("fourth.button")}
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center px-4 sm:px-12 mt-24 sm:mb-12 mb-24">
            <img
              src={CompanyWelcome2}
              alt=""
              className="object-contain max-w-md"
              draggable={false}
            />
          </div>
        </div>
      </div>
    );
  };

  const FifthSection = () => {
    return (
      <div
        style={{ minHeight: "42rem", backgroundColor: "#FAFAFD" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-4 flex-col items-center"
        >
          <p className="font-nanum text-2xl font-bold mb-4 px-4">
            {t("fifth.title")}
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum text-sm mt-1 mb-16 px-4 text-center"
          >
            {t("fifth.subtitle")}
          </p>
          <img src={CompanyDevs} alt="" className="max-w-5xl w-full" />
        </div>
      </div>
    );
  };

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
      <FourthSection />
      <FifthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
};

export default ServiceCompany;
