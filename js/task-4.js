const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = {};

  for (let [name, value] of formData) {
    formValues[name] = value.trim();
  }

  if (!formValues.email || !formValues.password) {
    alert("All form fields must be filled in");
  } else {
    console.log(formValues);
    loginForm.reset();
  }
});
