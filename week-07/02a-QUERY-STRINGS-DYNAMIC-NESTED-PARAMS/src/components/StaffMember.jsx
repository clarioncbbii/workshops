//! THIS IS A DYNAMIC ROUTE - nested in a static route

import { useParams } from "react-router";

export default function StaffMember() {
  // here we are destructuring the value of the params and storing it in a variable
  let { staffMember } = useParams();
  return (
    <>
      <h1>STAFF MEMBER</h1>
      <p>{staffMember}</p>
    </>
  );
}
