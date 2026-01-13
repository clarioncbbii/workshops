import { useParams, Outlet, Link, useSearchParams } from "react-router";

export default function UserPage() {
  let { username } = useParams();

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  return (
    <>
      <h2>User ID: {username}</h2>
      <hr />
      <p>sort: {sort} </p>
      <Link to={`/users/${username}`}>PROFILE</Link>
      <Link to={`/users/${username}/posts`}>POSTS</Link>
      <Link to={`/users/${username}/likes`}>LIKES</Link>

      <Outlet />
    </>
  );
}
