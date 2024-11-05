"use client"

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HoverImageProps {
  href: string;
  srcBase: string;
  srcHover: string;
  alt: string;
  text1: string;
  text2: string;
}

const HoverImage: FC<HoverImageProps> = ({ href, srcBase, srcHover, alt, text1, text2 }) => {
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
          width={250}
          height={250}
          alt={alt}
        />
      </Link>
      <h4 className="uppercase mt-5 font-bold text-xl text-yellow-300">{text1}</h4> {/* Text turned white */}
      <h4 className="uppercase mt-2 font-bold text-xl text-white">{text2}</h4> {/* Text turned white */}
    </div>
  );
};

const Header = () => {
  const imageStyle = {
    zIndex: -1, // Image has a lower z-index
    objectFit: 'cover',
    objectPosition: 'middle',
  } as const; // Explicitly making the entire object a const literal

  return (
    <section className="relative w-full lg:h-[750px] sm:h-max flex flex-col items-start">
      {/* Hero Image */}
      <div className="absolute mt-20 w-screen h-[750px] overflow-hidden">
        <Image
          src={`/DJI_0023.JPG`}
          fill={true}
          alt="anh thien nhien"
          style={imageStyle}
          priority={true}
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>

      {/* Transparent Header */}
      <div className="absolute top-0 left-0 w-full flex items-start p-4 bg-white">
        {/* Left Side: 2 logos */}
        <div className="flex flex-row space-x-0">
          <Link href="https://mard.gov.vn/">
            <Image src="/logoBo.png" width={60} height={50} alt="Logo 1" />
          </Link>
          <Link href="https://www1.cucthuyloi.gov.vn/">
            <Image src="/LogoCuc.png" width={100} height={50} alt="Logo 2" />
          </Link>
        </div>

        {/* Right Side: 3 lines of text */}
        <div className="flex flex-col text-left items-start ml-4">
          <span className="uppercase font-bold text-red-500 text-2xl">CỤC THỦY LỢI</span> {/* Text turned white */}
          <span className="uppercase font-bold text-blue-700 text-lg">
            TRANG THÔNG TIN BẢO VỆ CÔNG TRÌNH VÀ CHẤT LƯỢNG NƯỚC
          </span>
          <span className="uppercase text-orange-400 text-sm">
            VIETNAM PROTECTION OF STRUCTURES AND WATER QUALITY INFORMATION SYSTEM
          </span>
        </div>
      </div>

      {/* Divs above the hero image */}
      <div className="relative mt-80 flex flex-row justify-around items-center w-full">
        {/* Div 1 */}
        <HoverImage
          href="/path"
          srcBase="/icon_bcct_d2.png"
          srcHover="/icon_bcct_c2.png"
          alt="Image 1"
          text1="BẢO VỆ CÔNG TRÌNH THỦY LỢI"
          text2='PROTECTION OF IRRIGATION WORKS'
        />

        {/* Div 2 */}
        <HoverImage
          href="https://chatluongnuoc.cucthuyloi.gov.vn"
          srcBase="/icon_cln_d1.png"
          srcHover="/icon_cln_c1.png"
          alt="Image 2"
          text1="CHẤT LƯỢNG NƯỚC"
          text2='WATER QUALITIES'

        />

        {/* Div 3 */}
        <HoverImage
          href="/path3"
          srcBase="/icon_pc_d1.png"
          srcHover="/icon_pc_c1.png"
          alt="Image 3"
          text1="PHÁP CHẾ & THANH TRA"
          text2='INSPECTION & LEGALS AFFAIRS'

        />
      </div>
    </section>
  );
};

export default Header;
