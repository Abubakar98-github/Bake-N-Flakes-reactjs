import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("./signin");
  };

  const handleSignUp = () => {
    navigate("./signup");
  };

  return (
    <div>
      <div className="w-36 h-36 border border-gray-400 rounded-lg ">
        <button onClick={onClose} className="ml-24">
          {" "}
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="flex flex-col">
          <button
            className="bg-sky-300 p-1 mt-6 w-24 rounded ml-5 hover:bg-gray-300"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <button
            className="bg-sky-300 p-1 w-24 rounded ml-5 mt-4 hover:bg-gray-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
