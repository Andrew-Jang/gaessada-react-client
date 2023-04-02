import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.png";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";
import FourthType1 from "../assets/main/type1.png";
import FourthType2 from "../assets/main/type2.png";
import FourthType3 from "../assets/main/type3.png";
import FourthType4 from "../assets/main/type4.png";
import FourthType5 from "../assets/main/type5.png";
import FourthType6 from "../assets/main/type6.png";
import Process1 from "../assets/main/process1.png";
// import Process2 from "../assets/main/process2.png";
// import Process3 from "../assets/main/process3.png";
// import Process4 from "../assets/main/process4.png";
import TechStack from "../assets/techstack.png";
import WelcomeText from "../assets/welcome_text.png";
import Lanyard from "../assets/lanyard.png";
import Partner1 from "../assets/main/partner1.png";
import { AiFillStar } from "react-icons/ai";
import Footer from "../components/Footer";

const MainPage = () => {
  const WelcomeSection = () => {
    const [heroIndex, setHeroIndex] = useState(0);

    function preloadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          resolve(img);
        };
        img.onerror = img.onabort = function () {
          reject(src);
        };
        img.src = src;
      });
    }

    const heros = [
      {
        image: Hero1,
        title: "(주)픽톨로지, 프론트엔드",
        name: "모 알가잘리 (Mo Alghazali)",
      },
      {
        image: Hero4,
        title: "(주)픽톨로지, 프론트엔드",
        name: "세린 다우드 (Sereen Daud)",
      },
      {
        image: Hero2,
        title: "(주)버틱비, 노드 개발자",
        name: "아마드 사피 (Ahmad Safi)",
      },
      {
        image: Hero3,
        title: "턴업, iOS 개발자",
        name: "안드레 볼츠키 (Andre volchki)",
      },
    ];
    useEffect(() => {
      const interval = setInterval(() => {
        if (heroIndex === 3) {
          setHeroIndex(0);
        } else {
          setHeroIndex(heroIndex + 1);
        }
      }, 6000);
      return () => clearInterval(interval);
    }, [heroIndex]);

    useEffect(() => {
      const preloadSrcList = [Hero1, Hero2, Hero3, Hero4];

      let isCancelled = false;

      async function effect() {
        if (isCancelled) {
          return;
        }

        const imagesPromiseList = [];
        for (const i of preloadSrcList) {
          imagesPromiseList.push(preloadImage(i));
        }

        await Promise.all(imagesPromiseList);

        if (isCancelled) {
          return;
        }
      }

      effect();

      return () => {
        isCancelled = true;
      };
    }, []);
    const HeroProfile = ({ img, title, name }) => (
      <div
        style={{
          maxHeight: "30rem",
          maxWidth: "30rem",
          animation: "fade 6s infinite",
        }}
        className="relative w-full"
      >
        <div
          className={`w-full sm:w-64 h-24 absolute flex flex-col justify-center px-4 bottom-0 right-0 z-30 items-end`}
        >
          <div className="space-x-1 flex text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-white text-sm mt-2">{title}</p>
          <p className="text-white text-sm mt-1">{name}</p>
        </div>
        <img
          src={img}
          style={{
            maxHeight: "30rem",
            aspectRatio: 1,
          }}
          alt=""
          className="object-cover rounded-3xl z-20 w-full h-full"
          draggable={false}
        />
      </div>
    );
    return (
      <div
        style={{ minHeight: "42rem" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition bg-gradient-to-b from-green-900 to-emerald-900`}
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
              src={WelcomeText}
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
            <HeroProfile
              img={heros[heroIndex].image}
              title={heros[heroIndex].title}
              name={heros[heroIndex].name}
            />
          </div>
        </div>
      </div>
    );
  };

  const ClientSection = () => (
    <div
      style={{ backgroundColor: "#FAFAFD" }}
      className="py-12 sm:py-0 w-screen sm:h-24 flex sm:flex-row flex-col items-center justify-center space-y-12 sm:space-y-0 sm:space-x-16 z-20"
    >
      <p style={{ color: "#A5A5A5" }} className="font-semibold font-nanum">
        Trusted by:
      </p>
      <img
        draggable={false}
        src={Client5}
        className="object-contain h-7"
        alt=""
      />

      <img
        draggable={false}
        src={Client3}
        className="object-contain h-10"
        alt=""
      />
      <img
        draggable={false}
        src={Client2}
        className="object-contain h-6"
        alt=""
      />
      <img
        draggable={false}
        src={Client4}
        className="object-contain h-7"
        alt=""
      />
      <img
        src={Client1}
        draggable={false}
        className="object-contain h-8"
        alt=""
      />
    </div>
  );

  const SecondSection = () => (
    <div className="flex w-screen items-center justify-center sm:flex-row flex-col pb-24">
      <div
        style={{ maxWidth: "1280px" }}
        className="flex items-center justify-between sm:flex-row flex-col px-4 sm:space-x-24 sm:pr-12"
      >
        <img src={Lanyard} alt="" className="max-w-xs -mt-12" />
        <div className="flex flex-col items-center sm:ml-16 sm:mt-32 mt-12 font-nanum">
          <p className="text-3xl font-bold">219명의 글로벌 인재를</p>
          <p className="text-3xl font-bold mt-2">만나보세요.</p>
          <p className="mt-12">UI/UX 퍼블리싱부터, 프런트엔드, 백엔드,</p>
          <p>모바일 앱, DB 설계, AI, 블록체인 개발자까지</p>
          <p className="mt-6">사전 테스트와 평점 시스템을 통해</p>
          <p>실력이 검증된 개발자가 기다리고 있어요.</p>

          <button className="mt-16 text-xs w-full flex justify-end">
            2023년 2월 기준
          </button>
        </div>
      </div>
    </div>
  );

  const ThirdSection = () => (
    <div
      style={{ backgroundColor: "#FAFAFD" }}
      className="flex w-screen items-center justify-center sm:flex-row flex-col-reverse py-24"
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="flex items-center justify-center sm:flex-row flex-col-reverse sm:space-x-24 sm:pl-12"
      >
        <div className="flex flex-col items-center mt-12 sm:mt-0 font-nanum">
          <p className="text-3xl font-bold">40+ 다양한 스킬셋.</p>
          <p className="text-3xl font-bold mt-2">풀스텍 개발자</p>
          <p className="mt-12">저희 개발자들은 다양한 스킬셋을</p>
          <p className="">보유하고 있습니다.</p>
          <p className="mt-6">필요한 기술 스택이나 툴셋이 있으시면</p>
          <p>가능한 범위 내에서 맞는 개발자를 매칭해드립니다.</p>
          <p className="mt-6">AI, 빅데이터, 블록체인 등 전문적인</p>
          <p>스킬셋이 필요하시면 문의해 주세요.</p>

          <button className="mt-16 text-xs w-full flex justify-end">
            2023년 2월 기준
          </button>
        </div>
        <img src={TechStack} alt="" className="max-w-lg px-4" />
      </div>
    </div>
  );

  const FourthSection = () => {
    const Cell = ({ icon, title, text1, text2 }) => (
      <div className="flex flex-col items-center font-nanum">
        <img src={icon} className="w-16" alt="" />
        <p className="font-semibold mt-4">{title}</p>
        <p style={{ fontSize: "0.85rem" }} className="text-sm mt-4">
          {text1}
        </p>
        <p style={{ fontSize: "0.85rem" }} className="text-sm">
          {text2}
        </p>
      </div>
    );
    return (
      <div className="flex w-screen items-center justify-center sm:flex-row flex-col py-24">
        <div style={{ maxWidth: "1280px" }}>
          <p className="font-nanum text-lg mb-16 px-4">
            이제는 한국 기업도 외국인 개발자를 채용할 수 있습니다.
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 px-4 gap-16">
            <Cell
              icon={FourthType1}
              title="상위 3% 개발자"
              text1="세계적으로 인정받는 개발자 프로그램"
              text2="Gazaskygeeks의 개발자를 매칭해드립니다."
            />
            <Cell
              icon={FourthType2}
              title="맞춤형 어시스턴트"
              text1="각 기업마다 어시스턴트 혹은 PM이"
              text2="배정되어 소통의 장벽을 허물어줍니다."
            />
            <Cell
              icon={FourthType3}
              title="간편한 월급 지급"
              text1="에스크로 시스템을 통해 안전한"
              text2="해외 월급지급이 이루어집니다."
            />
            <Cell
              icon={FourthType4}
              title="전문 어시스턴트 배정"
              text1="각 기업마다 남산 소속 어시스턴트가"
              text2="배정되어 언어적 장벽을 허물어 줍니다."
            />
            <Cell
              icon={FourthType5}
              title="비용 절감"
              text1="한국 개발자 채용 대비 40% 이상"
              text2="비용을 절감할 수 있습니다."
            />
            <Cell
              icon={FourthType6}
              title="채용 만족도 유지"
              text1="매칭 후 1개월 이내 다른 개발자를"
              text2="원하시면 새롭게 매칭해드립니다."
            />
          </div>
        </div>
      </div>
    );
  };

  const FifthSection = () => (
    <div
      style={{ backgroundColor: "#FAFAFD" }}
      className="flex w-screen items-center justify-center sm:flex-row flex-col-reverse py-24"
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="flex"
      >
        <img src={Process1} alt="" className="max-w-4xl w-full px-4" />
      </div>
    </div>
  );

  const SixthSection = () => {
    return (
      <div className="flex w-screen items-center justify-center sm:flex-row flex-col py-24">
        <div
          style={{ maxWidth: "1280px" }}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-nanum text-2xl font-bold">협력사</p>
          <p className="font-nanum mt-2 mb-16">
            남산컴퍼니는 아래의 단체와 함께합니다.
          </p>
          <img src={Partner1} alt="" className="h-20" />
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
            합리적인 가격으로 상위 3% 개발자를 채용하세요.
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
      <Navbar />
      <WelcomeSection />
      <ClientSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
};

export default MainPage;
