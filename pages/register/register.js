const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const passwordInput = document.getElementById("password");
const form = document.getElementById("form");
const output = document.getElementById("div-form");
const formTitle = document.querySelector(".form-title");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const firstNameRegex = /^[A-Z][a-z]+(-[A-Z][a-z]+)*$/;
const lastNameRegex = /^([A-Z][a-z]+$)/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    emailRegex.test(emailInput.value) &&
    firstNameRegex.test(firstNameInput.value) &&
    lastNameRegex.test(lastNameInput.value) &&
    firstNameInput.value.length >= 1 &&
    lastNameInput.value.length >= 1 &&
    passwordInput.value.length >= 8
  ) {
    const userData = { name: firstNameInput.value, email: emailInput.value };
    localStorage.setItem("userData", JSON.stringify(userData));

    setTimeout(() => {
      window.location.replace("/index.html");
    }, 3000);

    formTitle.style.display = "none";
    form.innerHTML = "";
    output.innerHTML = `<span>Bine ai venit, ${firstNameInput.value}!</span>
    <img src="/assets/img/welcome-pic.png" id="welcome-pic" alt="Welcome"/>`;
  } else {
    emailInput.value = "";
    firstNameInput.value = "";
    lastNameInput.value = "";
    passwordInput.value = "";
    alert("Introdu valori valide!");
  }
});
