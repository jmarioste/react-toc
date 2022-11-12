import { NextPage } from "next";
import Article from "../components/Article";

const Home: NextPage = () => {
  return (
    <div className="container max-w-5xl">
      <div>
        <main className="prose">
          <Article />
        </main>
      </div>
    </div>
  );
};

export default Home;
