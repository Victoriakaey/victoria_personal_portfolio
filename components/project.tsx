"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LanguageContext } from "@/context/language-context";
import type { Project as ProjectType } from "@/lib/content/types";

type ProjectProps = {
  project: ProjectType;
};

// NOTE: the linked and unlinked branches below carry slightly different
// classNames (image width, heading margin, tag-row offset). Kept as-is —
// untangling them is a visual change, not part of the data-layer move.
export default function Project({ project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useContext(LanguageContext);
  const { title, time, description, tags } = project.copy[language];
  const { images, url } = project;
  const hasImages = images.length > 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1100); // Change image every second
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

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
      {url ? (
        <a href={url} target="_blank">
          <section
            className={`bg-gray-100 max-w-[42rem] border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 sm:h-[20rem] ${
              hasImages ? "sm:pr-8 sm:group-even:pl-8" : "px-6 -py-1"
            }`}
          >
            <div
              className={`pt-4 pb-7 px-5 sm:pt-10 ${
                hasImages
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
                  hasImages ? "lg:group-even:justify-end" : ""
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
            {images.map((_, index) => (
              <Image
                key={index}
                src={images[currentImageIndex]}
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
            hasImages ? "sm:pr-8 sm:group-even:pl-8" : "px-6 -py-1"
          }`}
        >
          <div
            className={`pt-4 pb-7 px-5 sm:pt-10 ${
              hasImages
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
                hasImages ? "group-even:justify-end" : ""
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
          {images.map((_, index) => (
            <Image
              key={index}
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              quality={95}
              height={2000}
              className="absolute hidden sm:block top-8 -right-40 w-[29.9rem] rounded-t-lg shadow-lg transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
            />
          ))}
        </section>
      )}
      {/* sideNotes (project.copy[language].sideNotes) used to render here as a
          hover overlay. Still authored in the content files, still not shown. */}
    </motion.div>
  );
}
