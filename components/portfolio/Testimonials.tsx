"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import SectionHeader from "../custom/section-header";

export function Testimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <SectionHeader
        title="What They Said About Me"
        badge="testimonials"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [

  {
    quote: "Mr. Abdelmadjid Smail demonstrated a great level of expertise in web development during his tenure at CAMIO LLC. His leadership and initiative were commendable, and we wish him the very best.",
    name: "Mustapha Boussaid",
    title: "Managing Director, CAMIO LLC",
  },
  {
    quote: "I highly recommend Smail Abd El Madjid for any development role. He possesses strong technical skills, an excellent work ethic, and a deep understanding of programming languages. Smail is a highly motivated team player with great communication skills and a positive attitude.",
    name: "Reza Assadi",
    title: "Director of Software Development, Hotello",
  },
];