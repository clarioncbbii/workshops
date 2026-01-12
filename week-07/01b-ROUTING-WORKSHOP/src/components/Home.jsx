import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h2>HOMEPAGE</h2>
      <Link to="/about">About</Link>
    </div>
  );
}
