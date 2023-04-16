import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero1 from "../assets/main/hero1.jpg";
import Hero2 from "../assets/main/hero2.jpg";
import Hero3 from "../assets/main/hero3.png";
import Hero4 from "../assets/main/hero4.png";
import Client1 from "../assets/main/client1.png";
import Client2 from "../assets/main/client2.png";
import Client3 from "../assets/main/client3.png";
import Client4 from "../assets/main/client4.png";
import Client5 from "../assets/main/client5.png";
import FourthType1 from "../assets/main/type1.png";
import FourthType2 from "../assets/main/type2.png";
import FourthType3 from "../assets/main/type3.png";
import FourthType4 from "../assets/main/type4.png";
import FourthType5 from "../assets/main/type5.png";
import FourthType6 from "../assets/main/type6.png";
import Process1 from "../assets/main/process1.png";
import Process2 from "../assets/main/process2.png";
import Process3 from "../assets/main/process3.png";
import Process4 from "../assets/main/process4.png";
import LeftArrow from "../assets/main/left_arrow.png";
import RightArrow from "../assets/main/right_arrow.png";
import Checkmark from "../assets/main/checkmark.png";
import TechStack from "../assets/main/techstack.png";
import Partner1 from "../assets/main/partner1.png";
import { AiFillStar } from "react-icons/ai";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("mainPage");

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
        title: t("hero1.title"),
        name: t("hero1.name"),
      },
      {
        image: Hero4,
        title: t("hero2.title"),
        name: t("hero2.name"),
      },
      {
        image: Hero2,
        title: t("hero3.title"),
        name: t("hero3.name"),
      },
      {
        image: Hero3,
        title: t("hero4.title"),
        name: t("hero4.name"),
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
          <p className="text-white text-sm mt-2 font-bold">{title}</p>
          <p className="text-white text-sm mt-1 font-bold">{name}</p>
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
              src={t("welcomeText")}
              alt=""
              className="object-contain"
              draggable={false}
            />
            <div className="w-full mt-8 flex justify-center sm:justify-start">
              <button
                style={{ backgroundColor: "#1FAD72" }}
                className="text-white text px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
              >
                {t("welcomeButton")}
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
        <img
          src={t("second.lanyard")}
          alt=""
          className="max-w-xs -mt-12"
          draggable={false}
        />
        <div className="flex flex-col items-center sm:ml-16 sm:mt-32 mt-12 font-nanum">
          <p className="text-3xl font-bold">{t("second.title1")}</p>
          <p className="text-3xl font-bold mt-2">{t("second.title2")}</p>
          <p className="mt-12">{t("second.body1")}</p>
          <p>{t("second.body2")}</p>
          <p className="mt-6">{t("second.body3")}</p>
          <p>{t("second.body4")}</p>

          <div className="mt-16 text-xs w-full flex justify-end">
            {t("second.timestamp")}
          </div>
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
          <p className="text-3xl font-bold">{t("third.title1")}</p>
          <p className="text-3xl font-bold mt-2">{t("third.title2")}</p>
          <p className="mt-12">{t("third.body1")}</p>
          <p className="">{t("third.body2")}</p>
          <p className="mt-6">{t("third.body3")}</p>
          <p>{t("third.body4")}</p>
          <p className="mt-6">{t("third.body5")}</p>
          <p>{t("third.body6")}</p>

          <div className="mt-16 text-xs w-full flex justify-end">
            {t("third.timestamp")}
          </div>
        </div>
        <img
          src={TechStack}
          alt=""
          className="max-w-lg px-4"
          draggable={false}
        />
      </div>
    </div>
  );

  const FourthSection = () => {
    const Cell = ({ icon, title, text1, text2 }) => (
      <div className="flex flex-col items-center font-nanum">
        <img src={icon} className="w-16" alt="" draggable={false} />
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
            {t("fourth.sectionTitle")}
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 px-4 gap-16">
            <Cell
              icon={FourthType1}
              title={t("fourth.1.title")}
              text1={t("fourth.1.body1")}
              text2={t("fourth.1.body2")}
            />
            <Cell
              icon={FourthType2}
              title={t("fourth.2.title")}
              text1={t("fourth.2.body1")}
              text2={t("fourth.2.body2")}
            />
            <Cell
              icon={FourthType3}
              title={t("fourth.3.title")}
              text1={t("fourth.3.body1")}
              text2={t("fourth.3.body2")}
            />
            <Cell
              icon={FourthType4}
              title={t("fourth.4.title")}
              text1={t("fourth.4.body1")}
              text2={t("fourth.4.body2")}
            />
            <Cell
              icon={FourthType5}
              title={t("fourth.5.title")}
              text1={t("fourth.5.body1")}
              text2={t("fourth.5.body2")}
            />
            <Cell
              icon={FourthType6}
              title={t("fourth.6.title")}
              text1={t("fourth.6.body1")}
              text2={t("fourth.6.body2")}
            />
          </div>
        </div>
      </div>
    );
  };

  const FifthSection = () => {
    const [progressIndex, setProgressIndex] = useState(0);
    const progressData = [
      {
        img: Process1,
        step: "Step 1",
        title: t("fifth.1.title"),
        text1: t("fifth.1.text1"),
        text2: t("fifth.1.text2"),
      },
      {
        img: Process2,
        step: "Step 2",
        title: t("fifth.2.title"),
        text1: t("fifth.2.text1"),
        text2: t("fifth.2.text2"),
      },
      {
        img: Process3,
        step: "Step 3",
        title: t("fifth.3.title"),
        text1: t("fifth.3.text1"),
        text2: t("fifth.3.text2"),
      },
      {
        img: Process4,
        step: "Step 4",
        title: t("fifth.4.title"),
        text1: t("fifth.4.text1"),
        text2: t("fifth.4.text2"),
      },
    ];
    const BarCell = ({ title, index }) => (
      <button
        onClick={() => setProgressIndex(index)}
        className="flex flex-col items-center w-full group transition"
      >
        <p
          className={`${
            progressIndex !== index
              ? "text-gray-400 group-hover:text-gray-500"
              : "text-black font-bold"
          } font-poppins mb-4 sm:text-sm text-xs transition`}
        >
          {title}
        </p>
        <div
          style={{ backgroundColor: progressIndex >= index && "#1FAD72" }}
          className="w-full h-1 group-hover:bg-gray-300 bg-gray-200 transition"
        ></div>
      </button>
    );
    const IndexCell = () => (
      <div className="flex p-8 w-full">
        <div className="sm:w-1/2 w-full">
          <p style={{ color: "#1FAD72" }} className="font-nanum font-bold text">
            {progressData[progressIndex].step}
          </p>

          <p className="font-nanum font-bold text-lg mt-8 break-keep">
            {progressData[progressIndex].title}
          </p>

          <div className="mt-8">
            <div className="flex items-start">
              <img src={Checkmark} className="w-3 object-contain" alt="" />
              <p className="text-xs font-nanum ml-2 break-keep">
                {progressData[progressIndex].text1}
              </p>
            </div>
            <div className="flex items-start mt-4">
              <img src={Checkmark} className="w-3 object-contain" alt="" />
              <p className="text-xs font-nanum ml-2 break-keep">
                {progressData[progressIndex].text2}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex w-1/2 max-h-72 h-full">
          <img
            src={progressData[progressIndex].img}
            alt=""
            className="w-full h-full hidden sm:flex max-h-72 object-contain"
            draggable={false}
          />
        </div>
      </div>
    );
    return (
      <div
        style={{ backgroundColor: "#FAFAFD" }}
        className="flex w-screen items-center justify-center sm:flex-row flex-col-reverse py-24"
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="flex flex-col w-full items-center h-full px-4"
        >
          <p className="font-nanum text-lg mb-16 px-4 max-w-4xl w-full">
            {t("fifth.sectionTitle")}
          </p>

          <div className="flex w-full mb-12 max-w-4xl px-4">
            <BarCell index={0} title={t("fifth.1.bar")} />
            <BarCell index={1} title={t("fifth.2.bar")} />
            <BarCell index={2} title={t("fifth.3.bar")} />
            <BarCell index={3} title={t("fifth.4.bar")} />
          </div>
          <div className="max-w-4xl w-full flex h-full">
            <button
              onClick={() =>
                progressIndex > 0 && setProgressIndex(progressIndex - 1)
              }
              className="w-8 h-80 hover:bg-gray-100 flex items-center px-2 transition"
            >
              <img src={LeftArrow} alt="" />
            </button>
            <IndexCell />
            <button
              onClick={() =>
                progressIndex < 3 && setProgressIndex(progressIndex + 1)
              }
              className="w-8 h-80 hover:bg-gray-100 flex items-center px-2 transition"
            >
              <img src={RightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SixthSection = () => {
    return (
      <div className="flex w-screen items-center justify-center sm:flex-row flex-col py-24">
        <div
          style={{ maxWidth: "1280px" }}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-nanum text-2xl font-bold">{t("sixth.title")}</p>
          <p className="font-nanum mt-2 mb-16">{t("sixth.subtitle")}</p>
          <img src={Partner1} alt="" className="h-20" draggable={false} />
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
            {t("seventh.title")}
          </p>
          <button
            style={{ backgroundColor: "#FFFFFF", color: "#0E5034" }}
            className="text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition font-nanum font-semibold"
          >
            {t("seventh.button")}
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
