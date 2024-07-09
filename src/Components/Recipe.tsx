import { Link } from "react-router-dom";
import { Images } from "../Components/Images";

export default function Recipe() {
  return (
    <div>
      
      <div className="m-8">
      <h1 className="font-bold text-2xl">Recipes of our Best seller Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 mt-16">
          <div
            className="  p-4 w-full rounded h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cake10})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Angel food cake</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cake2})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Black Forest cake</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cake11})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Funfetti</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cake4})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Marble Cake</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  gap-10 mt-5">
          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cake5})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">German Chocolate Cake</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cookies7})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Black and white cookies</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className="rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cookies2})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Macadamia Nut Cookies</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cookies10})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Linzer Cookies</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  gap-10 mt-5">
          <div
            className=" rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cookies9})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Shortbread cookies</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>

          <div
            className="rounded p-4 w-full h-56"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Images.cookies8})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold mt-5 text-xl text-white">Sugar cookies</h3>
            <Link
              to="https://www.allrecipes.com/recipes/276/desserts/cakes/"
              target="_blank"
            >
              <button className="bg-sky-400 mt-24 p-2 w-24 rounded hover:bg-gray-300">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
