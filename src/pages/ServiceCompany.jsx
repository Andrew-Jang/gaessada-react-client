import React from "react";
import Navbar from "../components/Navbar";
import CompanyText from "../assets/service/company_text.png";
import CompanyWelcome from "../assets/service/company_welcome.png";
import CompanyText2 from "../assets/service/company_text2.png";
import CompanyWelcome2 from "../assets/service/company_welcome2.png";
import Solution1 from "../assets/service/solution1.png";
import Solution2 from "../assets/service/solution2.png";
import Solution3 from "../assets/service/solution3.png";
import Solution4 from "../assets/service/solution4.png";
import Solution5 from "../assets/service/solution5.png";
import Solution6 from "../assets/service/solution6.png";
import CompanyDevs from "../assets/service/company_devs.png";
import Footer from "../components/Footer";

const ServiceCompany = () => {
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
              src={CompanyText}
              alt=""
              className="object-contain"
              draggable={false}
            />
            <div className="w-full mt-8 flex justify-center sm:justify-start">
              <button
                style={{ backgroundColor: "#1FAD72" }}
                className="text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
              >
                무료 개발자 매칭 시작
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
      <div className="font-nanum">
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
          <Cell
            title="상위 3%"
            text="세계적으로 인정받는 개발자 프로그램 Gaza Sky Geeks 출신의 개발자"
          />
          <Cell
            title="가격 40%"
            text="한국 개발자 채용 대비 40% 이상 비용을 절감해 내실 있는 선택"
          />
          <Cell
            title="월급 187만원"
            text="검증된 개발자를 월 187만 원부터 합리적인 가격으로 계약 가능"
          />
          <Cell
            title="채용 3일"
            text="3일 안에 채용 등록부터, 개발자 매칭, 면접, 채용 완료까지"
          />
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
                자세히 보기
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
            Our Solution Review
          </p>
          <p
            style={{ color: "#BFDED1" }}
            className="font-nanum text-sm px-4 text-center"
          >
            월 187만 원으로 상위 3% 글로벌 개발자를 원격 정규직으로 채용할 수
            있습니다.
          </p>
          <p
            style={{ color: "#BFDED1" }}
            className="font-nanum text-sm mt-1 mb-16 px-4 text-center"
          >
            아래의 솔루션으로 대표님의 만족도를 최상으로 유지합니다.
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 px-4 gap-6">
            <Cell
              icon={Solution1}
              title="3% / 40%"
              text="상위 3%의 개발자를 한국 개발자 채용 대비 40% 저렴한 비용으로 채용할 수 있습니다."
            />
            <Cell
              icon={Solution2}
              title="최적의 매칭 시스템"
              text="채용 등록을 완료하면 다수의 적합자와 매칭되며 그중 최적의 개발자와 계약할 수 있습니다."
            />
            <Cell
              icon={Solution3}
              title="간편하고 안전한 월급 지급"
              text="에스크로 서비스를 통해 대금을 계약 만료 후 
              마일스톤 검증 완료일까지 안전하게 보호합니다."
              learnMore
            />
            <Cell
              icon={Solution4}
              title="채용 만족도 유지"
              text="업무상태 만족도를 유지하도록 개발자는 매일 업무일지 혹은 주간일지를 제출합니다."
            />
            <Cell
              icon={Solution5}
              title="유연한 인력투입"
              text="매칭 후 다른 스킬셋의 개발자를 원하시면 1주일 내로 새롭게 매칭해드립니다."
            />
            <Cell
              icon={Solution6}
              title="어시스턴트 / PM"
              text="각 기업마다 어시스턴트 혹은 PM 을 배정해 소통을 도와드리고 분쟁을 해결해 줍니다."
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
              src={CompanyText2}
              alt=""
              className="object-contain"
              draggable={false}
            />
            <div className="w-full mt-8 flex justify-center sm:justify-start">
              <button
                style={{ backgroundColor: "#1FAD72" }}
                className="text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
              >
                지금 시작하기
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
            개발자 인력풀 예시
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum text-sm mt-1 mb-16 px-4 text-center"
          >
            세계적으로 인정받는 개발자 프로그램 Gaza Sky Geeks 출신의 개발자
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
            상위 3%의 개발자를 40% 저렴하게.
          </p>
          <button
            style={{ backgroundColor: "#FFFFFF", color: "#0E5034" }}
            className="text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
          >
            무료 개발자 매칭 시작
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
