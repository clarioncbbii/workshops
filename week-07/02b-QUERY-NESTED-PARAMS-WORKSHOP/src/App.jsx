import "./App.css";
import { Routes, Route, Link } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Locations from "./components/Locations";

export default function App() {
  return (
    <>
      {/* this functions like nav bar with anchor tags - write what you want displayed between the link tags */}
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/locations"}>Locations</Link>
      </nav>
      {/* ROUTING SYSTEM */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        {/* dynamic route */}
        <Route path="abouts/:locations" element={<Locations />} />
      </Routes>
    </>
  );
}
