import { NextPage } from "next";
import Article from "../components/Article";
import TableOfContents, { Heading } from "../components/TableOfContents";
import TocMobile from "../components/TocMobile";

const Home: NextPage = () => {
  //for now we use manual data
  const headingsData: Heading[] = [
    {
      level: 2,
      text: "First",
      id: "first",
    },
    {
      level: 2,
      text: "Second",
      id: "second",
    },
    {
      level: 3,
      id: "h3-heading",
      text: "H3 Heading",
    },
    {
      level: 4,
      id: "h4-heading",
      text: "H4 Heading",
    },
    {
      level: 2,
      text: "Third",
      id: "third",
    },
    {
      level: 2,
      text: "Fourth heading",
      id: "fourth-heading",
    },
  ];
  return (
    <div className="container max-w-5xl">
      <div className="grid grid-cols-12 gap-4">
        <main className="prose col-span-12 md:col-span-8">
          <Article />
        </main>
        <div className="hidden md:block col-span-4">
          <div className="sticky top-4">
            <TableOfContents headings={headingsData} />
          </div>
        </div>
        <TocMobile headings={headingsData} />
      </div>
    </div>
  );
};

export default Home;
