import Image from "next/image";
import React from "react";
import Page1Text from "./P1Text";

function Page1() {
  return (
    <div className="w-full h-screen ">
      <Page1Text />
      <Image
        src={
          "https://www.sogaiart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.6469204a.webp&w=1920&q=75"
        }
        fill
        className="object-cover"
        alt="Wakeup before AI wakes up"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
    </div>
  );
}

export default Page1;
