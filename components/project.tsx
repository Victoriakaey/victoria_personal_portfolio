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
      className="group mb-3 sm:mb-8 last:mb-0 relative max-w-[42rem]"
    >
      {projectUrl ? (
        <a href={projectUrl} target="_blank">
          <section
            className={`bg-gray-100 max-w-[42rem] border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 sm:h-[20rem] ${
              imageUrl ? "sm:pr-8 sm:group-even:pl-8" : "px-6 -py-1"
            }`}
          >
            <div
              className={`pt-4 pb-7 px-5 sm:pt-10 ${
                imageUrl
                  ? "sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:group-even:ml-[18rem]"
                  : ""
              } flex flex-col h-full`}
            >
              <h3 className="-mt-3 text-2xl font-semibold">{title}</h3>
              <p className="italic text-sm text-gray-700 dark:text-white/70 mt-1">
                {time}
              </p>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
              <ul
                className={`flex flex-wrap mt-4 gap-2 sm:mt-auto justify-start ${
                  imageUrl ? "group-even:justify-end" : ""
                }`}
              >
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
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
              />
            )}
          </section>
        </a>
      ) : (
        <section
          className={`bg-gray-100 max-w-[42rem] border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 sm:h-[20rem] ${
            imageUrl ? "sm:pr-8 sm:group-even:pl-8" : "px-6 -py-1"
          }`}
        >
          <div
            className={`pt-4 pb-7 px-5 sm:pt-10 ${
              imageUrl
                ? "sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:group-even:ml-[18rem]"
                : ""
            } flex flex-col h-full`}
          >
            <h3 className="-mt-3 text-2xl font-semibold">{title}</h3>
            <p className="italic text-sm text-gray-700 dark:text-white/70 mt-1">
              {time}
            </p>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul
              className={`flex flex-wrap mt-4 gap-2 sm:mt-auto justify-start ${
                imageUrl ? "group-even:justify-end" : ""
              }`}
            >
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
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
            />
          )}
        </section>
      )}
      <div
        className={`absolute flex items-center justify-center text-sm bg-gray-100 text-gray-950 dark:bg-gray-950/[0.97] dark:text-white/70 rounded-xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10 ${
          imageUrl
            ? "top-[6px] right-[5px] group-even:left-[0.3rem] w-1/2 px-4 py-2"
            : "top-4 right-3 max-h-[4.5rem] max-w-[29.7rem] px-4 py-2"
        }`}
      >
        {sideNotes}
      </div>
    </motion.div>
  );
}
