"use client";

import React, { useEffect, useRef, useState } from "react";
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered && imageUrl.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
      }, 1800); // Change image every second
      return () => clearInterval(interval);
    }
  }, [isHovered, imageUrl.length]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative max-w-[42rem]"
      onMouseEnter={() => setIsHovered(true)} // Start looping on hover
      onMouseLeave={() => setIsHovered(false)} // Stop looping on hover leave
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
              <h3 className="mt-2 lg:mt-0 lg:group-even:ml-2 text-2xl font-semibold">
                {title}
              </h3>
              <p className="italic lg:group-even:ml-2 text-sm text-gray-700 dark:text-white/70 mt-1">
                {time}
              </p>
              <p className="lg:-mr-8 lg:group-even:ml-2 mt-4 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
              <ul
                className={`-mr-5 flex flex-wrap mt-4 gap-2 sm:mt-auto justify-start ${
                  imageUrl ? "lg:group-even:justify-end" : ""
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
            {imageUrl &&
              imageUrl.map((url, index) => (
                <Image
                  key={index}
                  src={imageUrl[currentImageIndex]}
                  // alt="Project I worked on"
                  alt={`Project image ${currentImageIndex + 1}`}
                  quality={95}
                  className="absolute hidden sm:block top-8 -right-40 w-[29.4rem] rounded-t-lg shadow-lg transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                />
              ))}
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
            <h3 className="mt-2 lg:-mt-3 text-2xl font-semibold">{title}</h3>
            <p className="italic text-sm text-gray-700 dark:text-white/70 mt-1">
              {time}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-white/70">
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
          {imageUrl &&
            imageUrl.map((url, index) => (
              <Image
                key={index}
                src={imageUrl[currentImageIndex]}
                // alt="Project I worked on"
                alt={`Project image ${currentImageIndex + 1}`}
                quality={95}
                height={2000}
                className="absolute hidden sm:block top-8 -right-40 w-[29.9rem] rounded-t-lg shadow-lg transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
              />
            ))}
        </section>
      )}
      {/* <div
        className={`absolute flex items-center justify-center text-sm bg-gray-100 text-gray-950 dark:bg-gray-950/[0.97] dark:text-white/70 rounded-xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10 ${
          imageUrl
            ? "top-[6px] left-[5px] group-even:left-[20.6rem] w-1/2 px-4 py-2"
            : "top-4 right-3 max-h-[4.5rem] max-w-[29.7rem] px-4 py-2"
        }`}
      >
        {sideNotes}
      </div> */}
    </motion.div>
  );
}
