import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Images } from "../Components/Images";

interface CardProps {
  card: {
    id: number;
    imageSrc: string;
    name: string;
    price: string;
    rating: number;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { imageSrc, name, price, rating } = card;

  return (
    <div className="rounded-xl bg-pink-200 cursor-pointer shadow-lg">
      <img
        src={imageSrc}
        alt="img"
        className="rounded-t-xl transition-all duration-500 hover:scale-90 hover:brightness-50 w-full"
      />

      <div className="flex items-center justify-center mt-2">
        <div className="flex items-center">
          <h6 className="font-semibold pr-3">Reviews</h6>
          {[...Array(Math.floor(rating))].map((_, index) => (
            <FontAwesomeIcon
              icon="star"
              className="text-yellow-500 hover:animate-spin mx-px"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="px-5 py-5">
        <h3 className="text-2xl font-semibold text-pink-500">{name}</h3>
        <p className="underline text-pink-500">{price}</p>
        <div className="flex   justify-center gap-2 items-center py-2">
          <button className="bg-pink-500 font-semibold text-pink-200 hover:text-pink-500 hover:bg-pink-200 border border-pink-400 transition-all whitespace-nowrap duration-300 px-2 sm:px-5 lg:px-4 xl:px-6 py-2 rounded ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CookiesItem: React.FC = () => {
  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      imageSrc: Images.cake1,
      name: "Angel Food Cake",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 2,
      imageSrc: Images.cake2,
      name: "Black Forest cake",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 3,
      imageSrc: Images.cake3,
      name: "Pound Cake",
      price: "$2",
      rating: 4.2,
    },

    {
      id: 4,
      imageSrc: Images.cookies1,
      name: "Sugar cookies",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 5,
      imageSrc: Images.cookies2,
      name: "Shortbread cookies",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 6,
      imageSrc: Images.cookies3,
      name: "Black and white cookies",
      price: "$10",
      rating: 4.3,
    },
  ]);

  const limitedBestSellers = bestSellers.slice(0, 6);
  const cakes = limitedBestSellers.slice(0, 3); // First 3 items are cakes
  const cookies = limitedBestSellers.slice(3, 6);

  return (
    <div className="py-10">
      <div className="responsive flex flex-col gap-10 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cakes.map((cake) => (
            <div key={cake.id} className="mr-2">
              <Card card={cake} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cookies.map((cookie) => (
            <div key={cookie.id} className="mr-2">
              <Card card={cookie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiesItem;
