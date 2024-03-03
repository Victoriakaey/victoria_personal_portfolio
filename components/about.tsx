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
        After graduating from UC Santa Cruz as a double major in{" "}
        <span className="font-medium">Computer Science and Psychology</span>, I
        started working at <span className="font-medium">Code For Fun</span> as
        a coding instructor and started doing research at the{" "}
        <a
          className="focus:scale-[1.15] hover:text-blue-900 cursor-pointer underline"
          href="https://tech4good.soe.ucsc.edu/#/"
          target="_blank"
        >
          Tech4Good
        </a>{" "}
        lab at UC Santa Cruz as a{" "}
        <span className="font-medium">research lead</span> for the{" "}
        <span className="italic">AI Pathways Team</span>.
        {/* <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      <p>
        I have three cats whom I <span className="font-medium">LOVE</span> and
        their name is
        <span className="italic"> Kitty, Bangbang, and Normie.</span> Their{" "}
        adorable purrs and warmth soothes me and keeps me company during my
        stressful times. During my free times, I enjoy{" "}
        <span className="italic">
          writing songs, singing, reading, drawing, baking, cooking, playing
          video games, and much more.
        </span>{" "}
        I got a bunch of hobbies, and I hope the number of them rises as I get
        older. I love learning new things as they could build up my inner
        resilience.
      </p>
    </motion.section>
  );
}
