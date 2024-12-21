import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"

export default function App() {
  return (
      <div className="h-screen bg-stone-950">
        <Navbar />
        < Outlet />
      </div>
  );
}
