import React, { useState } from "react";
import TableOfContents, { Heading } from "./TableOfContents";

type Props = {
  headings: Heading[];
};

const TocMobile = ({ headings }: Props) => {
  const [open, setOpen] = useState(false);
  const modalClass = open ? "modal-open" : "";
  return (
    <div>
      <a
        href="#my-modal-2"
        className="btn btn-circle fixed bottom-4 right-4 md:hidden"
        onClick={() => setOpen(true)}
      >
        TOC
      </a>
      <div className={"modal modal-bottom " + modalClass}>
        <div className="modal-box relative">
          <button
            className="btn btn-ghost btn-sm absolute right-4 top-4"
            onClick={() => setOpen(false)}
          >
            x
          </button>
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
};

export default TocMobile;
