console.log("HAWAIYU!");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});
