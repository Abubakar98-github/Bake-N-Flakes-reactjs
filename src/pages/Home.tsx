import BestSeller from "../Components/BestSeller";
// import CookieItem from "../Components/CookieItem";

// import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Contact from "../Components/Contact";
import HomeMade from "../Components/HomeMade";
// import CookieItem from "../Components/CookieItem";
export default function Home() {
  return (
    <>
      <Slider />
      <div className="my-4">
        <BestSeller />
      </div>
      <HomeMade />
      <Contact />
    </>
  );
}
