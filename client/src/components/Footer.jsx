import { Link } from "react-router-dom";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-28 bg-grey py-[3.123rem]">
      <div className="flex flex-row flex-nowrap">
        <div className="basis-2/4 flex flex-col ml-52">
          <Link to="/" className="mb-5">
            Products
          </Link>
          <Link to="/" className="mb-5">
            About US
          </Link>
          <Link to="/" className="mb-5">
            Contact
          </Link>
          <Link to="/">Customer Service</Link>
        </div>
        <div className="mr-52 basis-2/4">
          <h2 className="text-4xl font-header text-center ">Newsletter</h2>
          <p className="font-paragraph mt-5 text-center">
            Unlock Your Future Style - be the first to shop new arrivals,
            exclusive offers, and limited-time deals. Stay ahead with Future
            Vision!
          </p>
          <form className="flex flex-row flex-nowrap mt-5">
            <input
              type="email"
              value="Email address"
              pattern=".+@example\.com"
              className="bg-transparent font-paragraph text-light-grey basis-2/3"
              required
            />
            <button type="submit" className="uppercase basis-1/3">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap ml-52 mb-20 mt-5">
        <Link to="/" className="mr-5">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </Link>
        <Link to="/" className="mr-5">
          <FontAwesomeIcon icon={faSquareInstagram} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faSquareTwitter} />
        </Link>
      </div>
      <div className="ml-16">
        <Logo />
      </div>
    </footer>
  );
}
