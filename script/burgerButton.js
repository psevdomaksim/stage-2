const burgerBtn = document.getElementById("hamburger_button");
const burger = document.getElementById("burger");

const brg_line_1 = document.getElementById("brg_line_1");
const brg_line_2 = document.getElementById("brg_line_2");
const brg_line_3 = document.getElementById("brg_line_3");

const toggleBurgerButton = () => {

  if (burger.style.visibility == "visible") {
    burger.style.visibility = "hidden";
    burger.style.top = "-740px";

    burgerBtn.style.color = "#191e1e";
    burgerBtn.style.transform = "none";

    brg_line_1.style.transform = "none";
    brg_line_2.style.transform = "none";
    brg_line_3.style.transform = "none";
  } else {
    burger.style.visibility = "visible";
    burger.style.top = "0";
    
    burgerBtn.style.color = "white";
    burgerBtn.style.transform = "rotate(-90deg)";

    brg_line_1.style.transform = "rotate(-45deg) translate(-4.93px, 4.93px)";
    brg_line_2.style.transform = "scaleX(0)";
    brg_line_3.style.transform = "rotate(45deg) translate(-4.93px, -4.93px)";
  }
};




const toggleBurgerDropdown = function (arrowId, dropdownId) {
  const burgerArrow = document.getElementById(arrowId);
  const burgerDropdown = document.getElementById(dropdownId);

  if (burgerDropdown.style.display == "block") {
    burgerDropdown.style.display = "none";
    burgerArrow.style.transform = "rotate(45deg) translate(-5px,5px) scale(1)";
  } else {
    burgerDropdown.style.display = "block";
    burgerArrow.style.transform = "rotate(45deg) translate(5px, 15px) scale(-1)";
  }
}