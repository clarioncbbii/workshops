//! HOW DOES A FORM WORK IN REACT (CLIENT-SIDE)?

//We will use onSubmit to submit our form
//we add the event listener directly onto the form element and make an event handler function
//We will also need to prevent the default form behaviour

//To handle the form data, we need to store it in state --> React needs to know if that data is going to have any changes (because of the component lifecycle)

import { useState } from "react";

export default function StaffForm() {
  //STORE FORM DATA IN STATE - EACH INPUT GETS ITS OWN STATE:
  //-state for name --> variable name, set function, initial value
  const [staffName, setName] = useState("");

  //-state for email
  const [email, setEmail] = useState("");

  //-state for password
  const [password, setPassword] = useState("");

  //HANDLE THE INPUT CHANGES --> we need to tell React when the changes in the data are happening, as they happen
  //event --> onChange

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    //here, we will send the form data to the server
    //-fetch the server POST route
    //-declare the headers (body) --> method, content type, body (and the body value is your state)
  }
  return (
    <>
      <h1>Staff Form</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="staffName">Name: </label>
        <input
          type="text"
          name="staffName"
          value={staffName}
          required
          onChange={handleNameChange}
        />

        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleEmailChange}
        />

        <label htmlFor="Password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={handlePasswordChange}
        />

        <button type="Submit">SUBMIT</button>
      </form>
      {/* to see state in action: */}
      <p>Name:{staffName}</p>
      <p>Email:{email}</p>
      <p>Password:{password}</p>
    </>
  );
}
