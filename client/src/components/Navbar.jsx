import { NavLink } from "react-router-dom";
import Logo from "./logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div>
      <nav className="flex-row justify-between items-center my-2.5 mx-2.5 sticky z-[20]">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <NavLink className="font-paragraph inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Products About Us Contact
        </NavLink>

        <NavLink to="/">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon icon={faShoppingBag} />
        </NavLink>
      </nav>
    </div>
  );
}
