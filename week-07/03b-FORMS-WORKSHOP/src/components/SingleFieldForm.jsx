import { useState } from "react";

export default function SingleFieldForm() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    //prevent default behaviour
    event.preventDefailt();
  }
  // handle form input values changing as user types
  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      {/* view state as it changes: */}
      <p>Current value of 'name' is: {name}</p>{" "}
    </>
  );
}
