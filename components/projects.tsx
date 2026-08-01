"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";

import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { LanguageContext } from "@/context/language-context";
import { projects } from "@/lib/content/projects";
import { projectsTitle } from "@/lib/content/site";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const { ref } = useSectionInView("projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{projectsTitle[language]}</SectionHeading>
      <div>
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
