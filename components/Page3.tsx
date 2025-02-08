import React from "react";

function Page3() {
  return (
    <div className="bg-[#182A2A] text-[#FBF6C1] w-full font-sogai pb-16  px-8 overflow-x-hidden">
      <h1 className="md:text-8xl text-4xl pt-36 flex uppercase">
        Explore Past
        <br /> Case Studies
      </h1>

      <div className="mt-16 flex flex-col md:flex-row justify-between w-full ">
        <h3 className="md:w-1/2 font-tm uppercase text-2xl text-[#EEE2CE] md:ml-8">
          [case studies]
        </h3>
        <div className="md:w-1/2 text-[#C4B59C] font-sogai  md:pr-32">
          <p className="mb-8 md:text-6xl text-3xl text-[#FBF6C1]">
            Is generative AI friend or foe for artists?
          </p>
          <p>
            Generative AI has undergone substantial evolution over the years,
            transitioning from its initial capability to generate images of
            merely 32x32 pixels to producing high-resolution images that are
            often indistinguishable from reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
