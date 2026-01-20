//static route --> "/users" 

//TODO: render a list of users' data

//* ======================== EXTRA ======================== 
//TODO: sort users in alphabetical order
// sort data: use sorting logic / query string
// "/users?sort=asc" // "/users?sort=desc"
// in searchParams, we can have access to the query string key and value

//* ======================================================= 

import Link from "next/link";

export default async function UsersPage({ searchParams }) {
  //*searchParams is async
  const queryString = await searchParams;

  //no use of useEffect or state, as we are in the server - these are client-side 
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  //wrangle the data
    const { users } = data;
  //or: const users = data.users;

  //*sorting logic --> this logic sorts our users in alphabetical order
  //!this just works - use it accordingly for assignments & do not think too hard about it!
    if (queryString.sort === "desc") {
    users.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  } else if (queryString.sort === "asc") {
    users.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  }

  return (
    <>
      <h1>Users Page</h1>
      <Link className="text-purple-600" href={"/users?sort=asc"}>ASC</Link>
      <Link className="text-purple-600" href={"/users?sort=desc"}>DESC</Link>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`} className="text-blue-600">
              {user.firstName} {user.lastName}
            </Link>
          </div>
        );
      })}
    </>
  );
}