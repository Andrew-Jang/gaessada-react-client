import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.png";
import Client1 from "../assets/client1.webp";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.webp";
import Client5 from "../assets/client5.webp";
import TechStack from "../assets/techstack.png";
import Lanyard from "../assets/lanyard.png";
import { useNavigate } from "react-router-dom";
import Sample2 from "../assets/sample2.png";
import { AiFillStar } from "react-icons/ai";

const MainPage = () => {
  const navigate = useNavigate();

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
        title: "(주)픽톨로지, 웹 퍼블리셔",
        name: "모리스 (Mo Alghazali)",
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
          maxHeight: "32rem",
          maxWidth: "32rem",
          animation: "fade 6s infinite",
        }}
        className="relative w-full"
      >
        <div
          style={{ backdropFilter: "blur(14px)" }}
          className={`w-full sm:w-64 h-24 bg-black absolute left-0 bg-opacity-40 rounded-xl flex flex-col justify-center px-4 -bottom-12 sm:bottom-4 z-30`}
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
            maxHeight: "32rem",
            aspectRatio: 1,
          }}
          alt=""
          className="object-cover rounded-full z-20"
          draggable={false}
        />
        <div className="bg-black w-full h-full rounded-full absolute z-10 top-0 opacity-5"></div>
      </div>
    );
    return (
      <div
        style={{ minHeight: "42rem" }}
        className={`flex h-full items-center flex-col sm:flex-row z-20 w-screen relative justify-center transition bg-gradient-to-b from-green-900 to-emerald-900`}
      >
        <div
          style={{ maxWidth: "1400px" }}
          className="w-full relative h-full flex px-6 sm:flex-row flex-col items-center"
        >
          <div className="flex flex-col justify-center max-w-2xl h-full z-20 sm:mt-0 mt-48">
            <img
              src={Sample2}
              alt=""
              className="object-contain"
              draggable={false}
            />
            <h2
              className="text-white text-lg mt-8 font-nanum font-thin"
              draggable={false}
            >
              저렴한 가격으로 높은 퀄리티의 개발자를 정규직으로 채용하세요
            </h2>
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
    <div className="py-12 sm:py-0 w-screen sm:h-24 flex bg-zinc-100 sm:flex-row flex-col items-center justify-center space-y-12 sm:space-y-0 sm:space-x-16">
      <p className="text-zinc-400 font-bold">남산을 신뢰하는 기업:</p>
      <img
        style={{ filter: "brightness(0) invert(0.6)" }}
        draggable={false}
        src={Client5}
        className="object-contain h-8"
        alt=""
      />

      <img
        style={{ filter: "brightness(0) invert(0.6)" }}
        draggable={false}
        src={Client3}
        className="object-contain h-12"
        alt=""
      />
      <img
        style={{ filter: "brightness(0) invert(0.6)" }}
        draggable={false}
        src={Client2}
        className="object-contain h-8"
        alt=""
      />
      <img
        style={{ filter: "brightness(0) invert(0.6)" }}
        draggable={false}
        src={Client4}
        className="object-contain h-8"
        alt=""
      />
      <img
        style={{ filter: "brightness(0) invert(0.6)" }}
        src={Client1}
        draggable={false}
        className="object-contain h-8"
        alt=""
      />
    </div>
  );

  const SecondSection = () => (
    <div className="flex w-screen items-center justify-center sm:flex-row flex-col">
      <img src={Lanyard} alt="" />
      <div className="flex flex-col items-center sm:ml-16 sm:mt-48 mt-12">
        <p className="text-4xl font-bold">219명의 글로벌 인재를</p>
        <p className="text-4xl font-bold mt-2">만나보세요.</p>
        <p className="text-xs mt-2">(*23년 2월 24일 기준)</p>
        <p className="mt-6">UI/UX 퍼블리셔부터, 모바일 앱,</p>
        <p>결제시스템, DB 설계, AI 백엔드 개발자까지,</p>
        <p className="mt-4">사전 테스트와 평점 시스템을 통해</p>
        <p>실력이 검증된 개발자가 기다리고 있어요.</p>

        <button className="mt-16 font-bold text-blue-500 text-xl">
          스킬셋 자세히 보기 {"↓"}
        </button>
      </div>
    </div>
  );

  const ThirdSection = () => (
    <div className="flex w-screen items-center justify-center sm:flex-row flex-col-reverse mt-24 mb-24">
      <div className="flex flex-col items-center mt-12 sm:mt-0">
        <p className="text-4xl font-bold">40+ 다양한 스킬셋.</p>
        <p className="text-4xl font-bold mt-2">풀스텍 개발자</p>
        <p className="mt-6">
          저희 개발자들은 다양한 스킬셋을 보유하고 있습니다.
        </p>
        <p className="mt-6">
          필요한 기술 스택이나 툴셋이 있으시다면 문의해주세요,
        </p>
        <p>가능한 한 그에 맞는 개발자를 매칭 해드릴 수 있습니다.</p>
        <p className="mt-4">AI, 빅데이터, 블록체인 등 세부적인</p>
        <p>스킬셋이 필요하시면 문의해주세요.</p>

        <button className="mt-16 font-bold text-blue-500 text-xl">
          문의하기 {">"}
        </button>
      </div>
      <img src={TechStack} alt="" className="sm:px-12 px-4 -mr-4 sm:w-1/3" />
    </div>
  );

  const Footer = () => (
    <div className="w-full bg-zinc-100 py-12">
      <div className="px-4 sm:px-12 text-xs">
        <div className="flex">
          <p className="font-bold mr-2">ADD.</p>
          <p>
            서울특별시 중구 퇴계로 18길 33 504호 남산컴퍼니 · Toegye-RO 18-GIL,
            33 Jung-GU, SEOUL, SOUTH KOREA
          </p>
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
      <div className="w-full h-24 flex items-center px-4 sm:px-12 space-x-4 ">
        <button className="text-xs">FAQ</button>
        <button className="text-xs">About</button>
        <button className="text-xs">Contact</button>
        <button className="text-xs">Careers</button>
        <button className="text-xs" onClick={() => navigate("/legal")}>
          Legal
        </button>
      </div>
      <div className="flex mt-2 px-4 sm:px-12 text-xs">
        (C) {new Date().getFullYear()} NAMSAN COMPANY. ALL RIGHTS RESERVED.
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col items-center min-h-screen overflow-x-hidden font-nanum">
      <Navbar />
      <WelcomeSection />
      <ClientSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
};

export default MainPage;
