import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="w-full pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}