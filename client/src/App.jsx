import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {

  return (
    <div className="no-scrollbar">
      <main >
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}
