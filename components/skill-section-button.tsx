"use client";
import { skillGroups } from "@/lib/content/skills";
import React from "react";
import SkillButton from "./skill-button";

interface SkillSectionButtonProps {
  activeGroupId: string;
  setActiveGroupId: (groupId: string) => void;
}

export default function SkillSectionButton({
  activeGroupId,
  setActiveGroupId,
}: SkillSectionButtonProps) {
  return (
    <div className="mb-6 -mt-4 flex gap-2 justify-center items-center text-gray-50">
      {skillGroups.map((group) => (
        <SkillButton
          key={group.id}
          label={group.label}
          isActive={group.id === activeGroupId}
          handleClick={() => setActiveGroupId(group.id)}
        />
      ))}
    </div>
  );
}
