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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")!;
          if (entry.isIntersecting) {
            setActiveId(id);
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
          return (
            <li key={id} onClick={() => setActiveId(id)}>
              <a href={`#${id}`} className={"link " + activeClass}>
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
