console.log("HAWAIYU!");

//TODO: collect the user's data from the form
//select form element from the HTML
const staffForm = document.getElementById("staff-form");
console.log(staffForm);

//prevent values from being saved in the URL (prevent the default behaviour)
function handleStaffSubmit(event) {
  event.preventDefault();
  //FormData is a method inherent to JS - it creates an empty object for us to populate
  const formDataTemplate = new FormData(staffForm);
  //populate the object with our data --> values formValues
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  //TODO: send the data in a request to the server
  //we will use the url where our server is located --> e.g. http://localhost:8080/"desired-route"
  //we will use FETCH to connect our client with the server
  //MAKE SURE YOU ARE FETCHING the specific POST route within the server that will process the form data  - not the whole server!
  fetch("http://localhost:8080/new-staff", {
    method: "POST", //how are you sending the data? POST method bc we are CREATING new data (remember CRUD)
    headers: { "Content-Type": "application/json" }, //what type of data are you sending? application/json
    body: JSON.stringify({ formValues }), //bc the content (the body) is json, it must be stringified
  });
}

//submit is the final action on the form
staffForm.addEventListener("submit", handleStaffSubmit);

//**REMEMBER *// :
//! ALL THE CLIENT IS DOING IS SENDING A REQUEST TO THE SERVER, SO THE SERVER CAN DO THE ACTION OF CREATING THE NEW DATA ENTRY IN OUR DATA TABLE
//! THE CLIENT AND THE SERVER ARE TWO STRANGERS - UNCONNECTED DESPITE BEING IN THE SAME PLACE

//SIDENOTE:
//GET method is the browser's default behaviour, hence you rarely see the below syntax:
//
// fetch ("api.unsplash", {
// method: "GET",
// })
