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
  /** Stable id. Image files are named after it, as is the optional visual. */
  slug: string;
  images: readonly StaticImageData[];
  url: string | null;
  copy: Bilingual<ProjectCopy>;
};

/**
 * How a project's artwork sits in the card.
 *
 * "bleed" is the original treatment: the image is oversized and runs off the
 * edge, so only its top ~67% × ~80% shows. That works for app screenshots —
 * you see a UI's corner and fill in the rest — and every existing entry uses it.
 *
 * "contain" keeps the artwork whole. Projects whose artwork IS the message
 * (a diagram, a command list) break under the bleed crop, so they opt out.
 */
export type ImageFit = "bleed" | "contain";

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
  /**
   * Prose, not bullets — one paragraph per entry. Kept as an array so an entry
   * can run to a second paragraph without changing the shape.
   */
  copy: Bilingual<ExperienceCopy>;
};

export type SkillGroup = {
  id: string;
  label: Bilingual<string>;
  skills: readonly string[];
};
