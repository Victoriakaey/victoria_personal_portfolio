import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionId } from "./content/types";

export function useSectionInView(sectionId: SectionId, threshold = 0.8) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionId);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionId]);
  return { ref };
}
