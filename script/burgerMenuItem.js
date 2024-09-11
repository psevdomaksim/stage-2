//filling burger wrapper
fillBurger = function (burgerItems) {
  const burgerWrapper = document.getElementById("burger_menu");

  burgerItems.forEach((el) => {
    const obj = new BurgerItemBuilder(el.id)
      .setHeader(el.id, el.header)
      .setDropdown(el.dropdownItems)
      .setArrowIcon(el.id)
      .build();

    //Dropdown content
    obj.getDropdownItems().forEach((el) => {
      el.li.append(el.a);
      obj.getDropdownWrapper().append(el.li);
    });

    obj.getHeader().append(obj.getArrowIcon());
    obj.getBurgerItem().append(obj.getHeader(), obj.getDropdownWrapper());

    burgerWrapper.append(obj.getBurgerItem());
  });
};

class BurgerMenuItem {
  constructor(burgerItem, header, arrowIcon, dropdownWrapper, dropdownItems) {
    this.burgerItem = burgerItem;
    this.header = header;
    this.arrowIcon = arrowIcon;
    this.dropdownWrapper = dropdownWrapper;
    this.dropdownItems = dropdownItems;
  }

  getBurgerItem() {
    return this.burgerItem;
  }

  getHeader() {
    return this.header;
  }

  getArrowIcon() {
    return this.arrowIcon;
  }

  getDropdownWrapper() {
    return this.dropdownWrapper;
  }

  getDropdownItems() {
    return this.dropdownItems;
  }
}

class BurgerItemBuilder {
  constructor(id) {
    this.burgerItem = document.createElement("li");

    this.dropdownWrapper = document.createElement("ul");
    this.dropdownWrapper.className = "burger-dropdown";
    this.dropdownWrapper.id = "burger-dropdown-" + id;
  }

  //Header
  setHeader(id, header) {
    this.header = document.createElement("span");
    this.header.className = "burger-navlink";
    this.header.id = "burger-navlink-" + id;
    this.header.innerText = header;
    return this;
  }

  //Arrow icon
  setArrowIcon(id) {
    this.arrowIcon = document.createElement("span");
    this.arrowIcon.className = "burger-arrow";
    this.arrowIcon.id = "burger-arrow-" + id;
    return this;
  }

  //Dropdown content
  setDropdown(dropdownItems) {
    this.dropdownItems = [...dropdownItems];
    this.dropdownItems.forEach((el) => {
      el.li = document.createElement("li");
      el.a = document.createElement("a");
      el.a.innerText = el.header;
      el.a.href = el.href;
    });

    return this;
  }

  build() {
    return new BurgerMenuItem(
      this.burgerItem,
      this.header,
      this.arrowIcon,
      this.dropdownWrapper,
      this.dropdownItems
    );
  }
}
