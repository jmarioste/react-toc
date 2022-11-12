import React, { useEffect, useRef, useState } from "react";

export type Heading = {
  text: string;
  level: number;
  id: string;
};

type Props = {
  headings: Heading[];
};

const TableOfContents = (props: Props) => {
  const { headings } = props;
  const [activeId, setActiveId] = useState("");
  const scrollRef = useRef(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")!;
          if (entry.isIntersecting) {
            setActiveId(id);
            scrollRef.current = window.scrollY;
          } else {
            const diff = scrollRef.current - window.scrollY;
            const isScrollingUp = diff > 0;
            const currentIndex = headings.findIndex((h) => h.id === id);
            const prevEntry = headings[currentIndex - 1];
            if (isScrollingUp) {
              const id = prevEntry.id;
              setActiveId(id);
            }
          }
        });
      },
      {
        rootMargin: "0% 0% -85% 0%",
      }
    );
    headings.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) {
        observer.observe(elem);
      }
    });
  }, []);

  return (
    <div>
      <h2>Table Of Contents</h2>
      <ul>
        {headings.map((heading) => {
          const id = heading.id;
          const activeClass = activeId === id ? "link-accent" : "";
          const indentation = {
            3: " pl-2",
            4: " pl-4",
          };
          const level = heading.level as keyof typeof indentation;
          const paddingClass = indentation[level] ?? "";
          return (
            <li key={id} onClick={() => setActiveId(id)}>
              <a
                href={`#${id}`}
                className={"link " + activeClass + paddingClass}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
