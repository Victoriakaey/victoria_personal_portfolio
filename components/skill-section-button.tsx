import React from "react";

// interface skillSectionButtonProps {
//   title: string;
// }

// export default function SkillSectionButton(props: skillSectionButtonProps) {
export default function SkillSectionButton() {
  return (
    <div className="mb-6 -mt-4">
      <button className="rounded-full bg-black/70 px-3 py-3 hover:bg-gray-500 transition">
        {/* {" "} */}
        <p className="text-white">Framework</p>
      </button>
    </div>
  );
}
