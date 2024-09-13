"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";

import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { LanguageContext } from "@/context/language-context";
import {
  cn_projectsData,
  cn_projectsTitle,
  en_projectsData,
  en_projectsTitle,
} from "@/lib/data";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const { ref } = useSectionInView("Projects", 0.5);
  const projectsData = language === "en" ? en_projectsData : cn_projectsData;
  const projectsTitle = language === "en" ? en_projectsTitle : cn_projectsTitle;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{projectsTitle}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
