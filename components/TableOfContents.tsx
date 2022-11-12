import React from "react";

export type Heading = {
  text: string;
  level: number;
  id?: string;
};

type Props = {
  headings: Heading[];
};

const TableOfContents = (props: Props) => {
  const { headings } = props;
  return (
    <div>
      <h2>Table Of Contents</h2>
      <ul>
        {headings.map((heading, index) => {
          const id = heading.id || heading.text.toLowerCase();
          const padding = {
            3: "pl-2",
            4: "pl-4",
          };
          const level = heading.level as keyof typeof padding;
          const paddingClass = padding[level];
          return (
            <li key={index} className={paddingClass}>
              <a href={`#${id}`} className="link">
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
