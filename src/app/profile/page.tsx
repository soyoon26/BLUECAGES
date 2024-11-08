import React from "react";
import profilecut from "../../../public/profilecut.webp";
import Image from "next/image";
import ProfileImage from "../components/profile/ProfileImage";

const page = () => {
  return (
    <div className="bg-black gap-10 flex justify-center">
      <ProfileImage />
      <section className="w-min-[100px]">
        <div className="flex-col">
          <div className="flex ">
            <div className="w-[100px] profile-h">이름</div>
            <div className="profile-h">홍경(洪炅)</div>
          </div>
          <div className="flex ">
            <div className="w-[100px] profile-h">인스타그램</div>
            <div className="profile-h">@bluecages</div>
          </div>
          <div className="flex ">
            <div className="w-[100px] profile-h">생일</div>
            <div className="profile-h">1996년 2월 14일</div>
          </div>
          <div className="flex">
            <div className="w-[100px] profile-h">혈액형</div>
            <div className="profile-h">O형</div>
          </div>
          <div className="flex">
            <div className="w-[100px] profile-h">키</div>
            <div className="profile-h">182cm</div>
          </div>
          <div className="flex">
            <div className="w-[100px] items-center flex">가족</div>
            <div className="flex-col">
              <div className="profile-h">부모님, 남동생</div>
              <div className="profile-h">
                반려견 원이, 코코, 레오나르도 디카프리오
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[100px] items-center flex">학력</div>
            <div className="flex-col">
              <div className="profile-h">배문고등학교</div>
              <div className="profile-h">
                한양대학교 예술·체육대학 연극영화학{" "}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[100px] profile-h">MBTI</div>
            <div className="profile-h">INFJ</div>
          </div>
          <div className="flex">
            <div className="w-[100px] profile-h">소속사</div>
            <div className="profile-h">매니지먼트엠엠엠</div>
          </div>
          <div className="flex">
            <div className="w-[100px] profile-h">데뷔</div>
            <div className="profile-h">2017년 KBS 2TV 드라마 학교 2017</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
