import React from "react";
import LogoSimple from "../assets/logo_simple.png";

const Footer = () => {
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
              href="https://namsancompany.com"
              aria-label="Homepage"
              className="flex items-center justify-center text-white flex-shrink-0 transform transition hover:scale-105 mr-3"
            >
              <img
                src={LogoSimple}
                alt="Namsan logo"
                className="w-8 object-contain"
                draggable={false}
              />
            </a>
            <p className="text-lg font-nanum font-bold">남산컴퍼니</p>
          </div>

          <div className="flex">
            <p className="font-bold mr-2">ADD.</p>
            <p>서울특별시 중구 퇴계로 18길 33 504호</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">TEL.</p>
            <p>+82 (0)10-3101-6825</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">EMAIL.</p>
            <p>info@namsancompany.com</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">사업자등록번호.</p>
            <p>250-87-02467</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">회사명.</p>
            <p>(주)남산컴퍼니</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold mr-2">대표이사.</p>
            <p>장동해</p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:space-x-20 mt-20 sm:mt-0">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-sm font-bold font-nanum">서비스 소개</div>
            <div className="text-xs font-nanum mt-6 space-y-4 items-center sm:items-start">
              <a href="/" className="hover:underline text-center sm:text-start">
                <p>기업을 위한 솔루션</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">개발자를 위한 솔루션</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">어시스턴트 / PM</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">Pricing</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-sm font-bold font-nanum mt-12 sm:mt-0">회사소개</div>
            <div className="text-xs font-nanum mt-6 space-y-4 items-center sm:items-start">
              <a href="/" className="hover:underline text-center sm:text-start">
                <p>Partners</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">Team & Careers</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">Blog</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">Investor Relations</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">Media Kit</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-sm font-bold font-nanum mt-12 sm:mt-0">Resources</div>
            <div className="text-xs font-nanum mt-6 space-y-4 items-center sm:items-start">
              <a href="/" className="hover:underline text-center sm:text-start">
                <p>Developer Discord</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">커뮤니티</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">고객센터</p>
              </a>
              <a href="/" className="hover:underline text-center sm:text-start">
                <p className="mt-4">Legal</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: "1280px" }}
        className="w-full flex justify-center border-t border-gray-700 mt-12 py-6 px-4 text-xs"
      >
        © {new Date().getFullYear()} NAMSAN COMPANY. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
