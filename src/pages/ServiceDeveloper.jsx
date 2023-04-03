import React from "react";
import Navbar from "../components/Navbar";
import DevSolution1 from "../assets/service/dev_solution1.png";
import DevSolution2 from "../assets/service/dev_solution2.png";
import DevSolution3 from "../assets/service/dev_solution3.png";
import DevWelcome2 from "../assets/service/dev_welcome2.png";
import DevPeople from "../assets/service/dev_people.png";
import Footer from "../components/Footer";
import Checkmark from "../assets/main/checkmark.png";

const ServiceDeveloper = () => {
  const WelcomeSection = () => (
    <div
      style={{ backgroundColor: "#FAFAFD" }}
      className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24 mt-16`}
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full relative h-full flex px-4 flex-col items-center"
      >
        <p
          style={{ color: "#1FAD72" }}
          className="font-bold font-nanum text-sm"
        >
          한국 기업에서 커리어를 쌓으세요
        </p>
        <p
          style={{ color: "#272D37" }}
          className="text-4xl font-bold mt-4 font-nanum"
        >
          글로벌 개발자이신가요?
        </p>
        <p
          style={{ color: "#5F6D7E" }}
          className="font-nanum mt-8 text-center break-keep"
        >
          비전과 명성 있는 한국 기업에서 개발자로 커리어를 쌓고 안정적인 수입을
          경험하세요.
        </p>

        <div className="hidden sm:flex space-x-1 font-poppins sm:text-base text-sm justify-end items-center mt-12">
          <button
            style={{ backgroundColor: "#1FAD72" }}
            className="text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );

  const SecondSection = () => {
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
            글로벌 개발자를 위한 혜택
          </p>
          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum text-sm px-4 text-center mb-12"
          >
            기업과 매칭이 빠르고 보수를 최적화 시켜 개발자를 위한 최고의 업무
            환경을 제공합니다.
          </p>
          <div className="flex w-full flex-col sm:flex-row sm:justify-center sm:space-x-4 items-center sm:items-start">
            <Cell
              icon={DevSolution1}
              title={"한국 중소기업과의 매칭"}
              text={
                "개발자로 가입 후, 실력 검증 시스템과 테크스택을 기반으로 최적의 기업과 매칭됩니다. "
              }
            />
            <Cell
              icon={DevSolution2}
              title={"안정적인 소득"}
              text={
                "계약기간은 최소 1개월이며 최소 월 130만 원부터 시작됩니다. 실력 검증이 되면 기본으로 제공되는 금액으로 안정적인 수입을 경험하세요."
              }
            />
            <Cell
              icon={DevSolution3}
              title={"매월 소득의 증가"}
              text={
                "최고의 성과와 재계약률을 높이는 비결은 업무를 진행하면서 매달 월급이 약 3만원씩 오릅니다."
              }
            />
          </div>
        </div>
      </div>
    );
  };

  const ThirdSection = () => {
    const IndexCell = () => (
      <div className="flex p-8 w-full justify-center sm:space-x-12">
        <div className="w-full max-w-lg">
          <p className="font-nanum font-bold text-2xl mt-8 break-keep">
            한국에서의 커리어를 어시스턴트가 도와드리겠습니다.
          </p>

          <p
            style={{ color: "#5F6D7E" }}
            className="font-nanum mt-4 break-keep text-xs leading-6"
          >
            언어 장벽에 대해 걱정할 필요가 없습니다. 대부분의 회사들은
            기본적으로 영어를 구사하지만, 남산컴퍼니 또한 당신이 정착할 수
            있도록 영어와 한국어에 능통한 어시스턴트를 배정합니다. 어시스턴트는
            다음을 수행합니다:
          </p>

          <div className="mt-8">
            <div className="flex items-start">
              <img src={Checkmark} className="w-3 object-contain mt-1" alt="" />
              <p
                style={{ color: "#5F6D7E" }}
                className="text-xs font-nanum ml-2 break-keep"
              >
                업무 시작 전에 마일스톤을 이해했는지 검증합니다.
              </p>
            </div>
            <div className="flex items-start mt-4">
              <img src={Checkmark} className="w-3 object-contain mt-1" alt="" />
              <p
                style={{ color: "#5F6D7E" }}
                className="text-xs font-nanum ml-2 break-keep"
              >
                에스크로 서비스를 통해 급여를 안전하게 전달합니다.
              </p>
            </div>
            <div className="flex items-start mt-4">
              <img src={Checkmark} className="w-3 object-contain mt-1" alt="" />
              <p
                style={{ color: "#5F6D7E" }}
                className="text-xs font-nanum ml-2 break-keep"
              >
                분쟁이 생길 시 양측의 자료를 통해 원만하게 해결해 줍니다.
              </p>
            </div>
          </div>

          <a href="/">
            <button
              style={{ backgroundColor: "#1FAD72" }}
              className="text-white px-4 py-3 text-xs font-bold font-nanum rounded-md hover:opacity-75 transition mt-12"
            >
              자세히 보기
            </button>
          </a>
        </div>
        <div className="hidden sm:flex h-full">
          <img
            src={DevWelcome2}
            alt=""
            className="w-full h-full hidden sm:flex max-w-sm object-contain rounded-md"
            draggable={false}
          />
        </div>
      </div>
    );
    return (
      <div
        style={{ backgroundColor: "#FAFAFD" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24 mt-16`}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="w-full relative h-full flex px-4 flex-col items-center"
        >
          <IndexCell />
        </div>
      </div>
    );
  };

  const FifthSection = () => (
    <div
      className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition py-24`}
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full relative h-full flex flex-col items-center px-4 "
      >
        <p className="font-nanum text-2xl font-bold mb-4 px-4">
          뭐든지 물어보세요!
        </p>
        <p
          style={{ color: "#5F6D7E" }}
          className="font-nanum text-sm px-4 text-center mb-12"
        >
          궁금한 게 있으면 실제로 한국 기업과 일하고 있는 개발자들한테 직접
          물어보세요.
        </p>

        <img src={DevPeople} alt="" className="max-w-4xl" />
      </div>
    </div>
  );
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
            한국에서의 커리어는 여기서 시작하세요.
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
      <FifthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
};

export default ServiceDeveloper;
