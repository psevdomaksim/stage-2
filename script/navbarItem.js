//Filling navbar wrapper
fillNavbar = function (navbarItems) {
  const navbarWrapper = document.getElementById("nav-list");

  navbarItems.forEach((el) => {
    const obj = new NavnbarItemBuilder(el.id)
      .setHeader(el.header)
      .setDropdown(el.dropdownItems)
      .build();

    //Dropdown content
    obj.getDropdownItems().forEach((el) => {
      el.li.append(el.a);
      obj.getDropdownWrapper().append(el.li);
    });

    //Append link header and dropdown
    obj.getNavbarItem().append(obj.getHeader(), obj.getDropdownWrapper());
    navbarWrapper.append(obj.getNavbarItem());
  });
};

class NavbarItem {
  constructor(navbarItem, header, dropdownWrapper, dropdownItems) {
    this.navbarItem = navbarItem;
    this.header = header;
    this.dropdownWrapper = dropdownWrapper;
    this.dropdownItems = dropdownItems;
  }

  getNavbarItem() {
    return this.navbarItem;
  }

  getHeader() {
    return this.header;
  }

  getDropdownWrapper() {
    return this.dropdownWrapper;
  }

  getDropdownItems() {
    return this.dropdownItems;
  }
}

class NavnbarItemBuilder {
  constructor(id) {
    this.navbarItem = document.createElement("li");
    this.navbarItem.id = id;
    this.dropdownWrapper = document.createElement("ul");
    this.dropdownWrapper.className = "dropdown-content";
  }

  //Header
  setHeader(header) {
    this.header = document.createElement("span");
    this.header.className = "nav-link";
    this.header.innerText = header;
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
    return new NavbarItem(
      this.navbarItem,
      this.header,
      this.dropdownWrapper,
      this.dropdownItems
    );
  }
}
