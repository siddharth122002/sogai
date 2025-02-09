"use client";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page5 from "@/components/Page5";
import Footer from "@/components/Footer";
import Page4 from "@/components/Page4";
import Page6 from "@/components/Page6";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useGSAP(
    () => {
      gsap.to("#bar", {
        width: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: ".parent",
          start: "top 0%",
          end: "bottom 0%",
          scrub: 1,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <>
      <div className="parent text-[#FBF6C1]">
        <div
          id="bar"
          className="w-0 h-[5px] bg-[#FBF5C0] fixed top-0 left-0 z-50 mix-blend-difference"
        ></div>
        {/* <Page1 /> */}
        <Navbar />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Footer />
      </div>
    </>
  );
}
