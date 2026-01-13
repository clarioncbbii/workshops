import "./App.css";
import { Routes, Route, Link } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import UserPage from "./components/UserPage";

export default function App() {
  return (
    <>
      {/* this functions like nav bar with anchor tags - write what you want displayed between the link tags */}
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      {/* ROUTING SYSTEM */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />

        {/* dynamic route w/ nested routes */}
        <Route path="users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>
      </Routes>
    </>
  );
}
