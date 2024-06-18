"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import {
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  SkeletonFive,
} from "../Skeletons";

export default function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "",
    description: (
      <div className="">
        <span className="text-gray-700 dark:text-white font-semibold text-lg">
          Software with +3 year experience building, and maintaining web
          application
        </span>
      </div>
    ),
    // header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: (
      <span className="text-2xl bold w-1/2">Current stack</span>
    ),
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
];

import IconCloud from "@/components/magicui/icon-cloud";
import { AnimatedBeamMultipleOutputDemo } from "./Circle";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}





import { AnimatedIcons } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "NextJs",
    designation: "Front End",
    image :  './assets/icons/nextjs.svg',
    },
  {
    id: 2,
    name: "React",
    designation: "Front End",
    image : '/assets/icons/react.svg'

    },
   {
    id: 3,
    name: "React Native",
    designation: "Front End",
    image : '/assets/icons/react.svg'
  },
   {
    id: 4,
    name: "NodeJs",
    designation: "Back End",
    image  : '/assets/icons/node-js.svg'
     },
   {
    id: 5,
    name: "nestJs",
    designation: "Back End",
    image  : '/assets/icons/nestjs.svg'
     },

  
];

export function AnimatedStackPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedIcons items={people} />
    </div>
  );
}
