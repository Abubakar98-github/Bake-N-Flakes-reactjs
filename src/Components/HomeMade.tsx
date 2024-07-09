import { useState } from "react";
import hmbg from "../images/hmbg.jpg";
import { useNavigate } from "react-router";
import Spinner from "../Components/Spinner";

export default function HomeMade() {
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      navigate("/cart");
    }, 1000); // Navigate after 1 second (you can adjust the time as needed)
  };

  return (
    <div
      className="h-[100vh] relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${hmbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="border border-pink-300 bg-white h-[350px] w-[350px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className=" mt-16 text-2xl text-center">Bake n' Flakes</h1>
        <p className="mt-6 text-2xl text-center">
          HomeMade Muffins <br />
          Made with Love and Care
        </p>
        <button
          className="mt-6 bg-sky-300 rounded-full font-bold px-5 py-3 mx-auto block hover:bg-gray-300"
          onClick={handleCart}
        >
          {isAddingToCart ? <Spinner /> : "Get Now"}
        </button>
      </div>
    </div>
  );
}
