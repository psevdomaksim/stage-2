burgerBtn.onclick = toggleBurgerButton;

fillCards(cards);
fillNavbar(navbarItems);
fillBurger(navbarItems);

//adding event listeners on burger dropdowns
const burgerNavlinkElements = document.getElementsByClassName("burger-navlink");
const burgerArrowElements = document.getElementsByClassName("burger-arrow");
const burgerDropdownElements =
  document.getElementsByClassName("burger-dropdown");

for (let i = 0; i < burgerNavlinkElements.length; i++) {
  burgerNavlinkElements[i].onclick = () =>
    toggleBurgerDropdown(
      burgerArrowElements[i].getAttribute("id"),
      burgerDropdownElements[i].getAttribute("id")
    );
}




