"use client";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "angular",
  "react",
  "vue",

  "aws",
  "azure",
  "firebase",
  "postgresql",
  "mongodb",
  "redis",
  "zustand",
  "gitlab",
  "visualstudiocode",
  "aws",
  "azure",
  "googlecloud",
  "firebase",
  "postgresql",
  "mongodb",
  "redis",
  "graphql",
  "nextjs",
  "reactnative",
  "redux",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "vercel",
  "testinglibrary",
  "jest",
  "coolfy",
  "azure",
  "googlecloud",
  "firebase",
  "postgresql",
  "mongodb",
  "redis",

  "nextjs",
  "reactnative",
  "redux",
  "docker",
  "git",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
