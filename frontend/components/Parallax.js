import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";

export function Parallax({ children, speed = 1, id = "parallax" }) {
  const trigger = useRef(null);
  const target = useRef(null);
  const timeline = useRef(null);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const y = windowWidth * speed * 0.1;
      const setY = gsap.quickSetter(target.current, "y", "px");

      timeline.current = gsap.timeline({
        scrollTrigger: {
          id: id,
          trigger: trigger.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => {
            setY(e.progress * y);
          },
        },
      });
    }

    return () => {
      timeline?.current?.kill();
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger}>
      <div ref={target}>{children}</div>
    </div>
  );
}
