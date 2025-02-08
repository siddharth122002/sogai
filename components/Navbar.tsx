import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [time, setTime] = useState("");
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const refAnimate = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    if (playing) {
      musicRef.current?.pause();
    } else {
      musicRef.current?.play();
    }
    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      if (refAnimate.current) {
        if (playing) {
          gsap.to(refAnimate.current, {
            y: 0,
            // duration: 0.5,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(refAnimate.current, {
            y: -28,
            // duration: 0.5,
            ease: "power2.inOut",
          });
        }
      }
    },
    { dependencies: [playing] }
  );
  useGSAP(
    () => {
      if (refAnimate.current) {
        if (playing) {
          const tl = gsap.timeline({
            repeat: -1,
          });
          tl.to(".long", {
            height: 23,
            duration: 0.5,
            ease: "power2.inOut",
          });
          tl.to(".long", {
            height: 5,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      }
    },
    { dependencies: [playing], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      if (refAnimate.current) {
        if (playing) {
          const tl = gsap.timeline({
            repeat: -1,
          });
          tl.to(".short", {
            height: 15,
            duration: 0.5,
            ease: "power1.inOut",
          });
          tl.to(".short", {
            height: 5,
            duration: 1,
            ease: "power1.inOut",
          });
        }
      }
    },
    { dependencies: [playing], revertOnUpdate: true }
  );

  return (
    <div className="fixed text-[#FBF6C1] w-full mix-blend-difference top-0 left-0 font-sogai z-50">
      <nav className="mx-8 mt-8 flex justify-between items-center">
        <div className="flex text-[#FBF6C1] md:text-5xl text-3xl ">
          SOGAI
          <p className="md:text-3xl text-lg font-tm relative -top-1">TM</p>
        </div>
        <div className="-translate-x-[50%] text-lg uppercase text-[#FBF6C1] hidden lg:block">
          {time} ind
        </div>

        <div className=" justify-center items-center gap-3  lg:flex relative overflow-hidden ">
          <div className="bg-[#17584d] px-6 rounded-full py-2 flex   gap-4">
            <div className="flex justify-center items-center gap-1">
              <div className="w-[3px] short h-3 bg-[#208070]"></div>
              <div className="w-[3px] long h-3 bg-[#208070]"></div>
              <div className="w-[3px] h-3 bg-[#208070]"></div>
              <div className="w-[3px] long h-3 bg-[#208070]"></div>
              <div className="w-[3px] short h-3 bg-[#208070]"></div>
            </div>

            <div className="cursor-pointer relative h-6 ">
              <div
                ref={refAnimate}
                className="flex justify-center items-center flex-col gap-1"
              >
                <p onClick={handlePlay}>on</p>
                <p onClick={handlePlay}>off</p>
              </div>
            </div>
            <audio ref={musicRef} src="/music.mp3" loop />
          </div>
          <div className="w-8 h-8 hidden md:flex rounded-full bg-[#FBF6C1]  flex-col gap-1 justify-center items-center">
            <span className="w-1 h-1 rounded-full bg-[#17584d]"></span>
            <span className="w-1 h-1 rounded-full bg-[#17584d]"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
