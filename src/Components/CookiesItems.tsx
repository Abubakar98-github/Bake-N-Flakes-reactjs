import { useState } from "react";
import {   useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
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
  const {id, imageSrc, name, price, rating } = card;
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      navigate("/cart");
    }, 1000); // Navigate after 1 second (you can adjust the time as needed)
  };

  
  const dispatch = useDispatch();
  return (
    <div className="rounded-xl bg-pink-200 cursor-pointer shadow-lg ">
      <img
        src={imageSrc}
        alt="img"
        className="rounded-t-xl transition-all duration-500 hover:scale-90 hover:brightness-50"
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
        <div className="flex   justify-between gap-2 items-center py-2">
          <div className="inline-flex items-center gap-1">
            <label htmlFor={`input-${id}`} className="font-semibold">
              Items:{" "}
            </label>
            <input
              type="number"
              id={`input-${id}`}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-pink-500 rounded-lg w-12 sm:w-16 xl:w-24 py-2 bg-white px-2"
            />
          </div>

          <button
            className="bg-pink-500   font-semibold text-pink-200 hover:text-pink-500 hover:bg-pink-200 border border-pink-400 transition-all whitespace-nowrap duration-300 px-1 sm:px-1 lg:px-4 xl:px-6  lg:py-3 py-2 w-36 lg:w-36 rounded "
            onClick={() => {
              dispatch(addItem(quantity)); 
            }}
          >
            {isAddingToCart ? <Spinner /> : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
const Items: React.FC = () => {
  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      imageSrc: Images.cookies1,
      name: "Sugar cookies",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 2,
      imageSrc: Images.cookies2,
      name: "Shortbread cookies",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 3,
      imageSrc: Images.cookies3,
      name: "Black and white cookies",
      price: "$12",
      rating: 4.2,
    },
    {
      id: 4,
      imageSrc: Images.cookies4,
      name: "Thumbprint Cookies",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 5,
      imageSrc: Images.cookies5,
      name: "Butter Cookies",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 6,
      imageSrc: Images.cookies6,
      name: "Anzac Biscuits",
      price: "$10",
      rating: 4.3,
    },
    {
      id: 7,
      imageSrc: Images.cookies7,
      name: "Peanut Butter Cookies",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 8,
      imageSrc: Images.cookies8,
      name: "Snickerdoodle Cookies",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 9,
      imageSrc: Images.cookies9,
      name: "Oatmeal Raisin Cookies",
      price: "$12",
      rating: 4.2,
    },
    {
      id: 10,
      imageSrc: Images.cookies10,
      name: "M&M Cookies",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 11,
      imageSrc: Images.cookies11,
      name: "Gingerbread Cookies",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 12,
      imageSrc: Images.cookies12,
      name: "Coconut Macaroons",
      price: "$10",
      rating: 4.3,
    },
  ]);

  const limitedBestSellers = bestSellers.slice(0, 12);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   p-4">
      {limitedBestSellers.map((item) => (
        <div key={item.id}>
          <Card card={item} />
        </div>
      ))}
    </div>
  );
};

export default Items;
