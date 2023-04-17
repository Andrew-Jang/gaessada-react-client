import React from "react";
import LogoWhite from "../assets/logo_white.png";
import LogoGreen from "../assets/logo_green.png";
import {
  IoChatboxOutline,
  IoNotificationsOutline,
  IoReorderThreeOutline,
  IoSearch,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = ({ light }) => {
  const { t, i18n } = useTranslation("navBar");

  function changeLanguage() {
    i18n.language.includes("en")
      ? i18n.changeLanguage("ko")
      : i18n.changeLanguage("en");
  }

  const ProfileDropdown = () => (
    <ul className="bg-white text-black rounded-lg p-4 w-56">
      <a
        href="/"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">메인으로 이동</div>
      </a>

      <div className="w-full h-px border-gray-200 mb-3 mt-2 border-t"></div>
      <a
        href="/browse"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">프로필 설정</div>
      </a>
      <a
        href="/browse"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">언어 설정</div>
      </a>

      <div className="w-full h-px border-gray-200 mb-3 mt-2 border-t"></div>
      <button
        onClick={() => changeLanguage()}
        className="transition hover:opacity-75 h-8 flex items-center space-x-2 w-full"
      >
        <img src={t("flag")} className="w-5" alt="" />
        <p>{t("language")}</p>
      </button>
    </ul>
  );

  const ProfileButton = () => (
    <button className="w-9 h-9 bg-gray-300 rounded-full relative">
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 ring-2 ring-white rounded-full"></div>
    </button>
  );

  const Dropdown = ({ button, dropdown }) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    return (
      <div
        className="relative hidden sm:flex"
        onMouseEnter={() => setDropdownVisibility(true)}
        onMouseLeave={() => setDropdownVisibility(false)}
      >
        {button}
        {dropdownVisibility && (
          <article
            className={`${
              dropdownVisibility
                ? "slide-fade-in-dropdown"
                : "slide-fade-out-dropdown"
            } absolute top-9 -right-8 shadow-xl rounded-lg`}
          >
            {dropdown}
          </article>
        )}
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className="w-full flex items-center h-10 justify-center">
        <input
          style={{ outlineColor: "#176343" }}
          className="border h-full w-full font-nanum text-sm px-3 rounded-l-md max-w-2xl"
          placeholder="어떤 개발자를 찾으시나요?"
        />
        <button
          style={{ backgroundColor: "#0E5034" }}
          className="text-white text px-4 py-1 rounded-r-md hover:opacity-90 transition font-nanum font-semibold text-sm h-full outline-px"
        >
          <IoSearch className="text-white w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <header className="w-full flex h-20 z-50 border-b justify-center">
      <div
        style={{ maxWidth: "1280px" }}
        className={`${
          light ? "text-black" : "text-white"
        } w-full flex h-full px-4 items-center z-50 flex-shrink-0`}
      >
        <div className="flex items-center text-sm font-nanum pr-6 flex-shrink-0">
          <a
            href="/"
            aria-label="Homepage"
            className="flex items-center justify-center flex-shrink-0 transform transition hover:scale-105 mr-3"
          >
            <img
              src={light ? LogoGreen : LogoWhite}
              alt="Kookjein logo"
              className="h-8 object-contain"
              draggable={false}
            />
          </a>
        </div>
        <div className="w-full h-full flex items-center">
          <SearchBar />
        </div>
        <div className="hidden sm:flex space-x-8 font-poppins sm:text-base text-sm justify-end items-center flex-shrink-0 pl-6">
          <button className="relative">
            <IoNotificationsOutline className="w-5 h-5 text-gray-500" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 ring-1 ring-white rounded-full"></div>
          </button>
          <button className="relative">
            <IoChatboxOutline className="w-5 h-5 text-gray-500" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 ring-1 ring-white rounded-full"></div>
          </button>

          <a href="/browse">
            <button
              style={{ backgroundColor: "#0E5034" }}
              className="text-white text px-4 py-2 rounded-lg hover:opacity-90 transition font-nanum font-semibold text-sm"
            >
              채용 등록
            </button>
          </a>
          <Dropdown button={<ProfileButton />} dropdown={<ProfileDropdown />} />
          {/* <button className="transition hover:opacity-75 rounded-lg h-8 px-4 font-nanum text-sm font-bold">
          {t("login")}
        </button>
        <button className="transition hover:opacity-75 rounded-lg h-8 px-4 font-nanum text-sm border font-bold">
          {t("signup")}
        </button> */}
        </div>

        <button className="sm:hidden transition hover:opacity-75 rounded-lg pl-6">
          <IoReorderThreeOutline size={36} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
