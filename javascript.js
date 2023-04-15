let login_form = document.getElementById("login_form");

login_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    message.value == ""
  ) {
    alert("One of the section is not filled out!");
  } else {
    alert("This form has been successfully submitted!");
  }
});
