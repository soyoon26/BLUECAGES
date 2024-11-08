"use client";

import React from "react";
import Image from "next/image";
import profilecut from "../../../../public/profilecut.webp";
import profilecut2 from "../../../../public/profilecut2.webp";
// import profilecut3 from "../../../../public/profilecut3.webp";
import profilecut4 from "../../../../public/profilecut4.webp";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProfileImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-[480px]">
      <div>
        <Image
          src={profilecut}
          alt="Profile"
          width={480}
          height={480}
          layout="fixed"
        />
      </div>
      <div>
        <Image src={profilecut2} alt="Profile2" width={480} height={480} />
      </div>
      {/* <div>
        <Image src={profilecut3} alt="Profile3" width={300} height={200} />
      </div> */}
      <div>
        <Image
          src={profilecut4}
          alt="Profile4"
          width={480}
          height={480}
          layout="fixed"
        />
      </div>
    </Slider>
  );
};

export default ProfileImage;
