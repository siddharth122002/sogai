"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export default function Page6() {
  useGSAP(
    () => {
      gsap.to("#earring", {
        scrollTrigger: {
          trigger: "#earring",
          start: "top 0%",
          end: "top -100%",
          pin: true,
          pinSpacing: false,
        },
      });
      gsap.to("#mid", {
        scrollTrigger: {
          trigger: "#mid",
          start: "top 30%",
          // markers: true,
          end: "top -165%",
          pin: true,
          pinSpacing: false,
        },
      });
      gsap.to("#wave", {
        scrollTrigger: {
          trigger: "#wave",
          start: "top 0%",
          end: "top -100%",
          pin: true,
          pinSpacing: false,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      gsap.to("#mid-earring", {
        y: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: "#mid-earring",
          // markers: true,
          start: "top 10%",
          end: "top -40%",
          scrub: 0,
        },
      });
      gsap.to("#mid-boat", {
        y: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: "#mid-boat",
          // markers: true,
          start: "top -40%",
          end: "top -90%",
          scrub: 0,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      gsap.to(".exhibit-text", {
        scrollTrigger: {
          trigger: ".exhibit-text",
          // markers: true,
          start: "top 2%",
          end: "top -40%",
          scrub: true,
          onEnter: () => {
            const textElement = document.querySelector(".exhibit-text");
            if (textElement) textElement.textContent = "Exhibit 002";
          },
          onLeaveBack: () => {
            const textElement = document.querySelector(".exhibit-text");
            if (textElement) textElement.textContent = "Exhibit 001";
          },
        },
      });
      //3
      gsap.to(".exhibit-text", {
        scrollTrigger: {
          trigger: ".exhibit-text",
          // markers: true,
          start: "top -98%",
          end: "top -140%",
          scrub: true,
          onEnter: () => {
            const textElement = document.querySelector(".exhibit-text");
            if (textElement) textElement.textContent = "Exhibit 003";
          },
          onLeaveBack: () => {
            const textElement = document.querySelector(".exhibit-text");
            if (textElement) textElement.textContent = "Exhibit 002";
          },
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      gsap.to(".desc", {
        scrollTrigger: {
          trigger: ".desc",
          // markers: true,
          start: "top 2%",
          end: "top -40%",
          scrub: true,
          onEnter: () => {
            const textElement = document.querySelector(".desc");
            if (textElement)
              textElement.textContent = "The Great Wave off Kanagawa";
          },
          onLeaveBack: () => {
            const textElement = document.querySelector(".desc");
            if (textElement)
              textElement.textContent = "A Girl with a Pearl Earring";
          },
        },
      });
      //3
      gsap.to(".desc", {
        scrollTrigger: {
          trigger: ".desc",
          // markers: true,
          start: "top -98%",
          end: "top -140%",
          scrub: true,
          onEnter: () => {
            const textElement = document.querySelector(".desc");
            if (textElement) textElement.textContent = "Impression, Sunrise";
          },
          onLeaveBack: () => {
            const textElement = document.querySelector(".desc");
            if (textElement)
              textElement.textContent = "The Great Wave off Kanagawa";
          },
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <div>
      <div className="bg-[#182A2A] text-[#FBF6C1] w-full relative ">
        <div className="bg-zinc-700 relative">
          {/* mid */}
          <div
            id="mid"
            className="absolute overflow-hidden w-full px-10 top-[10%] h-[50vh]  grid grid-cols-4 z-30 "
          >
            {/* text left */}
            <h3 className="exhibit-text col-span-1 relative top-[40%] font-sogai md:text-5xl text-xl">
              Exhibit 001
            </h3>
            {/* three images stacking */}
            <div className="relative overflow-hidden rounded-xl col-span-2 ">
              {/* boat image */}
              <div
                id="mid-boat"
                className="absolute z-20 top-[100%] w-full h-full "
              >
                <Image
                  src={
                    "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2Fao20bNcDoRqQ3PxoNU8y9%2F73eada9ffca7c7f7cf2c92b9a507e87a%2FOG.webp&w=1200&q=75"
                  }
                  fill
                  className="object-cover"
                  alt="Wakeup before AI wakes up"
                />
              </div>
              {/* wave image */}
              <div
                id="mid-wave"
                className="absolute top-0 w-full bg-blue-800 h-full"
              >
                <Image
                  src={
                    "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1xGl3VLcMxZdC7KHgKBXQT%2Fc15f1afdcc14d0498c24fb14e9ca44be%2FMain.webp&w=1920&q=75"
                  }
                  fill
                  className="object-cover"
                  alt="Wakeup before AI wakes up"
                />
              </div>
              {/* earring image */}
              <div id="mid-earring" className="absolute top-0 w-full h-full ">
                <Image
                  src={
                    "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F68S6JkklEfqms8P9GUaeXv%2F1d2490a5f57d634e015c7b54823e3b52%2FOG.jpeg&w=1200&q=75"
                  }
                  fill
                  className="object-cover"
                  alt="Wakeup before AI wakes up"
                />
              </div>
            </div>
            {/* text right */}
            <div className="col-span-1 relative top-[40%] font-sogai md:text-5xl text-xl  ml-2 ">
              <h3 className="desc">A Girl with a Pearl Earring</h3>
              <p className="md:text-lg text-xs text-[#AB9E86]">
                [Johannes Vermeer]
              </p>
            </div>
          </div>

          {/* Earring 1*/}
          <div id="earring" className="w-full h-screen relative ">
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F68S6JkklEfqms8P9GUaeXv%2F1d2490a5f57d634e015c7b54823e3b52%2FOG.jpeg&w=1200&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
          {/* wave 2*/}
          <div id="wave" className="w-full h-screen relative ">
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1xGl3VLcMxZdC7KHgKBXQT%2Fc15f1afdcc14d0498c24fb14e9ca44be%2FMain.webp&w=1920&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
          {/* boat 3*/}
          <div className="w-full h-screen relative">
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2Fao20bNcDoRqQ3PxoNU8y9%2F73eada9ffca7c7f7cf2c92b9a507e87a%2FOG.webp&w=1200&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
