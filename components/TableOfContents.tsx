import React from "react";

type Heading = {
  text: string;
  level: 2 | 3 | 4; //h2-h4
  id?: string;
};

type Props = {
  headings: Heading[];
};

const TableOfContents = (props: Props) => {
  return <div>TableOfContents</div>;
};

export default TableOfContents;
