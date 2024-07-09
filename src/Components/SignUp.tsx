 
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="bg-purple-100 p-4">
      <h1 className="text-2xl">Sign Up</h1>

      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          className="p-4 mt-4 w-full sm:w-[300px] md:w-[400px] rounded"
        />
        <input
          type="text"
          placeholder="Email"
          className="p-4 mt-4 w-full sm:w-[300px] md:w-[400px] rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mt-4 w-full sm:w-[300px] md:w-[400px] rounded"
        />
        <button className="p-4 w-full sm:w-[300px] md:w-[400px] mt-4 mb-4 rounded bg-sky-300 hover:bg-gray-300">
          SignUp
        </button>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
}
