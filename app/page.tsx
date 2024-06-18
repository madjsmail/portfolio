"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import HomeComponent from "@/components/portfolio/Home";

import RecentProjects from "@/components/portfolio/Projects";
import Experiences from "@/components/portfolio/Experiance";
import ServicesComponent from "@/components/portfolio/Services";
import { Testimonial } from "@/components/portfolio/Testimonials";
import BentoGridThirdDemo from "@/components/portfolio/About";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HomeComponent />
        <Experiences />
        <RecentProjects />
        <ServicesComponent />
        <Testimonial />
        <BentoGridThirdDemo />
      </div>
    </main>
  );
}
