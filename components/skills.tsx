"use client";

import React, { useContext, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  cn_skillsTitle,
  en_skillsTitle,
  programmingLanguages,
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SkillSectionButton from "./skill-section-button";
import { LanguageContext } from "@/context/language-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// todo: still need to make this change when the list of
export default function Skills() {
  const { language } = useContext(LanguageContext);
  const { ref } = useSectionInView("Skills");
  const skillsTitle = language === "en" ? en_skillsTitle : cn_skillsTitle;

  const [skillsData, setSkillsData] = useState<string[]>(programmingLanguages);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setRefreshKey((prevKey) => prevKey + 1);
  }, [skillsData]);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{skillsTitle}</SectionHeading>
      <SkillSectionButton setSkillsData={setSkillsData} />
      <ul
        key={refreshKey}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
