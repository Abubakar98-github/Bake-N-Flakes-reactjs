import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Footer() {
  return (
    <footer>
      <div className="bg-black   text-white flex flex-col lg:flex-row items-center justify-center">
        {/* About us section */}
        <div className="flex items-center justify-center flex-col w-full lg:w-96 p-4 lg:pl-36">
          <h3 className="text-left text-sm sm:text-md">About</h3>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur ea vero maxime. Consequuntur ducimus saepe doloribus
            soluta. Amet iusto aspernatur et error iure suscipit qui, non alias
            cum vero repellendus fugit voluptatibus minus pariatur quos? Soluta,
            quisquam nam corrupti animi cumque minus
          </p>
          {/* <a href="#" className="text-center text-blue-500">
            read more
          </a> */}
        </div>

        {/* Help section */}
        <div className="flex items-center justify-center flex-col w-full lg:w-96 p-4">
          <h3 className="text-left">Help</h3>
          <ul className="text-center">
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms and conditions</li>
            <li>Shipping details</li>
          </ul>
        </div>

        {/* Contact us section */}
        <div className="flex items-center justify-center flex-col w-full lg:w-96 p-4 lg:pr-36">
          <h3 className="text-right">Contact</h3>
          <ul className="text-center">
            <li>Address: XYZ street</li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> Phone no: 015267683
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Mail: bakenflakes@mail.com
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center">Copyright © Bake n' Flakes</p>
    </footer>
  );
}
