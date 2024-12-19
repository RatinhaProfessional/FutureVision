import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex-row justify-between items-center my-2.5 mx-2.5">
        <NavLink to="/">
          <p className="h-10 inline">FUTUREViSION</p>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Products About Us Contact
        </NavLink>

        <NavLink to="/" className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" /> 
        </NavLink>
      </nav>
    </div>
  );
}