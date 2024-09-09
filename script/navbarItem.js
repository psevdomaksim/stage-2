class NavbarItems {
  constructor() {
    if (NavbarItems._instance) {
      return NavbarItems._instance;
    }

    NavbarItems._instance = this;
    this.navbarWrapper = document.getElementById("nav-list");
  }

  //filling navbar wrapper
  fillNavbar = function (navbarItems) {
    for (let i = 0; i < navbarItems.length; i++) {
      const obj = new NavbarItem(
        navbarItems[i].id,
        navbarItems[i].linkHeader,
        navbarItems[i].dropdownItems
      );

      //dropdown content
      for (let i = 0; i < obj.dropdownItems.length; i++) {
        obj.dropdownItems[i].li.append(obj.dropdownItems[i].a);
        obj.dropdownWrapper.append(obj.dropdownItems[i].li);
      }
      //append link header and dropdown
      obj.navbarItem.append(obj.header, obj.dropdownWrapper);
      this.navbarWrapper.append(obj.navbarItem);
    }
  };
}

class NavbarItem {
  constructor(id, header, dropdownItems) {
    //navbar
    this.navbarItem = document.createElement("li");
    this.navbarItem.id = id;

    this.header = document.createElement("span");
    this.header.className = "nav-link";
    this.header.innerText = header;

    this.dropdownWrapper = document.createElement("ul");
    this.dropdownWrapper.className = "dropdown-content";

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
