import Image from "next/image";
import React from "react";

function Globe() {
  return (
    <div className="flex justify-center items-center ">
      <div
        data-scroll
        data-scroll-speed="0.2"
        className="w-[70vw] md:h-[90vh] h-[40vh]  absolute top-0 md:my-16 mt-10 "
      >
        <Image
          src={"https://www.sogaiart.com/_next/static/media/globe.8f4fb289.svg"}
          fill
          className="object-contain"
          alt="Wakeup before AI wakes up"
        />
      </div>
    </div>
  );
}

export default Globe;
