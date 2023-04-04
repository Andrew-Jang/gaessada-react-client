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
import Review from "../assets/pricing/review.png";

const Pricing = () => {
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
          1% OF THE INDUSTRY
        </p>
        <p
          style={{ color: "#272D37" }}
          className="text-4xl font-bold mt-6 font-nanum"
        >
          기업 맞춤형 어시스턴트로
        </p>
        <p
          style={{ color: "#272D37" }}
          className="text-4xl font-bold mt-4 font-nanum"
        >
          더 정확하고 신속하게
        </p>
        <p
          style={{ color: "#5F6D7E" }}
          className="font-nanum mt-8 text-center break-keep"
        >
          기본으로 배정되는 어시스턴트의 역할을 확장하세요.
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
                ? "무료"
                : isYear
                ? `${price * 11}만 원`
                : `${price}만 원`}
            </p>
            {price !== 0 && (
              <p
                style={{ color: "#5F6D7E" }}
                className="text-sm font-bold mb-3"
              >
                {isYear ? "/ 1년" : "/ 월"}
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
              <p className="text-sm font-nanum ml-3">고객 지원 및 분쟁 해결</p>
            </div>
            <div className="flex">
              <img
                className="w-5 object-contain"
                src={includes > 1 ? CheckFill : CheckEmpty}
                alt=""
              />
              <p className="text-sm font-nanum ml-3">
                개발자 매칭 시 마일스톤 검증
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
                  ? "업무시간 상시 요청 가능"
                  : "월 30시간 요청 가능"}
              </p>
            </div>
            <div className="flex">
              <img
                className="w-5 object-contain"
                src={includes > 3 ? CheckFill : CheckEmpty}
                alt=""
              />
              <p className="text-sm font-nanum ml-3">중간관리 및 소통 보조</p>
            </div>
          </div>

          <a href="/">
            <button
              style={{ backgroundColor: "#1FAD72" }}
              className="flex items-center justify-center hover:opacity-75 w-full h-9 rounded-md mt-8 transition"
            >
              <p className="font-nanum font-bold text-white text-sm">
                계속하기
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
            <OptionButton index={0} title="월 구독" />
            <OptionButton index={1} title="1년 구독" />
          </div>

          <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:space-x-6 mt-12 w-full sm:justify-center items-center">
            <PriceCard
              price={0}
              plan={"베이식 플랜"}
              text="개발자 매칭 때 마일스톤을 검증해 주고 분쟁을 해결해 주는 어시스턴트가 배정됩니다."
              includes={2}
              isYear={optionIndex}
            />
            <PriceCard
              price={40}
              plan={"스탠다드 플랜"}
              text="월 30시간에 한에 업무시간 아무 때나 어시스턴트의 도움을 요청할 수 있습니다."
              includes={3}
              isYear={optionIndex}
            />
            <PriceCard
              price={160}
              plan={"엔터프라이즈 플랜"}
              text="기업과 개발자 사이에 개발 지식을 보유하고 언어에 능통한 PM이 배정됩니다."
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
                자세히 보기
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
            어시스턴트의 역할
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum text-sm px-4 text-center mb-12"
          >
            어시스턴트의 역할은 플랜마다 다르지만 기본적으로 제공되는 서비스는
            아래와 같습니다.
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 px-4 gap-16">
            <Cell
              icon={Option1}
              title={"마일스톤 검증"}
              text={
                "모든 채용은 최소 한 달 이상의 마일스톤을 설정해야 하며, 요청 시 기업의 전달 내용과 개발자의 이해사항이 일치하는지 확인해 드립니다."
              }
            />
            <Cell
              icon={Option2}
              title={"분쟁시 관여"}
              text={
                "매달 기업은 개발자에 대한 평가를 진행하며, 문제가 있을 시 kookje.in에서 마일스톤과 개발자의 업무내용을 바탕으로 분쟁을 조정합니다."
              }
            />
            <Cell
              icon={Option3}
              title={"비상 상황 해결"}
              text={
                "개발자 대체 필요시 1주일 내로 대체자를 찾고 인수인계를 보조합니다."
              }
            />
            <Cell
              icon={Option4}
              title={"월 30시간 보조 (스탠다드)"}
              text={
                "번역, 통영, 영상 미팅 참여 등 여러 가지의 보조 업무를 월 30시간에 한에 어시스턴트를 요청할 수 있습니다."
              }
            />
            <Cell
              icon={Option5}
              title={"중간 관리 및 소통 담당 (엔터프라이즈)"}
              text={
                "기업은 개발자에게 할당할 업무를 kookje.in PM을 통해 전달할 수 있습니다. 소통에 어려움을 느끼신다면 이용을 권장 드립니다."
              }
            />
            <Cell
              icon={Option6}
              title={"업무시간 상시 대기 (엔터프라이즈)"}
              text={
                "스탠다드와 다르게 월 30시간의 제한이 없고 업무시간에는 PM은 항상 상시 대기 중입니다."
              }
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
            우리 기업에 최적화된 플랜
          </p>
          <p
            style={{ color: "#A5ACBA" }}
            className="font-nanum text-sm px-4 text-center"
          >
            영어로 소통이 어느 정도 가능하다면 베이식 플랜.
          </p>
          <p
            style={{ color: "#A5ACBA" }}
            className="font-nanum text-sm px-4 text-center mt-1"
          >
            영어로 소통이 가능하되 도움이 많이 필요할 땐 스탠다드 플랜.
          </p>
          <p
            style={{ color: "#A5ACBA" }}
            className="font-nanum text-sm px-4 text-center mt-1 mb-12"
          >
            소통이 불가능할 정도로 어려움을 겪는다면 엔터프라이즈 플랜.
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
          <img src={Review} alt="" className="max-w-5xl" />
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
            신뢰도를 우선시하는 해외 개발자 채용 플랫폼
          </p>
          <button
            style={{ backgroundColor: "#FFFFFF", color: "#0E5034" }}
            className="text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
          >
            회원가입
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
