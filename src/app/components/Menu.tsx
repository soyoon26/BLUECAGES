import React from "react";
import Image, { StaticImageData } from "next/image";
import bluecages from "../../../public/bluecages.png";
import greenpuzzle from "../../../public/greenpuzzle.png";
import heart from "../../../public/heart.png";
import firework from "../../../public/firework.png";
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
];

const Menu: React.FC = () => {
  return (
    <div className="mt-10 font-sinbi">
      <Image src={bluecages} alt="블루케이지" width={500} />
      <section className="flex  border-2 rounded-lg px-4 p-2  border-white items-center gap-10 border-r-red-400">
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
