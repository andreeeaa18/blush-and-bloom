$(document).ready(() => {
  $(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: `<svg style="
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    left: 5px;
    cursor: pointer"  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>`,
    nextArrow: `<svg style="
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%);
    z-index: 1000;
    right: 5px;
    cursor: pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></>`,
  });
});

const formOutput = document.getElementById("form-output");
const submitBtn = document.querySelector(".submit-btn");
const profileBtns = document.querySelectorAll(".profile-link");
const displayedProfileDiv = document.querySelector(".profile-div");

let localSaved;
let showProfile = false;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  formOutput.textContent = "Îți mulțumim pentru feedback!";
  submitBtn.style.display = "none";
});

const goToRegister = () => {
  window.location.replace("/pages/register/register.html");
};

document.querySelector(".menu-toggle").addEventListener("click", () => {
  displayedProfileDiv.style.display = "none";
});

profileBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("here");

    const userData = JSON.parse(localStorage.getItem("userData"));
    showProfile = !showProfile;

    if (showProfile) {
      displayedProfileDiv.style.display = "flex";

      if (userData) {
        displayedProfileDiv.innerHTML = `
        <div class="profile-info">
          <p>${userData.name}</p>
          <p>${userData.email}</p>
          <button id='log-out-btn' onclick="logOutFunc()">Log out</button>
        </div>
      `;
      } else {
        displayedProfileDiv.innerHTML = `
        <div class="profile-info">
          <button id='log-out-btn' onclick="goToRegister()">Înregistrează-te</button>
        </div>
      `;
      }
    } else {
      displayedProfileDiv.style.display = "none";
    }
  });
});

const logOutFunc = () => {
  localStorage.clear();
  displayedProfileDiv.innerHTML = displayedProfileDiv.innerHTML = `
          <div class="profile-info">
          <p id="empty-profile">Ai făcut log out cu succes!</p>
          </div>
          `;

  setTimeout(() => {
    displayedProfileDiv.style.display = "none";
  }, 3000);
};
