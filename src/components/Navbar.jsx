import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const NavButton = ({ title, onClick }) => (
    <button
      className="transition rounded-full p-1 sm:p-2 px-2 sm:px-3 font-bold font-nanum"
      onClick={onClick}
    >
      {title}
    </button>
  );

  return (
    <header className="w-full flex h-20 px-4 sm:px-12 items-center justify-between z-50 flex-shrink-0 text-white fixed">
      <button
        className="flex items-center justify-center text-white flex-shrink-0 transform transition hover:scale-105"
        onClick={() => navigate("/")}
      >
        <img
          style={{ filter: "brightness(0) invert(1)" }}
          src={Logo}
          alt="Turnup logo"
          className="w-32 object-contain"
          draggable={false}
        />
      </button>
      <div className="space-x-3 sm:space-x-4 font-poppins sm:text-base text-sm w-96 hidden md:flex">
        <NavButton title="서비스 소개" />
        <NavButton title="클라이언트" />
        <NavButton title="세일즈 문의" />
      </div>
    </header>
  );
};

export default Navbar;
