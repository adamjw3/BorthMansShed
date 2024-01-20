import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface SplitProps {
  children: React.ReactNode;
  splitMode: String;
  delay: number;
}

const Split = ({ children, splitMode, delay = 0 }: SplitProps) => {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const init = () => {
      split();
    };

    const animate = (text) => {
      gsap.from(text, {
        delay: delay,
        y: "105%",
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.in",
        force3D: true,
        scrollTrigger: {
          trigger: trigger.current,
          scrub: false,
        },
      });
    };

    const splitChars = () => {
      const text = new SplitType(target.current!, { types: "chars" });
      addWrapper(text.chars);
      animate(text.chars);
    };

    const splitLines = () => {
      const text = new SplitType(target.current!, { types: "lines" });
      addWrapper(text.lines);
      animate(text.lines);
    };

    const splitWords = () => {
      const text = new SplitType(target.current!, { types: "words" });
      addWrapper(text.words);
      animate(text.words);
    };

    const addWrapper = (text) => {
      text!.map((item) => {
        const wrapEl = document.createElement("span");
        wrapEl.classList.add("inline-block", "relative", "overflow-hidden");
        item!.parentNode!.insertBefore(wrapEl, item.nextSibling);
        wrapEl.appendChild(item);
      });
    };

    const split = () => {
      if (splitMode === "chars") {
        splitChars();
      } else if (splitMode === "lines") {
        splitLines();
      } else if (splitMode === "words") {
        splitWords();
      }
    };

    init();
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <span ref={trigger} className="inline-block w-full">
      <span ref={target} className="inline-block overflow-hidden overflow-clip kerning-none  w-full">
        {children}
      </span>
    </span>
  );
};

export default Split;
