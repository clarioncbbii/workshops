console.log("HAWAIYU!");

//TODO: Add event listener to the form that logs the form data to the console.

const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", handleSubmit); 

 function handleSubmit(submitEvent);
  const formData = new formData(userForm);
  console.log(formData);
}
