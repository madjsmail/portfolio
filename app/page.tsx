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

export default function Home() {
  return (
    <div className="">
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
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
