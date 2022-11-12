import { NextPage } from "next";
import Article from "../components/Article";
import TableOfContents, { Heading } from "../components/TableOfContents";

const Home: NextPage = () => {
  //for now we use manual data
  const headingsData: Heading[] = [
    {
      level: 2,
      text: "First",
    },
    {
      level: 2,
      text: "Second",
    },
    {
      level: 2,
      text: "Third",
    },
    {
      level: 2,
      text: "Fourth heading",
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
      </div>
    </div>
  );
};

export default Home;
