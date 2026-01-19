//TODO: create a navigation system
//we are going to use Next.js Link component - not an anchor tag!

import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        {/* static routes */}
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/staff"}>Staff</Link>
        {/* dynamic route - ???????*/} 
        <Link href={"/profile/nene"}>Profile</Link>
      </nav>
    </>
  );
}

