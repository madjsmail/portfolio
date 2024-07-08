/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';

export function Education() {
  return (
    <div>
      <div className="text-white  dark:from-white dark:to-slate-900/10 ">

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary ">Master&apos;s Degree in Computer Systems</h3>
          <p className="text-gray-500">UAMO Bouira University, 2020 – 2022</p>

        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary ">Bachelor&apos;s Degree in Computer Science</h3>
          <p className="text-gray-500">UAMO Bouira University, 2017 – 2020</p>

        </div>
      </div>

    </div>
  );
}
