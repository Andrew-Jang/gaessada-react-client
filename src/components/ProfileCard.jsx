import React from "react";
import Tags from "./Tags";

const ProfileCard = () => {
  return (
    <a href="/browse">
      <div
        style={{ color: "#272D37" }}
        className="w-full ring-1 ring-gray-200 shadow-sm rounded-sm"
      >
        <div className="w-full h-48 bg-gray-100"></div>
        <div className="w-full p-3 px-4 space-y-3">
          <div className="flex space-x-2">
            <Tags item="React.js" size="sm" />
            <Tags item="React.js" size="sm" />
          </div>

          <p className="font-bold text-lg">Mohammad Algazali</p>
          <p style={{ color: "#176343" }} className="font-bold text-sm">
            4년차 · 197만원/월
          </p>

          <p
            style={{
              width: "100%",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
            className="text-xs break-keep"
          >
            풀스택 소프트웨어 엔지니어로서 저는 강력한 문제 해결 능력과 높은
            수준의 서비스를 제공하는 열정을 가지고 있습니다.엔터프라이즈 및
            스타트업에서 6년간 전문 경력을 보유한 열정적인 풀스택 엔지니어
            프로젝트. 현재 셀렌보 회사에서 풀스택
          </p>

          <button
            style={{ color: "#1FAD72" }}
            className="font-bold font-nanum text-sm hover:underline py-3"
          >
            자세히 보기 →
          </button>
        </div>
      </div>
    </a>
  );
};

export default ProfileCard;
