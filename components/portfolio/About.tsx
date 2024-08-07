/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { IconClipboardCopy } from "@tabler/icons-react";

import { IconCloudDemo } from "./stack";
import { AnimatedAIStackBeam } from "./AnimatedAIStackPreview";
import { AnimatedStackPreview, Circle } from "./AnimatedStackPreview";
import { Background } from "./Background";
import { Education } from "./Education";
import { Icons } from "../icons/icons";
import ShinyButton from "../magicui/shiny-button";
import ShimmerButton from "../magicui/shimmer-button";
import SectionHeader from "../custom/section-header";
import { useTheme } from "next-themes";

export default function AboutComponent() {
  return (
    <div className="">
      <SectionHeader title="" badge="About Me" />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]  ", item.className)}
          // icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "",
    description: (
      <div className="flex flex-col h-full justify-between">
        <div className="text-2xl bold text-lg">
          Software Engineer with +3 years of experience building and maintaining
          web applications
        </div>
      </div>
    ),
    // header: <SkeletonOne />,
    className: "md:col-span-1 h-full   ",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: <span className="text-2xl bold w-1/2">AI Stack</span>,
    description: "",
    header: <AnimatedAIStackBeam />,
    className:
      "md:col-span-1 flex flex-col-reverse  justify-center item-center ",
  },
  {
    title: <span className="text-2xl bold w-1/2">Current Stack</span>,
    description: "",
    header: <AnimatedStackPreview />,
    className:
      "md:col-span-1 flex flex-col-reverse  justify-center item-center",
  },
  {
    title: (
      <span className="text-2xl bold">Technologies I am Familiar with</span>
    ),
    description: "",
    header: <IconCloudDemo />,
    className:
      "md:col-span-2 flex justify-center item-center  flex-row-reverse ",
  },
  {
    title: <span className="text-2xl bold">Background</span>,
    description: "",
    header: <Background />,
    className:
      "md:col-span-1 md:row-span-2 flex flex-col-reverse justify-center item-center   ",
  },
  {
    title: <span className="text-2xl bold">Education</span>,
    description: "",
    header: <Education />,
    className:
      "md:col-span-2 md:row-span-1 flex flex-col-reverse justify-center item-center   ",
  },
];
