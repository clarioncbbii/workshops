function Form() {
  // this function is an event handler
  function handleSubmit() {
    console.log("I was cliqued.");
  }
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label htmlFor="email">Your email address:</label>
      <input type="text" id="email" required />
      <label htmlFor="password">Your password:</label>
      <input type="password" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

//! MISSING STEP: how to prevent default behaviour?
