"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import profilecut from "../../../../public/profilecut.webp";
import profilecut2 from "../../../../public/profilecut2.webp";
// import profilecut3 from "../../../../public/profilecut3.webp";
import profilecut4 from "../../../../public/profilecut4.webp";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProfileImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    { src: profilecut, alt: "Profile" },
    { src: profilecut2, alt: "Profile2" },
    // { src: profilecut3, alt: "Profile3" },
    { src: profilecut4, alt: "Profile4" },
  ];

  return (
    <Slider {...settings} className="w-[480px]">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={480}
            height={480}
            layout="fixed"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProfileImage;
