import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const DownloadApp = () => {
  useEffect(() => {
    if (
      getMobileOperatingSystem() === "Windows Phone" ||
      getMobileOperatingSystem() === "Android"
    ) {
      window.location.replace("https://www.turnup.vip");
    } else if (getMobileOperatingSystem() === "iOS") {
      window.location.replace("https://apps.apple.com/us/app/curiyus-connect-on-campus/id1661884814");
    }
    return () => {};
  }, []);

  function downloadClicked() {
    if (
      getMobileOperatingSystem() === "Windows Phone" ||
      getMobileOperatingSystem() === "Android"
    ) {
      window.location.replace("https://www.turnup.vip");
    } else if (getMobileOperatingSystem() === "iOS") {
      window.location.replace("https://apps.apple.com/us/app/curiyus-connect-on-campus/id1661884814");
    }
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }
  return (
    <div className="w-full h-screen sm:h-screen flex flex-col items-center gradient-animation">
      <Navbar />

      <div className="flex flex-col items-center h-full justify-center">
        <h1 className="font-poppins text-gray-400 text-4xl sm:text-5xl">
          <span className="font-poppins text-white text-4xl sm:text-5xl">
            Try Turnup
          </span>
        </h1>

        <button
          onClick={() => downloadClicked()}
          className="font-poppins text-black text-lg font-semibold sm:text-base bg-white p-2 rounded-full px-4 mt-12"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default DownloadApp;
