import type { Bilingual, NavLink } from "./types";

export const navLinks: readonly NavLink[] = [
  { id: "home", hash: "#home", label: { en: "Home", cn: "首页" } },
  { id: "about", hash: "#about", label: { en: "About", cn: "关于我" } },
  { id: "projects", hash: "#projects", label: { en: "Projects", cn: "项目" } },
  { id: "skills", hash: "#skills", label: { en: "Skills", cn: "技能" } },
  {
    id: "experience",
    hash: "#experience",
    label: { en: "Experience", cn: "经验" },
  },
  { id: "contact", hash: "#contact", label: { en: "Contact", cn: "联系我" } },
];

/**
 * Headings for the sections whose content lives in lib/content/.
 * About and Contact keep theirs alongside their prose in lib/*-content.tsx.
 */
export const projectsTitle: Bilingual<string> = {
  en: "My Projects",
  cn: "我的项目",
};

export const skillsTitle: Bilingual<string> = {
  en: "My Skills",
  cn: "我的专业技能",
};

export const experienceTitle: Bilingual<string> = {
  en: "My Experience",
  cn: "我的经验",
};
