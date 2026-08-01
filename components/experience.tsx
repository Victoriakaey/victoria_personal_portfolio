"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/lib/content/experiences";
import { experienceTitle } from "@/lib/content/site";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { LanguageContext } from "@/context/language-context";

// There's still an issue here with the visibility of the timeline blocks
// need to figure out a way to solve this shit
// https://stephane-monnot.github.io/react-vertical-timeline/#/
// https://github.com/stephane-monnot/react-vertical-timeline?tab=readme-ov-file
// https://stephanemonnot.com/

export default function Experience() {
  const { language } = useContext(LanguageContext);

  const { ref } = useSectionInView("experience");
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{experienceTitle[language]}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((experience) => {
          const item = experience.copy[language];
          return (
            <React.Fragment key={experience.slug}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "var(--timeline-card-bg)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.0.5)",
                  textAlign: "left",
                  padding: "1.4rem 2rem",
                  // maxWidth: "100rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid var(--timeline-arrow)",
                }}
                date={item.date}
                dateClassName="sm:md:lg:ml-5 mr-5"
                icon={experience.icon}
                iconStyle={{
                  background: "var(--timeline-icon-bg)",
                  fontSize: "1.5rem",
                }}
                visible
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <Link
                  href={experience.locationUrl}
                  target="__blank"
                  className="font-normal !mt-2 italic dark:hover:text-white hover:text-black/70 underline"
                >
                  {item.location}
                </Link>

                {item.description.map((paragraph, index) => (
                  <p
                    className="!mt-2 !font-normal text-sm lg:text-base leading-relaxed text-gray-700 dark:text-white/75"
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}
                <ul className="flex flex-wrap !mt-4 mb-4 lg:mb-4 gap-2 sm:mt-auto">
                  {item.tags.map((tag, index) => (
                    <li
                      className="bg-black/10 text-gray-550 !px-3 !py-1 text-[0.7rem] tracking-wider dark:text-white rounded-md dark:text-white/70 dark:bg-black/40"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
