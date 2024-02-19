document.addEventListener("DOMContentLoaded", function () {
  const year2021Button = document.getElementById("2021");
  const year2022Button = document.getElementById("2022");
  const year2023Button = document.getElementById("2023");
  const year2024Button = document.getElementById("2024");

  const dwaJedenSeason = document.querySelector(".wrapper-jeden");
  const dwaDwaSeason = document.querySelector(".wrapper-dwa");
  const dwaTrzySeason = document.querySelector(".wrapper-trzy");
  const dwaCzterySeason = document.querySelector(".wrapper-cztery");

  year2024Button.addEventListener("click", function () {
    dwaDwaSeason.style.display = "none";
    dwaJedenSeason.style.display = "none";
    dwaTrzySeason.style.display = "none";
    dwaCzterySeason.style.display = "block";
    year2021Button.classList.remove("active");
    year2022Button.classList.remove("active");
    year2024Button.classList.add("active");
    year2023Button.classList.remove("active");
  });

  year2023Button.addEventListener("click", function () {
    dwaDwaSeason.style.display = "none";
    dwaJedenSeason.style.display = "none";
    dwaTrzySeason.style.display = "block";
    dwaCzterySeason.style.display = "none";
    year2021Button.classList.remove("active");
    year2022Button.classList.remove("active");
    year2024Button.classList.remove("active");
    year2023Button.classList.add("active");
  });

  year2022Button.addEventListener("click", function () {
    dwaDwaSeason.style.display = "block";
    dwaJedenSeason.style.display = "none";
    dwaTrzySeason.style.display = "none";
    dwaCzterySeason.style.display = "none";
    year2021Button.classList.remove("active");
    year2022Button.classList.add("active");
    year2024Button.classList.remove("active");
    year2023Button.classList.remove("active");
  });

  year2021Button.addEventListener("click", function () {
    dwaDwaSeason.style.display = "none";
    dwaJedenSeason.style.display = "block";
    dwaTrzySeason.style.display = "none";
    dwaCzterySeason.style.display = "none";
    year2021Button.classList.add("active");
    year2022Button.classList.remove("active");
    year2023Button.classList.remove("active");
    year2024Button.classList.remove("active");
  });
});
function commingSoon() {
  alert("Comming Soon");
}
function darkMode() {
  const buttonElement = document.querySelector(".home-a");
  const navbarElement = document.querySelector(".navbar");
  const toggleButtonBars = document.querySelectorAll(".toggle-button .bar");

  if (buttonElement.innerText === "Light Mode") {
    buttonElement.innerText = "Dark Mode";
    navbarElement.classList.remove("navbar-Light-Mode");
    toggleButtonBars.forEach((bar) => (bar.style.backgroundColor = "#333"));
  } else {
    buttonElement.innerText = "Light Mode";
    navbarElement.classList.add("navbar-Light-Mode");
    toggleButtonBars.forEach((bar) => (bar.style.backgroundColor = "white")); // Ustaw kolor odpowiedni dla light mode
  }

  const element = document.body;
  element.classList.toggle("Light-Mode");
}
