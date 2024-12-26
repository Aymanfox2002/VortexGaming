import "./Home.css";
import {
  MainBanner,
  Features,
  TrendGames,
  MostPlayed,
  TopCategories,
  HomeInfo,
  Footer,
  Header,
} from "../../Sections/index";
import { ToTop } from "../../Components";

const Home = () => {
  return (
   <>
   <ToTop />
    <Header />
    <main className="home">
      <MainBanner />
      <TrendGames />
      <MostPlayed />
      <TopCategories />
      <HomeInfo />
      {/* <Features />   */}
      <Footer />
    </main></>
  );
};

export default Home;
