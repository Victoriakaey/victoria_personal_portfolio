"use client";

import React, { useContext, useState } from "react";
import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/content/skills";
import { skillsTitle } from "@/lib/content/site";
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

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const { ref } = useSectionInView("skills");

  const [activeGroupId, setActiveGroupId] = useState(skillGroups[0].id);
  const activeGroup =
    skillGroups.find((group) => group.id === activeGroupId) ?? skillGroups[0];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{skillsTitle[language]}</SectionHeading>
      <SkillSectionButton
        activeGroupId={activeGroupId}
        setActiveGroupId={setActiveGroupId}
      />
      <ul
        // Remount on group change so the stagger animation replays.
        key={activeGroup.id}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
      >
        {activeGroup.skills.map((skill, index) => (
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
