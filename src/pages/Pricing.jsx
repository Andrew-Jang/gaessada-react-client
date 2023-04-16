import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CheckFill from "../assets/pricing/check_fill.png";
import CheckEmpty from "../assets/pricing/check_empty.png";
import Option1 from "../assets/pricing/1.png";
import Option2 from "../assets/pricing/2.png";
import Option3 from "../assets/pricing/3.png";
import Option4 from "../assets/pricing/4.png";
import Option5 from "../assets/pricing/5.png";
import Option6 from "../assets/pricing/6.png";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation("pricing");

  const WelcomeSection = () => (
    <div
      style={{ backgroundColor: "#fff" }}
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
          {t("first.title1")}
        </p>
        <p
          style={{ color: "#272D37" }}
          className="text-4xl font-bold mt-4 font-nanum"
        >
          {t("first.title2")}
        </p>
        <p
          style={{ color: "#5F6D7E" }}
          className="font-nanum mt-8 text-center break-keep"
        >
          {t("first.subtitle2")}
        </p>
      </div>
    </div>
  );

  const SecondSection = () => {
    const [optionIndex, setOptionIndex] = useState(0);
    const OptionButton = ({ title, index }) => (
      <button
        style={{
          backgroundColor: index === optionIndex && "#1FAD72",
        }}
        onClick={() => setOptionIndex(index)}
        className={`${
          index === optionIndex ? "bg-white" : "hover:bg-white"
        } flex w-full h-full rounded items-center justify-center transition`}
      >
        <p
          style={{ color: index === optionIndex ? "#FFFFFF" : "#5F6D7E" }}
          className="text-xs font-nanum font-bold"
        >
          {title}
        </p>
      </button>
    );

    const PriceCard = ({ price, plan, text, includes, isYear }) => {
      return (
        <div className="w-full border max-w-sm rounded-md p-8 font-nanum">
          <div className="flex items-end space-x-2">
            <p
              style={{ color: "#272D37", fontSize: "1.7rem" }}
              className="text-2xl font-black mb-3"
            >
              {price === 0
                ? t("second.card.free")
                : isYear
                ? `${price * 11}${t("second.card.currency")}`
                : `${price}${t("second.card.currency")}`}
            </p>
            {price !== 0 && (
              <p
                style={{ color: "#5F6D7E" }}
                className="text-sm font-bold mb-3"
              >
                {isYear ? t("second.card.year") : t("second.card.month")}
              </p>
            )}
          </div>

          <p style={{ color: "#272D37" }} className="text-sm font-bold mb-3">
            {plan}
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="text-xs break-keep pr-20 mb-6"
          >
            {text}
          </p>
          <div className="w-full h-px bg-gray-200 mb-6" />

          <div className="space-y-4">
            <div className="flex">
              <img
                className="w-5 object-contain"
                src={includes > 0 ? CheckFill : CheckEmpty}
                alt=""
              />
              <p className="text-sm font-nanum ml-3">
                {t("second.card.menu1")}
              </p>
            </div>
            <div className="flex">
              <img
                className="w-5 object-contain"
                src={includes > 1 ? CheckFill : CheckEmpty}
                alt=""
              />
              <p className="text-sm font-nanum ml-3">
                {t("second.card.menu2")}
              </p>
            </div>
            <div className="flex">
              <img
                className="w-5 object-contain"
                src={includes > 2 ? CheckFill : CheckEmpty}
                alt=""
              />
              <p
                className={`${
                  includes > 3 && "font-bold"
                } text-sm font-nanum ml-3`}
              >
                {includes > 3
                  ? t("second.card.menu3_diff")
                  : t("second.card.menu3")}
              </p>
            </div>
            <div className="flex">
              <img
                className="w-5 object-contain"
                src={includes > 3 ? CheckFill : CheckEmpty}
                alt=""
              />
              <p className="text-sm font-nanum ml-3">
                {t("second.card.menu4")}
              </p>
            </div>
          </div>

          <a href="/">
            <button
              style={{ backgroundColor: "#1FAD72" }}
              className="flex items-center justify-center hover:opacity-75 w-full h-9 rounded-md mt-8 transition"
            >
              <p className="font-nanum font-bold text-white text-sm">
                {t("second.card.continue")}
              </p>
            </button>
          </a>
        </div>
      );
    };
    return (
      <div
        style={{ backgroundColor: "#fff" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition pb-24`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-4 flex-col items-center"
        >
          <div
            style={{ borderColor: "#EAEBF0", backgroundColor: "#F7F7F8" }}
            className="w-72 h-10 bg-gray-100 rounded-sm border flex p-1 space-x-1"
          >
            <OptionButton index={0} title={t("second.options.month")} />
            <OptionButton index={1} title={t("second.options.year")} />
          </div>

          <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:space-x-6 mt-12 w-full sm:justify-center items-center">
            <PriceCard
              price={0}
              plan={t("second.1.title")}
              text={t("second.1.text")}
              includes={2}
              isYear={optionIndex}
            />
            <PriceCard
              price={40}
              plan={t("second.2.title")}
              text={t("second.2.text")}
              includes={3}
              isYear={optionIndex}
            />
            <PriceCard
              price={160}
              plan={t("second.3.title")}
              text={t("second.3.text")}
              includes={4}
              isYear={optionIndex}
            />
          </div>
        </div>
      </div>
    );
  };

  const ThirdSection = () => {
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
            {t("third.title")}
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum text-sm px-4 text-center mb-12"
          >
            {t("third.subtitle")}
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 px-4 gap-16">
            <Cell
              icon={Option1}
              title={t("third.1.title")}
              text={t("third.1.text")}
            />
            <Cell
              icon={Option2}
              title={t("third.2.title")}
              text={t("third.2.text")}
            />
            <Cell
              icon={Option3}
              title={t("third.3.title")}
              text={t("third.3.text")}
            />
            <Cell
              icon={Option4}
              title={t("third.4.title")}
              text={t("third.4.text")}
            />
            <Cell
              icon={Option5}
              title={t("third.5.title")}
              text={t("third.5.text")}
            />
            <Cell
              icon={Option6}
              title={t("third.6.title")}
              text={t("third.6.text")}
            />
          </div>
        </div>
      </div>
    );
  };

  const FourthSection = () => {
    return (
      <div
        style={{ backgroundColor: "#151B28" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex flex-col items-center px-4 "
        >
          <p className="font-nanum text-2xl font-bold mb-4 px-4 text-white">
            {t("fourth.title")}
          </p>
          <p
            style={{ color: "#A5ACBA" }}
            className="font-nanum text-sm px-4 text-center"
          >
            {t("fourth.subtitle1")}
          </p>
          <p
            style={{ color: "#A5ACBA" }}
            className="font-nanum text-sm px-4 text-center mt-1"
          >
            {t("fourth.subtitle2")}
          </p>
          <p
            style={{ color: "#A5ACBA" }}
            className="font-nanum text-sm px-4 text-center mt-1 mb-12"
          >
            {t("fourth.subtitle3")}
          </p>
        </div>
      </div>
    );
  };

  const FifthSection = () => {
    return (
      <div
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex flex-col items-center px-4"
        >
          <img src={t("fifth.review")} alt="" className="max-w-5xl" />
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

export default Pricing;
