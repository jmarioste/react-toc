import { NextPage } from "next";
import TableOfContents from "../components/TableOfContents";

const Home: NextPage = () => {
  return (
    <div className="container max-w-4xl">
      <div className="grid  grid-cols-12">
        <main className="prose col-span-8">
          <h1>How to Track Scroll Direction inside Intersection Observer</h1>

          <div>
            <h2 id="first">First </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              dolorum sit nobis in, officiis laboriosam debitis fuga fugiat ab
              tempore quasi soluta harum rerum, veniam dignissimos molestiae
              deleniti vero est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <h2 id="second">Second </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              dolorum sit nobis in, officiis laboriosam debitis fuga fugiat ab
              tempore quasi soluta harum rerum, veniam dignissimos molestiae
              deleniti vero est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <h2 id="third">Third </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              dolorum sit nobis in, officiis laboriosam debitis fuga fugiat ab
              tempore quasi soluta harum rerum, veniam dignissimos molestiae
              deleniti vero est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <h2 id="fourth">Fourth heading </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              dolorum sit nobis in, officiis laboriosam debitis fuga fugiat ab
              tempore quasi soluta harum rerum, veniam dignissimos molestiae
              deleniti vero est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit nesciunt iste omnis nam ullam officiis mollitia
              doloremque fuga, quisquam eligendi laborum, voluptate cupiditate
              minima alias perspiciatis corrupti. Magni, ipsam.
            </p>
          </div>
        </main>
        <div className="col-span-4 ">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
};

export default Home;
