import React from "react";
import Globe from "./Globe";
import Marquee from "./Marquee";
import Bananas from "./Bananas";

function Page2() {
  return (
    <div className="bg-black">
      <div
        style={{
          clipPath: "polygon(5% 0, 95% 0, 100% 5%, 100% 100%, 0 100%, 0 5%)",
        }}
        className="relative bg-[#182A2A]"
      >
        <Globe />
        <div className="relative overflow-x-hidden">
          {/* <Marquee /> */}
          <Bananas />
        </div>
      </div>
    </div>
  );
}

export default Page2;
