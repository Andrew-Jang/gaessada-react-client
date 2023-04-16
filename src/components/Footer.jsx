import React from "react";
import LogoWhite from "../assets/logo_white.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <div
      style={{ backgroundColor: "#151B28" }}
      className="w-full flex flex-col items-center pt-12 text-white"
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full flex sm:flex-row flex-col sm:justify-between px-4"
      >
        <div className="px-4 sm:px-12 text-xs flex flex-col sm:items-start items-center">
          <div className="flex mb-8 items-center space-x-2">
            <a
              href="https://kookjein.com"
              aria-label="Homepage"
              className="flex items-center justify-center text-white flex-shrink-0 transform transition hover:scale-105 mr-3"
            >
              <img
                src={LogoWhite}
                alt="Kookjein logo"
                className="h-8 object-contain"
                draggable={false}
              />
            </a>
          </div>

          <div className="flex">
            <p className="font-bold mr-2">{t("address.title")}</p>
            <p>{t("address.text")}</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">{t("tel.title")}</p>
            <p>{t("tel.text")}</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">{t("email.title")}</p>
            <p>{t("email.text")}</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">{t("businessRegistration.title")}</p>
            <p>{t("businessRegistration.text")}</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">{t("business.title")}</p>
            <p>{t("business.text")}</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">{t("ceo.title")}</p>
            <p>{t("ceo.text")}</p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:space-x-20 mt-20 sm:mt-0">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-sm font-bold font-nanum">
              {t("service.title")}
            </div>
            <div className="text-xs font-nanum mt-6 space-y-4 items-center sm:items-start">
              <a
                href="/service/company"
                className="hover:underline text-center sm:text-start"
              >
                <p>{t("service.menu1")}</p>
              </a>
              <a
                href="/service/developer"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("service.menu2")}</p>
              </a>
              <a
                href="/pricing"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("service.menu3")}</p>
              </a>
              <a
                href="/pricing"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("service.menu4")}</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-sm font-bold font-nanum mt-12 sm:mt-0">
              {t("company.title")}
            </div>
            <div className="text-xs font-nanum mt-6 space-y-4 items-center sm:items-start">
              <a
                href="https://candle-chemistry-608.notion.site/62a540c630b948e8817bdb36f262d5c8"
                className="hover:underline text-center sm:text-start"
              >
                <p>{t("company.menu1")}</p>
              </a>
              <a
                href="https://www.namsancompany.com"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("company.menu2")}</p>
              </a>
              <a
                href="https://candle-chemistry-608.notion.site/8b9dfd324d174c1ca0024cc84e899825"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("company.menu3")}</p>
              </a>
              <a
                href="https://candle-chemistry-608.notion.site/7f34a912fa764803aa270f1f21754d5e"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("company.menu4")}</p>
              </a>
              <a
                href="https://candle-chemistry-608.notion.site/5bfc7fb3a6234942bf9ab43be65268f3?v=2e8c1d8335954f6a923bd196baaa2d1a"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("company.menu5")}</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-sm font-bold font-nanum mt-12 sm:mt-0">
              {t("resources.title")}
            </div>
            <div className="text-xs font-nanum mt-6 space-y-4 items-center sm:items-start">
              <a
                href="https://candle-chemistry-608.notion.site/FAQ-9b9927f37295435dbe5114157a498e48"
                className="hover:underline text-center sm:text-start"
              >
                <p>{t("resources.menu1")}</p>
              </a>
              <a
                href="https://candle-chemistry-608.notion.site/e5ec81c45bd141f49b716ce8fc7b9b0e"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("resources.menu2")}</p>
              </a>
              <a
                href="https://candle-chemistry-608.notion.site/08aae9cfc4bb4b1ea1dbcbdafd6a6b1a"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("resources.menu3")}</p>
              </a>
              <a
                href="https://candle-chemistry-608.notion.site/Legal-9faf14d01dd14883ab0096f1702e0824"
                className="hover:underline text-center sm:text-start"
              >
                <p className="mt-4">{t("resources.menu4")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: "1280px" }}
        className="w-full flex justify-center border-t border-gray-700 mt-12 py-6 px-4 text-xs"
      >
        © {new Date().getFullYear()} Namsan Company Inc. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
