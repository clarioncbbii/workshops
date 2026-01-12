import { Routes, Route } from "react-router";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import Staff from "./components/Staff";
import StaffMember from "./components/StaffMember";

//TODO: I want to create a routing system --> "/", "/about"
//Routes --> a component that contains all the Route components
export default function App() {
  return (
    <>
      <Header />
      <h1>SPA and routing</h1>
      <h2>Subtitle</h2>
      {/* routing system */}
      <Routes>
        {/* static paths */}
        <Route element={<MainSection />} path={"/"} />
        <Route element={<About />} path={"/about"} />
        <Route element={<UserProfile />} path={"/profile/:userProfile"} />
        {/* example of a nested route - dynamic route nested in a static route */}
        {/* No "/" in nested routes - it does not like it! */}
        {/* we need to add a placeholder component to render --> outlet used in the parent of the component you want rendered*/}
        {/* e.g. staffMember is nested in Staff, so we put outlet in Staff */}
        <Route element={<Staff />} path={"/staff"}>
          <Route element={<StaffMember />} path={":staffMember"} />
        </Route>
      </Routes>
    </>
  );
}
