//! THIS IS A STATIC ROUTE

//TODO: I want the user to filter/change the order of the staff list
import { Outlet, Link } from "react-router";
import { staff } from "../lib/staffData";

//this hook gives us the value of the query string
import { useSearchParams } from "react-router";

export default function Staff() {
  //  destructure the query string value
  let [searchParams] = useSearchParams();

  //* Query string has two values --> '?key=value' and the name of the values is your choice
  //(1) define the key in our query string
  const sort = searchParams.get("sort");

  //(2) logic to sort our list of items
  // - if sort is equal to asc, order the items in ascending order
  // - if sort is equal to desc, order the items in descending order
  if (sort === "asc") {
    //logic
    staff.sort();
  } else if (sort === "desc") {
    //logic
    staff.sort().reverse();
  }

  return (
    <>
      <h1>STAFF LIST</h1>
      {/* We use Outlet whenever we are rendering a component in a nested route */}
      {/* Outlet represents the child element --> in this case it represents StaffMember.jsx */}
      {/* it will only show when we navigate to:  "/staff/":staffMember" */}
      <Outlet />

      {/* we are going to add Link components for the user to sort the list */}
      <Link to={"/staff"}>Reset</Link>
      <Link to={"/staff?sort=asc"}>Sort: ascending</Link>
      <Link to={"/staff?sort=desc"}>Sort: descending</Link>

      {staff.map((member, index) => {
        //map allows us to return a value whereas forEach does not
        return <h2 key={index}>{member}</h2>;
      })}
    </>
  );
}
