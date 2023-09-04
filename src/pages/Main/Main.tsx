import { HeroSection } from "./components/HeroSection";
import { TopCreators } from "./components/TopCreators";
import { Trending } from "./components/Trending";

const Main = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <Trending />
      <TopCreators />
    </>
  );
};

export default Main;
