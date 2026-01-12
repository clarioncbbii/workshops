//! THIS IS A STATIC ROUTE

import { Outlet } from "react-router";
import { staff } from "./lib/staffData";

//this hook gives us the value of the query string
import { useSearchParams } from "react-router";

export default function Staff() {
  //  destructure the query string value
  let [searchParams] = useSearchParams();

  //TODO: Query string has two values --> 'key=value' and we need to define both
  //(1) define the key in our query string
  const sort = searchParams.get("sort");

  //(2) logic to sort our list of items
  // - if sort is equal to asc, order the items in ascending order:
  if (sort === "asc") {
    //logic
    staff.sort();
  } else if (sort === "desc") {
    //logic
    staff.sort().reverse();
  }

  // - if sort is equal to desc, order the items in descending order:

  return (
    <>
      <h1>STAFF LIST</h1>
      {/* We use Outlet whenever we are rendering a component in a nested route */}
      {/* Outlet represents the child element --> in this case it represents StaffMember.jsx */}
      {/* it will only show when we navigate to:  "/staff/":staffMember" */}
      <Outlet />

      {staff.map((member, index) => {
        //map allows us to return a value whereas forEach does not
        return <h2 key={index}>{member}</h2>;
      })}
    </>
  );
}
