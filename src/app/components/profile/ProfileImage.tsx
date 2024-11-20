"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../assets/images";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProfileImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const profileImages = [
    { src: images.profilecut, alt: "Profile" },
    { src: images.profilecut2, alt: "Profile2" },
    { src: images.profilecut4, alt: "Profile4" },
  ];

  return (
    <Slider {...settings} className="w-[480px]">
      {profileImages.map((image, index) => (
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
