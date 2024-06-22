"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        After graduating from UC Santa Cruz with a double major in{" "}
        <span className="font-bold italic">
          Computer Science and Psychology
        </span>
        , I began working as a coding instructor at Code For Fun and took on the
        role of <span className="font-bold italic">research and dev lead</span>{" "}
        for the <span className="">AI Pathways Team</span> at the{" "}
        <a
          className="focus:scale-[1.15] hover:text-blue-900 dark:hover:text-blue-300 cursor-pointer underline italic"
          href="https://tech4good.soe.ucsc.edu/#/"
          target="_blank"
        >
          Tech4Good
        </a>{" "}
        lab at UC Santa Cruz.
      </p>
      <p>
        I have three beloved cats named{" "}
        <span className="italic">Kitty, Bangbang, and Normie</span>, whose
        adorable purrs and warmth provide comfort during stressful times. In my
        free time, I enjoy writing songs, singing, reading, drawing, baking,
        cooking, playing video games, and exploring new hobbies. I love{" "}
        <span className="font-bold italic">learning new things</span>, as they
        build my inner resilience and enrich my life.
      </p>
    </motion.section>
  );
}

{
  /* <span className="italic">My favorite part of programming</span> is the
      problem-solving aspect. I <span className="underline">love</span> the
      feeling of finally figuring out a solution to a problem. My core stack
      is{" "}
      <span className="font-medium">
        React, Next.js, Node.js, and MongoDB
      </span>
      . I am also familiar with TypeScript and Prisma. I am always looking to
      learn new technologies. I am currently looking for a{" "}
      <span className="font-medium">full-time position</span> as a software
      developer. */
}
