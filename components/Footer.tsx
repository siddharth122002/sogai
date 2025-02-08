import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.1"
      className="h-screen relative bg-[#182A2A] p-6 md:p-12 lg:p-16"
    >
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="text-3xl md:text-5xl text-[#265956] font-tm text-center md:text-left">
          This is a cloned project of
          <br /> sogai generative AI Art, cloned by Siddharth Kumar
          <br /> © 2025 — All rights reserved.
        </div>
        <div className="text-[#265956] text-center md:text-left">
          <p className="uppercase font-sogai text-[#FBF6C1]">
            [ * Navigation ]
          </p>
          <div className="text-lg md:text-xl font-bold mt-4 space-y-2">
            <p>Introduction</p>
            <p>Case Studies</p>
            <p>Experiments</p>
          </div>
        </div>
        <div className="text-[#265956] text-center md:text-left">
          <p className="uppercase font-sogai text-[#FBF6C1]">[ * Exhibit ]</p>
          <div className="text-lg md:text-xl font-bold mt-4 space-y-2">
            <p>Exhibit 001</p>
            <p>Exhibit 002</p>
            <p>Exhibit 003</p>
          </div>
        </div>
      </div>
      <div className="h-1/3 md:h-1/2  w-full absolute bottom-0 left-0 flex justify-center">
        <Image
          src={
            "https://www.sogaiart.com/_next/static/media/footer.879146e1.svg"
          }
          className="p-6 md:p-16"
          fill
          alt="sogai"
        />
      </div>
    </div>
  );
}

export default Footer;
