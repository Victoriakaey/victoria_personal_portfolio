import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type Language = "en" | "cn";

/**
 * Every user-visible string lives here. Because both keys are required,
 * forgetting a translation is a compile error rather than a silent
 * fallback to the wrong language.
 */
export type Bilingual<T> = Readonly<Record<Language, T>>;

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export type NavLink = {
  /** Language-independent identity. Section highlighting compares against this, never the label. */
  id: SectionId;
  hash: `#${SectionId}`;
  label: Bilingual<string>;
};

export type ProjectCopy = {
  title: string;
  time: string;
  description: string;
  sideNotes: string;
  tags: readonly string[];
};

export type Project = {
  /** Stable id. Image files are named after it. */
  slug: string;
  images: readonly StaticImageData[];
  url: string | null;
  copy: Bilingual<ProjectCopy>;
};

export type ExperienceCopy = {
  title: string;
  location: string;
  date: string;
  description: readonly string[];
  tags: readonly string[];
};

export type Experience = {
  slug: string;
  locationUrl: string;
  icon: ReactNode;
  isBulletPoints: boolean;
  copy: Bilingual<ExperienceCopy>;
};

export type SkillGroup = {
  id: string;
  label: Bilingual<string>;
  skills: readonly string[];
};
