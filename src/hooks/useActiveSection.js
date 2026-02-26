import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return active;
}
