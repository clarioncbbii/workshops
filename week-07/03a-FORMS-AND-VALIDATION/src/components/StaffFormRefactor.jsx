//! HOW DOES A FORM WORK IN REACT (CLIENT-SIDE)?

//We will use onSubmit to submit our form
//we add the event listener directly onto the form element and make an event handler function
//We will also need to prevent the default form behaviour

//To handle the form data, we need to store it in state --> React needs to know if that data is going to have any changes (because of the component lifecycle)

import { useState } from "react";

export default function StaffForm() {
  //* REFACTOR OF STATE:
  //STORE FORM DATA IN STATE
  //- one state for our form values
  const [formValues, setFormValues] = useState({
    staffName: "",
    email: "",
    password: "",
  });

  //* REFACTOR OF CHANGE FUNCTIONS:
  //HANDLE THE INPUT CHANGES --> we need to tell React when the changes in the data are happening, as they happen
  //event --> onChange
  //- use spread (...) operator to merge objects
  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
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
          value={formValues.staffName}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="Password">Password: </label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          required
          onChange={handleInputChange}
        />

        <button type="Submit">SUBMIT</button>
      </form>
      {/* to see state in action: */}
      <p>Name: {formValues.staffName}</p>
      <p>Email: {formValues.email}</p>
      <p>Password: {formValues.password}</p>
    </>
  );
}
