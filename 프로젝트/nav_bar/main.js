const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

const btn = document.getElementsByClassName("form__button"),
  inId = document.getElementById("input-id"),
  inPass = document.getElementById("input-password");

btn.addEventListener("click", function () {
  if (inId == "") {
    alert("ID를 입력하세요.");
  } else if (inPass == "") {
    alert("password를 입력하세요.");
  }
});
