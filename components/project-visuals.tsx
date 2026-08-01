import React from "react";

/**
 * Artwork for projects that have no UI to screenshot — CLI tools and Claude Code
 * skills. Rendered as components rather than images: the card only gives artwork
 * ~350px of width, and a raster diagram sized for that is unreadable.
 *
 * Every string here is lifted from the project's own README. These are diagrams,
 * not screenshots — they never pretend to be a captured session.
 */

/**
 * The card crops ~34% off one edge of its artwork, and which edge alternates:
 * odd cards lose the right third, even cards lose the left third. So the shell
 * reserves that third as bleed and keeps every glyph in the visible ~310px.
 */
const shell =
  "flex h-full w-full flex-col justify-center gap-3 bg-[#faf6ef] py-7 pl-7 pr-[10.5rem] group-even:pl-[10.5rem] group-even:pr-7 font-mono text-[#1c1a17]";
const eyebrow = "text-[9px] uppercase tracking-[0.16em] text-[#6b6459]";
const dot = "text-[#d9736b]";
const panel = "rounded-lg bg-[#24211d] px-4 py-3";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={eyebrow}>
      <span className={dot}>●</span> {children}
    </p>
  );
}

function ProjectLifeCycleVisual() {
  return (
    <div className={shell}>
      <Eyebrow>Slash commands</Eyebrow>
      <div className={panel}>
        {["init-harness", "ship", "release"].map((cmd) => (
          <p key={cmd} className="text-[15px] leading-[1.9] text-[#f3efe6]">
            <span className={dot}>/</span>
            {cmd}
          </p>
        ))}
      </div>
      <p className="text-[9.5px] leading-[1.7] text-[#6b6459]">
        spec → plan → build
        <br />→ verify → ship → release
      </p>
    </div>
  );
}

function SlackQnaVisual() {
  const stages = [
    "Parser",
    "SQL Generator",
    "Validator",
    "Executor",
    "Critic ↺",
    "Synthesizer",
  ];
  return (
    <div className={shell}>
      <Eyebrow>LangGraph StateGraph</Eyebrow>
      <div className={panel}>
        {stages.map((stage, index) => (
          <p
            key={stage}
            className={`text-[12px] leading-[1.85] ${
              stage.startsWith("Critic") ? "text-[#d9736b]" : "text-[#f3efe6]"
            }`}
          >
            {index > 0 && <span className="text-[#6b6459]">↓ </span>}
            {stage}
          </p>
        ))}
      </div>
    </div>
  );
}

function ReflectVisual() {
  const frameworks = ["CBT", "Attachment theory", "IFS", "Somatic / polyvagal"];
  return (
    <div className={shell}>
      <Eyebrow>Frameworks it uses</Eyebrow>
      <div className="grid grid-cols-2 gap-2">
        {frameworks.map((name, index) => (
          <div
            key={name}
            className="rounded-lg border border-[#ded5c4] bg-[#fffdf9] px-2.5 py-2.5 text-[11px] leading-tight"
          >
            <span className={`block text-[9px] ${dot}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {name}
          </div>
        ))}
      </div>
      <p className="text-[9.5px] text-[#6b6459]">
        <span className={dot}>●</span> Never announced. Never uploaded.
      </p>
    </div>
  );
}

/** Keyed by project slug. A project with no entry falls back to its images. */
export const projectVisuals: Record<string, () => React.JSX.Element> = {
  "project-life-cycle": ProjectLifeCycleVisual,
  "slack-qna-bot": SlackQnaVisual,
  reflect: ReflectVisual,
};
