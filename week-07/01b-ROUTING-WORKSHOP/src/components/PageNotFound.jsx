import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h2>OOPS! Not not found what you seek</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
