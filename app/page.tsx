"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import HomeComponent from "@/components/portfolio/Home";

import RecentProjects from "@/components/portfolio/Projects";
import Experiences from "@/components/portfolio/Experiance";
import ServicesComponent from "@/components/portfolio/Services";
import { Testimonial } from "@/components/portfolio/Testimonials";
import AboutComponent from "@/components/portfolio/About";
import Footer from "@/components/ui/footer";
import { SpotlightPreview } from "@/components/portfolio/Hero";
import { ModeToggle } from "@/components/custom/theme-toggle";

export default function Home() {
  return (
    <div className="">
      <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden ">
        <div className=" w-full">
          <SpotlightPreview />
          <Experiences />
          <RecentProjects />
          <ServicesComponent />
          <Testimonial />
          <AboutComponent />
        </div>

        <Footer />
      </main>
    </div>
  );
}
