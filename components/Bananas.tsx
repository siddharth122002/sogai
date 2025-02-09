import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

function Bananas() {
  useGSAP(
    () => {
      gsap.to(".bananas", {
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bananas",
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <div className="mt-16 md:flex justify-between  w-full ">
      <h3 className="md:w-1/2 w-full  font-tm uppercase text-2xl text-[#EEE2CE] ml-8">
        [A short introduction]
      </h3>
      <div className="md:w-1/2 text-[#C4B59C] font-sogai  md:pr-32 p-3 ml-5 mr-5 md:mr-0">
        <p className="mb-8">
          Generative AI has undergone substantial evolution over the years,
          transitioning from its initial capability to generate images of merely
          32x32 pixels to producing high-resolution images that are often
          indistinguishable from reality.
        </p>
        <p>
          This advancement has democratized access to powerful visual creation
          tools for everyone from professional designers to hobbyists. However,
          this accessibility has also sparked controversies around the ethical
          implications of AI-generated content, including copyright
          infringement, misinformation, and concerns over artistic authenticity.
        </p>

        <p className="mt-16 md:text-3xl text-[#FBF6C1] uppercase font-tm">
          // PROMPT: A bowl of bananas
          <br /> centered on a table
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-5  items-center  mt-3 md:mt-0">
          {/* imagess */}
          <div>
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="md:w-56 md:h-56 w-80 h-80 relative rounded-2xl bananas blur-2xl overflow-hidden"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=%2Fmedias%2Fimages%2Fbowlofpixel.webp&w=828&q=75"
                }
                fill
                className="object-contain"
                alt="Wakeup before AI wakes up"
              />
            </div>
            <p className="font-tm uppercase text-2xl text-[#EEE2CE]">
              2016—generated using aligndraw
            </p>
          </div>
          <div>
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="md:w-56 md:h-56 w-80 h-80 relative rounded-2xl bananas blur-2xl overflow-hidden"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=%2Fmedias%2Fimages%2Fbowlofbanana.webp&w=828&q=75"
                }
                fill
                className="object-contain"
                alt="Wakeup before AI wakes up"
              />
            </div>
            <p className="font-tm uppercase text-2xl text-[#EEE2CE]">
              2024— generated using dall-e 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bananas;
