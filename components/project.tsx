"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  time,
  description,
  tags,
  imageUrl,
  sideNotes,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative"
    >
      <a href={projectUrl} target="_blank">
        <section className="bg-gray-100 max-w-[42rem] border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="-ml-2 pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="-mt-3 text-2xl font-semibold">{title}</h3>
            <p className="italic text-sm text-gray-700 dark:text-white/70 mt-1">
              {time}
            </p>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto justify-start group-even:justify-end">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.65rem] tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40 "
          />
        </section>
      </a>
      <div className="w-1/2 absolute flex items-center justify-center px-4 py-2 text-sm top-[6px] right-[5px] p-2 bg-black/[0.84] text-white/80 dark:bg-gray-950/[0.97] dark:text-white/70 rounded-xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10 group-even:left-[0.3rem]">
        {sideNotes}
      </div>
    </motion.div>
  );
}
