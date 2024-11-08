import React from "react";
import profilecut from "../../../public/profilecut.webp";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <Image src={profilecut} alt="Profile" width={200} height={200} />
    </div>
  );
};

export default page;
