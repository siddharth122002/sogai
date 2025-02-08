import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

function Page4() {
  useGSAP(
    () => {
      gsap.to("#parent", {
        scrollTrigger: {
          trigger: "#parent",
          start: "top 0%",
          end: "top -100%",
          pin: true,
          scrub: 1,
        },
      });
      gsap.to("#parent2", {
        scrollTrigger: {
          trigger: "#parent2",
          start: "top 0%",
          end: "top -100%",
          pin: true,
          scrub: 1,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      gsap.to("#scale-first", {
        scale: 1,
        scrollTrigger: {
          trigger: "#pin-this",
          start: "top 100%",
          end: "top 0%",
          scrub: 1,
        },
      });
      gsap.to("#scale-second", {
        scale: 1,
        scrollTrigger: {
          trigger: "#pin-this2",
          start: "top 100%",
          end: "top 0%",
          // markers: true,
          scrub: 1,
        },
      });
      gsap.to("#scale-three", {
        scale: 1,
        scrollTrigger: {
          trigger: "#pin-this3",
          start: "top 100%",
          end: "top 0%",
          // markers: true,
          scrub: 1,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  useGSAP(
    () => {
      gsap.to(".first-blur", {
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".first-blur",
        },
      });
      gsap.to(".second-blur", {
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".second-blur",
        },
      });
      gsap.to(".third-blur", {
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".third-blur",
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <div className="bg-[#182A2A] min-h-screen">
      {/* first image section */}
      <div className="w-full h-screen hidden md:flex justify-center items-center">
        {/* left */}
        <div className="md:w-1/2 pl-10 ">
          <h1 className="xl:text-7xl text-4xl font-sogai">
            “I won, and I didn’t break any rules”
          </h1>
          <p className="xl:text-3xl font-tm uppercase text-2xl my-4 text-[#D8CEBC]">
            [ Théâtre D’opéra Spatial — Jason Allen ]
          </p>
          <div className="md:flex justify-between items-center mr-8 grid">
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="xl:w-[18vw] xl:h-52 w-44 h-28 relative my-6 rounded-xl overflow-hidden first-blur blur-2xl"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75"
                }
                fill
                className="object-cover"
                alt="Wakeup before AI wakes up"
              />
            </div>
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="xl:w-[25vw] xl:h-52 w-64 h-28 relative my-6 rounded-xl overflow-hidden first-blur blur-2xl"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75"
                }
                fill
                className="object-cover"
                alt="Wakeup before AI wakes up"
              />
            </div>
          </div>
          <p className="text-[#BEB097] xl:text-xl font-sogai">
            Jason Allen won first prize in the Colorado State Fair’s annual art
            competition with an AI generated artwork. The work has sparked
            controversy across the internet — leaving people argue on the topic
            of authenticity, and plagarism.
          </p>
        </div>

        {/* right big image */}
        <div id="parent" className="w-1/2 h-screen overflow-hidden rounded-mxl">
          <div
            id="pin-this"
            className="w-full h-full relative overflow-hidden first-blur blur-2xl rounded-xl"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F3Q7cTAXrpG68QBhAflNuQa%2F8a1a90edea2391ba3219b26dd9074181%2Fimage_5.webp&w=1920&q=75"
              }
              fill
              id="scale-first"
              className="object-cover scale-150"
              alt="Wakeup before AI wakes up"
            />
          </div>
        </div>
      </div>
      {/* mobile first image */}
      <div className="mx-8 md:hidden border-b-4 border-[#183736] py-8">
        <h1 className="text-3xl  font-sogai">
          “I won, and I didn’t <br /> break any rules”
        </h1>
        <p className="font-tm uppercase text-xl my-4 text-[#D8CEBC]">
          [ Théâtre D’opéra Spatial — Jason Allen ]
        </p>
        <div
          style={{
            clipPath:
              "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
          }}
          className="w-full h-96 relative rounded-2xl overflow-hidden"
        >
          <Image
            src={
              "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F3Q7cTAXrpG68QBhAflNuQa%2F8a1a90edea2391ba3219b26dd9074181%2Fimage_5.webp&w=1920&q=75"
            }
            fill
            className="object-cover"
            alt="Wakeup before AI wakes up"
          />
        </div>
        {/* 2images */}
        <div className="flex justify-between mt-6">
          <div
            style={{
              clipPath:
                "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
            }}
            className="w-32 h-32 relative rounded-2xl overflow-hidden"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
          </div>
          <div
            style={{
              clipPath:
                "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
            }}
            className="w-48 h-32 relative rounded-2xl overflow-hidden"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
          </div>
        </div>
        <p className="text-[#BEB097] mt-8 font-sogai">
          Jason Allen won first prize in the Colorado State Fair’s annual art
          competition with an AI generated artwork. The work has sparked
          controversy across the internet — leaving people argue on the topic of
          authenticity, and plagarism.
        </p>
      </div>

      {/* second image section */}
      <div className="w-full h-screen hidden md:flex  justify-center items-center">
        {/* left */}
        <div className="w-1/2 pl-10  ">
          <h1 className="xl:text-7xl text-4xl font-sogai">
            The First A.I. Fashion Magazine
          </h1>
          <p className="xl:text-3xl font-tm uppercase text-2xl my-4 text-[#D8CEBC]">
            [ Copy magazine — Carl-Axel Wahlstrom ]
          </p>
          <div className="flex justify-between items-center mr-8">
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="xl:w-[18vw] xl:h-52 w-44 h-28 relative my-6 rounded-xl overflow-hidden blur-2xl second-blur"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F27jRdyECt9ly6G8XGN3Mle%2F4190fbfec9eda3b19789be2187dc8182%2Fdetailshot3.webp&w=1200&q=75"
                }
                fill
                className="object-cover"
                alt="Wakeup before AI wakes up"
              />
            </div>
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="xl:w-[25vw] xl:h-52 w-64 h-28 relative  my-6 rounded-xl overflow-hidden blur-2xl second-blur"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F6oPw8VapcEAOqMIYoaKl02%2Fd8c87c6cf561a61eeee01b097e5971fd%2Fdetailshot4.webp&w=1920&q=75"
                }
                fill
                className="object-cover"
                alt="Wakeup before AI wakes up"
              />
            </div>
          </div>
          <p className="xl:text-xl text-[#BEB097] font-sogai">
            The Copy Magazine features solely A.I. generated photorealistic
            images with fictional figures that have real names. The magazine
            explores the implications and biases of generative AI in the
            high-end fashion industry.
          </p>
        </div>

        {/* right big image */}
        <div
          id="parent2"
          className="w-1/2 overflow-hidden rounded-xl h-screen "
        >
          <div
            id="pin-this2"
            className="w-full h-full relative   blur-xl second-blur"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F606gKqdbqKTRu1RO2kGl9n%2F9ba0528c61ccf67d766a045a10c95478%2Fthumbnail2.webp&w=1920&q=75"
              }
              fill
              id="scale-second"
              className="object-cover scale-150"
              alt="Wakeup before AI wakes up"
            />
          </div>
        </div>
      </div>
      {/* mobile secod image */}
      <div className="mx-8 md:hidden border-b-4 border-[#183736] py-8">
        <h1 className="text-3xl  font-sogai">
          The First A.I. Fashion Magazine
        </h1>
        <p className="font-tm uppercase text-xl my-4 text-[#D8CEBC]">
          [ Copy magazine — Carl-Axel Wahlstrom ]
        </p>
        <div
          style={{
            clipPath:
              "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
          }}
          className="w-full h-96 relative rounded-2xl overflow-hidden"
        >
          <Image
            src={
              "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F606gKqdbqKTRu1RO2kGl9n%2F9ba0528c61ccf67d766a045a10c95478%2Fthumbnail2.webp&w=1920&q=75"
            }
            fill
            className="object-cover"
            alt="Wakeup before AI wakes up"
          />
        </div>
        {/* 2images */}
        <div className="flex justify-between mt-6">
          <div
            style={{
              clipPath:
                "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
            }}
            className="w-32 h-32 relative overflow-hidden rounded-2xl"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F27jRdyECt9ly6G8XGN3Mle%2F4190fbfec9eda3b19789be2187dc8182%2Fdetailshot3.webp&w=1200&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
          </div>
          <div
            style={{
              clipPath:
                "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
            }}
            className="w-48 h-32 overflow-hidden rounded-2xl relative"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F6oPw8VapcEAOqMIYoaKl02%2Fd8c87c6cf561a61eeee01b097e5971fd%2Fdetailshot4.webp&w=1920&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
          </div>
        </div>
        <p className="text-[#BEB097] mt-8 font-sogai">
          The Copy Magazine features solely A.I. generated photorealistic images
          with fictional figures that have real names. The magazine explores the
          implications and biases of generative AI in the high-end fashion
          industry.
        </p>
      </div>
      {/* third image section */}
      <div className="w-full h-screen hidden md:flex  justify-center items-center">
        {/* left */}
        <div className="w-1/2 pl-10  ">
          <h1 className="xl:text-7xl text-4xl font-sogai">
            World’s First A.I. Art Award
          </h1>
          <p className="xl:text-3xl font-tm uppercase text-2xl my-4 text-[#D8CEBC]">
            [ Twin Sisters in Love — Annika Nordenskiöld ]
          </p>
          <div className="flex justify-between items-center mr-8">
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="xl:w-[18vw] xl:h-52 w-44 h-28 relative my-6 overflow-hidden rounded-xl blur-2xl third-blur"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F5tAYFdBvlHrerHrWaUaiSj%2F148f07f36b9d609218b6c8fea7cec6d8%2Fdetailshot5.webp&w=1200&q=75"
                }
                fill
                className="object-cover"
                alt="Wakeup before AI wakes up"
              />
            </div>
            <div
              style={{
                clipPath:
                  "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
              }}
              className="xl:w-[25vw] xl:h-52 w-64 h-28 relative my-6 rounded-xl overflow-hidden blur-2xl third-blur"
            >
              <Image
                src={
                  "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F65T6EcjaVRGHt8j6b6AV4f%2F6d697208357f0792b7bd84eaead3106a%2Fdetailshot6.webp&w=1920&q=75"
                }
                fill
                className="object-cover"
                alt="Wakeup before AI wakes up"
              />
            </div>
          </div>
          <p className="xl:text-xl text-[#BEB097] font-sogai">
            Annika wins first prize at the world's first AI photography
            festival, sparking debates about the authenticity and ethics of
            AI-generated images — especially within photography.
          </p>
        </div>

        <div
          id="parent3"
          className="w-1/2 h-screen rounded-xl overflow-hidden "
        >
          <div
            id="pin-this3"
            className="w-full h-full relative   blur-2xl third-blur"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F78w0vgrWqDt0Q3i12SX3yS%2F729ccb27c1f3c3f2ea118be29404c7ff%2Fimage_4.webp&w=1920&q=75"
              }
              fill
              id="scale-three"
              className="object-cover scale-150"
              alt="Wakeup before AI wakes up"
            />
          </div>
        </div>
      </div>
      {/* mobile third image */}
      <div className="mx-8 md:hidden border-b-4 border-[#183736] py-8">
        <h1 className="text-3xl  font-sogai">World’s First A.I. Art Award</h1>
        <p className="font-tm uppercase text-xl my-4 text-[#D8CEBC]">
          [ Twin Sisters in Love — Annika Nordenskiöld ]
        </p>
        <div
          style={{
            clipPath:
              "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
          }}
          className="w-full overflow-hidden rounded-2xl h-96 relative"
        >
          <Image
            src={
              "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F78w0vgrWqDt0Q3i12SX3yS%2F729ccb27c1f3c3f2ea118be29404c7ff%2Fimage_4.webp&w=1920&q=75"
            }
            fill
            className="object-cover"
            alt="Wakeup before AI wakes up"
          />
        </div>
        {/* 2images */}
        <div className="flex justify-between mt-6">
          <div
            style={{
              clipPath:
                "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
            }}
            className="w-32 overflow-hidden rounded-2xl h-32 relative"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F5tAYFdBvlHrerHrWaUaiSj%2F148f07f36b9d609218b6c8fea7cec6d8%2Fdetailshot5.webp&w=1200&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
          </div>
          <div
            style={{
              clipPath:
                "polygon(0 1%, 77% 0, 100% 27%, 100% 100%, 11% 100%, 0 86%)",
            }}
            className="w-48 h-32 rounded-2xl overflow-hidden relative"
          >
            <Image
              src={
                "https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F65T6EcjaVRGHt8j6b6AV4f%2F6d697208357f0792b7bd84eaead3106a%2Fdetailshot6.webp&w=1920&q=75"
              }
              fill
              className="object-cover"
              alt="Wakeup before AI wakes up"
            />
          </div>
        </div>
        <p className="text-[#BEB097] mt-8 font-sogai">
          Annika wins first prize at the world's first AI photography festival,
          sparking debates about the authenticity and ethics of AI-generated
          images — especially within photography.
        </p>
      </div>
    </div>
  );
}

export default Page4;
