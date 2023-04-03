import React from "react";
import LogoSimple from "../assets/logo_simple.png";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlinePerson, MdWorkOutline } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = ({light}) => {

  const SolutionDropdown = () => (
    <ul className="bg-white text-black rounded-lg p-5 w-72">
      <p className="font-semibold font-sans text-gray-600">For</p>
      <a
        href="/service/company"
        className="w-full h-16 text-gray-700 text-sm flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center space-x-4">
          <MdWorkOutline
            className="text-gray-400 group-hover:text-blue-500 flex-shrink-0"
            size={24}
          />
          <div className="w-full flex flex-col items-start space-y-px">
            <p className="font-semibold">중소기업</p>
            <p className="text-xs text-gray-500 group-hover:text-blue-500">
              검증된 해외 개발자 매칭
            </p>
          </div>
        </div>
      </a>
      <a
        href="/service"
        className="w-full h-16 text-gray-700 text-sm flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center space-x-4">
          <MdOutlinePerson
            className="text-gray-400 flex-shrink-0 group-hover:text-blue-500"
            size={24}
          />
          <div className="w-full flex flex-col items-start space-y-px">
            <p className="font-semibold">글로벌 개발자</p>
            <p className="text-xs text-gray-500 group-hover:text-blue-500">
              한국 기업에서 커리어 시작
            </p>
          </div>
        </div>
      </a>
      <a
        href="/service"
        className="w-full h-16 text-gray-700 text-sm flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center space-x-4">
          <RiCustomerServiceLine
            className="text-gray-400 flex-shrink-0 group-hover:text-blue-500"
            size={24}
          />
          <div className="w-full flex flex-col items-start space-y-px">
            <p className="font-semibold">어시스턴트 / PM</p>
            <p className="text-xs text-gray-500 group-hover:text-blue-500">
              소통 보조 및 프로젝트 관리
            </p>
          </div>
        </div>
      </a>
    </ul>
  );

  const CompanyDropdown = () => (
    <ul className="bg-white text-black rounded-lg p-5 w-56 text-sm">
      <p className="font-semibold font-sans text-gray-600 mb-2">내부 항목</p>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Partners</div>
      </a>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Team & Careers</div>
      </a>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Blog</div>
      </a>

      <div className="w-full h-px bg-gray-300 mb-6 mt-3"></div>
      <p className="font-semibold font-sans text-gray-600 mb-2">외부 항목</p>

      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Investor Relations</div>
      </a>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Media Kit</div>
      </a>
    </ul>
  );

  const ResourcesDropdown = () => (
    <ul className="bg-white text-black rounded-lg p-5 w-56 text-sm">
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Developer Discord</div>
      </a>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">커뮤니티</div>
      </a>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">고객센터</div>
      </a>
      <a
        href="/service"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Legal</div>
      </a>
    </ul>
  );

  const SolutionButton = () => (
    <button className="flex items-center font-light group transition h-9 px-3">
      <p className="group-hover:opacity-75 transition">서비스 소개</p>
      <BiChevronDown className={`opacity-75 text-xl`} />
    </button>
  );

  const CompanyButton = () => (
    <button className="flex items-center font-light group transition h-9 px-3">
      <p className="group-hover:opacity-75 transition">회사소개</p>
      <BiChevronDown className="opacity-75 text-xl" />
    </button>
  );

  const ResourcesButton = () => (
    <button className="flex items-center font-light group transition h-9 px-3">
      <p className="group-hover:opacity-75 transition">Resources</p>
      <BiChevronDown className="opacity-75 text-xl" />
    </button>
  );

  const Dropdown = ({ button, dropdown }) => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
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
            } absolute top-9 -left-1 shadow-xl`}
          >
            {dropdown}
          </article>
        )}
      </div>
    );
  };

  return (
    <header
      style={{ maxWidth: "1280px" }}
      className={`${light ? "text-black" : "text-white"} w-full flex h-16 px-4 items-center justify-between z-50 flex-shrink-0 absolute top-0`}
    >
      <div className="flex items-center text-sm font-nanum">
        <a
          href="https://namsancompany.com"
          aria-label="Homepage"
          className="flex items-center justify-center flex-shrink-0 transform transition hover:scale-105 mr-3"
        >
          <img
            src={LogoSimple}
            alt="Namsan logo"
            className="w-9 object-contain"
            draggable={false}
          />
        </a>

        <Dropdown button={<SolutionButton />} dropdown={<SolutionDropdown />} />
        <Dropdown button={<CompanyButton />} dropdown={<CompanyDropdown />} />
        <Dropdown
          button={<ResourcesButton />}
          dropdown={<ResourcesDropdown />}
        />

        <button className="hidden sm:flex items-center font-light group transition hover:opacity-75 px-3">
          <p>Pricing</p>
        </button>
      </div>
      <div className="hidden sm:flex space-x-1 font-poppins sm:text-base text-sm justify-end items-center">
        <button className="transition hover:opacity-75 rounded-lg h-8 px-4 font-nanum font-light text-sm">
          로그인
        </button>
        <button className="transition hover:opacity-75 rounded-lg h-8 px-4 font-nanum font-light text-sm border">
          회원가입
        </button>
      </div>

      <button className="sm:hidden transition hover:opacity-75 rounded-lg">
        <IoReorderThreeOutline size={36} />
      </button>
    </header>
  );
};

export default Navbar;
