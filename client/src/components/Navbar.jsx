import { NavLink } from "react-router-dom";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex flex-row flex-nowrap items-center px-[3.125rem] py-5 z-[20] sticky top-0 bg-stone-950">
      <NavLink to="/" className="basis-1/3">
        <Logo />
      </NavLink>
      <div className="basis-1/3 flex justify-center">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/" className="mx-5">
          About Us
        </NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
      <div className="basis-1/3 flex justify-end">
        <NavLink to="/">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink to="/" className="ml-5">
          <FontAwesomeIcon icon={faShoppingBag} />
        </NavLink>
      </div>
    </nav>
  );
}
