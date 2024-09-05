const burgerBtn = document.getElementById("hamburger_button");
const burgerMenu = document.getElementById("burger_menu");
burgerBtn.onclick = () => {
  console.log(burgerMenu.style);

  if (burgerMenu.style.visibility == "visible") {
    burgerMenu.style.visibility = "hidden";
  } else {
    burgerMenu.style.visibility = "visible";
  }
};
