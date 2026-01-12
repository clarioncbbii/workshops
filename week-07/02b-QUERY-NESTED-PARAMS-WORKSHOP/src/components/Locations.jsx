import { useParams } from "react-router";

export default function Locations() {
  let { visitor } = useParams();
  return (
    <div>
      <h2>LOCATIONS</h2>
      <p>LEICESTER</p>
      <p>BIRMINGHAM</p>
      <p>AND MANY MORE TO COME {visitor}!</p>
    </div>
  );
}
