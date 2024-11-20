import React from "react";
import Image, { StaticImageData } from "next/image";
import bluecages from "../../../public/bluecages.png";
import greenpuzzle from "../../../public/greenpuzzle.png";
import heart from "../../../public/heart.png";
import firework from "../../../public/firework.png";
// import cherry from "../../../public/cherry.png";
import luck from "../../../public/luck.png";
import fish from "../../../public/fish.png";
import mars from "../../../public/mars.png";

type MenuItem = {
  src: StaticImageData;
  alt: string;
  text: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { src: greenpuzzle, alt: "초록퍼즐", text: "프로필", href: "/profile" },
  { src: mars, alt: "마스", text: "필모그래피", href: "/filmography" },
  { src: heart, alt: "하트", text: "좋아하는", href: "/favourites" },
  { src: firework, alt: "불꽃놀이", text: "기타..", href: "/others" },
  { src: fish, alt: "금붕어", text: "기타..", href: "/others" },
  { src: luck, alt: "네잎클로버", text: "해시태그", href: "/others" },
];

const Menu: React.FC = () => {
  return (
    <div className="mt-10 w-screen font-sinbi flex items-center flex-col ">
      <Image src={bluecages} alt="블루케이지" width={500} />
      <section className="flex mt-10  w-5/6 border-2 rounded-lg px-4   border-white items-center justify-around border-r-red-400">
        {menuItems.map((item, index) => (
          <article key={index}>
            <a
              href={item.href}
              className="flex items-center gap-2 text-white hover:underline"
            >
              <Image src={item.src} alt={item.alt} width={50} />
              <p className="text-white text-[40px]">{item.text}</p>
            </a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Menu;
