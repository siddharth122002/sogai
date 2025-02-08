import React from "react";
import Globe from "./Globe";
import Marquee from "./Marquee";
import Bananas from "./Bananas";

function Page2() {
  return (
    <div className="bg-black w-full h-full">
      <div
        style={{
          clipPath: "polygon(5% 0, 95% 0, 100% 5%, 100% 100%, 0 100%, 0 5%)",
        }}
        className="bg-[#182A2A] min-h-[100dvh] relative "
      >
        {/* globe */}
        <Globe />
        {/* to come above globe */}
        <div className="relative  overflow-x-hidden">
          {/* marquee */}
          <Marquee />
          {/* grid */}
          <Bananas />
        </div>
      </div>
    </div>
  );
}

export default Page2;
