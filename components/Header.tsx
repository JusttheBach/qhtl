"use client"

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HoverImageProps {
  href: string;
  srcBase: string;
  srcHover: string;
  alt: string;
  text: string;
}

const HoverImage: FC<HoverImageProps> = ({ href, srcBase, srcHover, alt, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center mx-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={href}>
        <Image
          src={hovered ? srcHover : srcBase}
          width={150}
          height={150}
          alt={alt}
        />
      </Link>
      <h4 className="uppercase mt-2 font-bold text-xl text-white">{text}</h4> {/* Text turned white */}
    </div>
  );
};

const Header = () => {
  const imageStyle = {
    zIndex: -1, // Image has a lower z-index
    objectFit: 'cover',
    objectPosition: 'top',
  } as const; // Explicitly making the entire object a const literal

  return (
    <section className="relative w-full lg:h-[640px] sm:h-max flex flex-col items-start">
      {/* Hero Image */}
      <div className="absolute w-screen h-[640px] overflow-hidden">
        <Image
          src={`/Hero.jpg`}
          fill={true}
          alt="anh thien nhien"
          style={imageStyle}
          priority={true}
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>

      {/* Transparent Header */}
      <div className="absolute top-0 left-0 w-full flex items-start p-4">
        {/* Left Side: 2 logos */}
        <div className="flex flex-row space-x-2">
          <Link href="https://baovect.thuyloivietnam.gov.vn">
            <Image src="/logoBo.png" width={60} height={50} alt="Logo 1" />
          </Link>
          <Link href="https://www1.cucthuyloi.gov.vn/">
            <Image src="/logoCuc.png" width={95} height={50} alt="Logo 2" />
          </Link>
        </div>

        {/* Right Side: 3 lines of text */}
        <div className="flex flex-col text-left items-start ml-4">
          <span className="uppercase text-white">CỤC THỦY LỢI</span> {/* Text turned white */}
          <span className="uppercase text-white">
            HỆ THỐNG THÔNG TIN BẢO VỆ CÔNG TRÌNH VÀ CHẤT LƯỢNG NƯỚC
          </span>
          <span className="uppercase text-white">
            VIETNAM PROTECTION OF STRUCTURES AND WATER QUALITY INFORMATION SYSTEM
          </span>
        </div>
      </div>

      {/* Divs above the hero image */}
      <div className="relative mt-64 flex flex-row justify-around items-center w-full">
        {/* Div 1 */}
        <HoverImage
          href="http://baovect.thuyloivietnam.gov.vn"
          srcBase="/baoveB.png"
          srcHover="/baoveC.png"
          alt="Image 1"
          text="BẢO VỆ CÔNG TRÌNH THỦY LỢI"
        />

        {/* Div 2 */}
        <HoverImage
          href="https://chatluongnuoc.cucthuyloi.gov.vn"
          srcBase="/chatluongB.png"
          srcHover="/chatluongC.png"
          alt="Image 2"
          text="CHẤT LƯỢNG NƯỚC"
        />

        {/* Div 3 */}
        <HoverImage
          href="/path3"
          srcBase="/phapcheB.png"
          srcHover="/phapcheC.png"
          alt="Image 3"
          text="PHÁP CHẾ"
        />
      </div>
    </section>
  );
};

export default Header;
