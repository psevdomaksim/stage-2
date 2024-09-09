class BurgerMenuItems {
  constructor() {
    if (BurgerMenuItems._instance) {
      return BurgerMenuItems._instance;
    }

    BurgerMenuItems._instance = this;
    this.burgerWrapper = document.getElementById("burger_menu");
  }

  //filling burger wrapper
  fillBurger = function (burgerItems) {
    for (let i = 0; i < burgerItems.length; i++) {
      const obj = new BurgerMenuItem(
        burgerItems[i].id,
        burgerItems[i].linkHeader,
        burgerItems[i].dropdownItems
      );

      //dropdown content
      for (let i = 0; i < obj.dropdownItems.length; i++) {
        obj.dropdownItems[i].li.append(obj.dropdownItems[i].a);
        obj.dropdownWrapper.append(obj.dropdownItems[i].li);
      }

      obj.header.append(obj.arrowIcon);
      obj.burgerItem.append(obj.header, obj.dropdownWrapper);

      this.burgerWrapper.append(obj.burgerItem);
    }
  };
}

class BurgerMenuItem {
  constructor(id, header, dropdownItems) {
    this.burgerItem = document.createElement("li");

    this.header = document.createElement("span");
    this.header.className = "burger-navlink";
    this.header.id = "burger-navlink-" + id;
    this.header.innerText = header;

    this.arrowIcon = document.createElement("span");
    this.arrowIcon.className = "burger-arrow";
    this.arrowIcon.id = "burger-arrow-" + id;

    this.dropdownWrapper = document.createElement("ul");
    this.dropdownWrapper.className = "burger-dropdown";
    this.dropdownWrapper.id = "burger-dropdown-" + id;

    //filling dropdown content

    this.dropdownItems = [...dropdownItems];

    for (let i = 0; i < dropdownItems.length; i++) {
      this.dropdownItems[i].li = document.createElement("li");
      this.dropdownItems[i].a = document.createElement("a");
      this.dropdownItems[i].a.innerText = this.dropdownItems[i].header;
      this.dropdownItems[i].a.href = this.dropdownItems[i].href;
    }
  }
}
