import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

export default function App() {

  return (
    <div className="no-scrollbar">
      <AuthProvider>
      <main >
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </main>
      </AuthProvider>
    </div>
  );
}
