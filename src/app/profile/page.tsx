import React from "react";
import profilecut from "../../../public/profilecut.webp";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-black w-screen flex">
      <Image src={profilecut} alt="Profile" width={300} height={200} />
      <section>
        <div className="flex-col">
          <div className="flex">
            <div>생일</div>
            <div>1996년 2월 14일</div>
          </div>
          <div className="flex">
            <div>혈액형</div>
            <div>O형</div>
          </div>
          <div className="flex">
            <div>키</div>
            <div>182cm</div>
          </div>
          <div className="fles">
            <div>가족</div>
            <div className="flex-col">
              <div>부모님, 남동생</div>
              <div>반려견 원이, 코코, 레오나르도 디카프리오</div>
            </div>
          </div>
          <div className="flex">
            <div>학력</div>
            <div className="flex-col">
              <div>배문고등학교</div>
              <div>한양대학교 예술·체육대학 연극영화학 </div>
            </div>
          </div>
          <div className="flex">
            <div>MBTI</div>
            <div>INFJ</div>
          </div>
          <div className="flex">
            <div>소속사</div>
            <div>매니지먼트엠엠엠</div>
          </div>
          <div className="flex">
            <div>데뷔</div>
            <div>2017년 KBS 2TV 드라마 학교 2017</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
