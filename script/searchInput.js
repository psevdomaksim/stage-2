const cardsContainer = document.getElementById("cards");
const cardsItems = Array.from(document.getElementsByClassName("card"));
const searchInput = document.getElementById("search-input");

function filtercards() {
  const searchText = searchInput.value.toLowerCase();
  if (!searchText) {
    cardsItems.forEach((item) => (item.style.visibility = "visible"));
    return;
  }

  let matches = 0;

  cardsItems.forEach((item) => {
    const title = item.querySelector(".card-title").textContent.toLowerCase();
    const description = item
      .querySelector(".card-description")
      .textContent.toLowerCase();

    if (title.includes(searchText) || description.includes(searchText)) {
      item.style.visibility = "visible";
      matches++;
    } else {
      item.style.visibility = "hidden";
    }
  });

  if (matches === 0) {
    cardsContainer.innerHTML = '<div class="no-results">No results</div>';
  } else {
    cardsContainer.innerHTML = "";
    cardsItems.forEach((item) => {
      if (item.style.visibility === "visible") {
        cardsContainer.appendChild(item);
      }
    });
  }
}

function handleSearch() {
  let debounceTimeout;
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    filtercards();
  }, 300);
}

searchInput.addEventListener("input", handleSearch);
