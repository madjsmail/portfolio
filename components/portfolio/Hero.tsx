import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";
import ShimmerButton from "../magicui/shimmer-button";
import { AnimatedGradientTextBadge } from "../custom/animated-gradient";


export function SpotlightPreview() {
  return (
    <div className="bg-background ">
      <div className="h-[50rem] w-full rounded-md flex flex-col md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"

        />

        <AnimatedGradientTextBadge>
          Welcome
        </AnimatedGradientTextBadge>

        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600  dark:from-neutral-50    dark:to-neutral-400 bg-opacity-50">
            Hello <br /> My name is Abdelmadjid
          </h1>
          <h1 className="text-2xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600  dark:from-neutral-50    dark:to-neutral-400 bg-opacity-50">
            I am Software engineer and Full stack web developer.
          </h1>
          <p className="mt-4 font-normal text-base text-secondary-foreground max-w-lg text-center mx-auto">
            I collaborate with everyone to craft and code stunning and functional
            websites using javascript.
          </p>
        </div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Resume
        </button>
      </div>
    </div>
  );
}


