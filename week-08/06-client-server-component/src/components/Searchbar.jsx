//client component

"use client";

//TODO: Have a search bar that updates based on user input
//events: oNChange (to track user imput), onSubmit
//state: to store the input with some persistence

import { useState } from "react";
export default function Searchbar() {
  const [search, setSearch] = useState("");

  function handleSubmit() {
    //logic
  }

  function handleChange() {
    //logic
  }
  return (
    <>
      <h2>Searchbar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" required name="search" onChange={handleChange} />
      </form>
    </>
  );
}
