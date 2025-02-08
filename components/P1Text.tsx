import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

function Page1Text() {
  useGSAP(
    () => {
      gsap.to(".dot", {
        opacity: 0,
        repeat: -1,
        duration: 0.9,
        ease: "power1.inOut",
        repeatDelay: 0.7,
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <div className="text-[#FBF6C1] w-full font-sogai  z-10 absolute items-end md:mb-8 bottom-0 left-0 flex justify-between px-8   mb-16">
      <div>
        <p className="text-2xl mb-4 md:mb-0 md:text-4xl uppercase font-tm">
          A Short exploration on
        </p>
        <h1 className="md:text-8xl text-4xl uppercase">
          <p> Generative ai in</p>
          <p className="flex items-center">
            the fine arts{" "}
            <span className="w-3 h-8 md:w-8 md:h-20 ml-2 bg-[#FBF6C1] dot"></span>
          </p>
        </h1>
      </div>

      <div className="w-24 h-24 relative hidden md:black">
        <Image
          src={"https://www.sogaiart.com/_next/static/media/ring.451bad66.svg"}
          fill
          className="object-contain"
          alt="Wakeup before AI wakes up"
        />
      </div>
    </div>
  );
}

export default Page1Text;
