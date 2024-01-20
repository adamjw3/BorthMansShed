"use client";
import React, { ReactNode } from "react";
import { ReactLenis, ReactLenisOptions } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  const options: ReactLenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
