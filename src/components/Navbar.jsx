import React from "react";
import LogoSimple from "../assets/logo_simple.png";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlinePerson, MdWorkOutline } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = ({ light }) => {
  const SolutionDropdown = () => (
    <ul className="bg-white text-black rounded-lg p-5 w-72">
      <div className="flex">
        <p
          style={{ color: "#1FAD72", fontSize: "0.5rem" }}
          className="font-black text-xs font-nanum text-white py-1 rounded-full"
        >
          누구신가요?
        </p>
      </div>
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
        href="/service/developer"
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
      <div className="flex mt-4">
        <p
          style={{ color: "#1FAD72", fontSize: "0.5rem" }}
          className="font-black text-xs font-nanum text-white py-1 rounded-full"
        >
          추가 구독 서비스
        </p>
      </div>
      <a
        href="/pricing"
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
              통역/소통 보조 및 프로젝트 관리
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
        href="https://candle-chemistry-608.notion.site/62a540c630b948e8817bdb36f262d5c8"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">협력사</div>
      </a>
      <a
        href="https://candle-chemistry-608.notion.site/Team-Careers-b5db488235794b8a996b1b037878de86"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Team & Careers</div>
      </a>
      <a
        href="https://candle-chemistry-608.notion.site/8b9dfd324d174c1ca0024cc84e899825"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">블로그</div>
      </a>

      <div className="w-full h-px bg-gray-300 mb-6 mt-3"></div>
      <p className="font-semibold font-sans text-gray-600 mb-2">외부 항목</p>
      <a
        href="https://candle-chemistry-608.notion.site/7f34a912fa764803aa270f1f21754d5e"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">뉴스/미디어</div>
      </a>
      <a
        href="https://candle-chemistry-608.notion.site/5bfc7fb3a6234942bf9ab43be65268f3?v=2e8c1d8335954f6a923bd196baaa2d1a"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Investor Relations</div>
      </a>
    </ul>
  );

  const ResourcesDropdown = () => (
    <ul className="bg-white text-black rounded-lg p-5 w-56 text-sm">
      <a
        href="https://candle-chemistry-608.notion.site/FAQ-9b9927f37295435dbe5114157a498e48"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">FAQ</div>
      </a>
      <a
        href="https://candle-chemistry-608.notion.site/e5ec81c45bd141f49b716ce8fc7b9b0e"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">커뮤니티</div>
      </a>
      <a
        href="https://candle-chemistry-608.notion.site/08aae9cfc4bb4b1ea1dbcbdafd6a6b1a"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">고객센터</div>
      </a>
      <a
        href="https://candle-chemistry-608.notion.site/Legal-9faf14d01dd14883ab0096f1702e0824"
        className="w-full h-10 text-gray-700 flex items-center group hover:text-blue-500 font-medium"
      >
        <div className="flex items-center">Legal</div>
      </a>
    </ul>
  );

  const SolutionButton = () => (
    <button className="flex items-center font-light group transition h-9 px-3">
      <p className="group-hover:opacity-75 transition font-bold">서비스 소개</p>
      <BiChevronDown className={`opacity-75 text-xl`} />
    </button>
  );

  const CompanyButton = () => (
    <button className="flex items-center font-light group transition h-9 px-3">
      <p className="group-hover:opacity-75 transition font-bold">회사소개</p>
      <BiChevronDown className="opacity-75 text-xl" />
    </button>
  );

  const ResourcesButton = () => (
    <button className="flex items-center font-light group transition h-9 px-3">
      <p className="group-hover:opacity-75 transition font-bold">Resources</p>
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
            } absolute top-9 -left-1 shadow-xl rounded-lg`}
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
      className={`${
        light ? "text-black" : "text-white"
      } w-full flex h-16 px-4 items-center justify-between z-50 flex-shrink-0 absolute top-0`}
    >
      <div className="flex items-center text-sm font-nanum">
        <a
          href="/"
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
        <a href="/pricing">
          <button className="hidden sm:flex items-center font-bold group transition hover:opacity-75 px-3">
            <p>Pricing</p>
          </button>
        </a>
      </div>
      <div className="hidden sm:flex space-x-1 font-poppins sm:text-base text-sm justify-end items-center">
        <button className="transition hover:opacity-75 rounded-lg h-8 px-4 font-nanum text-sm font-bold">
          로그인
        </button>
        <button className="transition hover:opacity-75 rounded-lg h-8 px-4 font-nanum text-sm border font-bold">
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
