import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Marquee() {
  let xPercent = 0;
  let direction = -1;
  const marqRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(marqRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        scrub: 0.25,
        // markers: true,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);
  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(marqRef.current, {
      xPercent: xPercent,
    });
    xPercent += 0.2 * direction;
    requestAnimationFrame(animate);
  };
  return (
    <div
      ref={marqRef}
      className="md:mt-80 mt-28 uppercase font-sogai text-[8.99vw] whitespace-nowrap"
    >
      Current state of ai — Current state of ai — Current state of ai — Current
      state of ai —
    </div>
  );
}

export default Marquee;
