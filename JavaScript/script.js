const menu = document.querySelector(".mobileMenu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const btn = document.querySelector("#buttonFooter");
const devs = document.querySelector(".devs");

btn.addEventListener("click", function () {
  if (devs.style.display === "none") {
    devs.style.display = "block";
  } else {
    devs.style.display = "none";
  }
});
