//TODO: I want to use the value of the params in the profile page
import { useParams } from "react-router";

export default function UserProfile() {
  // here we are destructuring the value of the params and storing it in a variable
  let { userProfile } = useParams();
  return (
    <>
      <h1>PROFILE PAGE</h1>
      <p>Username:{userProfile}</p>
    </>
  );
}
