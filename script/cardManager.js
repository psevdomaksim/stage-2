class Cards {
  constructor() {
    if (Cards._instance) {
      return Cards._instance;
    }

    Cards._instance = this;
    this.cardsWrapper = document.getElementById("cards");
  }

  //filling cards wrapper
  fillCards = function (cards) {
    for (let i = 0; i < cards.length; i++) {
      const obj = new CardManager(
        cards[i].id,
        cards[i].src,
        cards[i].header,
        cards[i].description
      );
      obj.cardDescription.append(
        obj.descriptionHeader,
        obj.descriptionParagraph
      );
      obj.card.append(obj.cardImage, obj.cardDescription);
      this.cardsWrapper.append(obj.card);
    }
  };
}

class CardManager {
  constructor(id, src, header, description) {
    //card
    this.card = document.createElement("div");
    this.card.className = "card";
    this.card.id = id;

    //------------card info--------

    //image
    this.cardImage = document.createElement("img");
    this.cardImage.alt = header;
    this.cardImage.src = src;

    //description container
    this.cardDescription = document.createElement("div");
    this.cardDescription.className = "card-description";

    //description header
    this.descriptionHeader = document.createElement("h1");
    this.descriptionHeader.innerText = header;

    //description paragraph
    this.descriptionParagraph = document.createElement("p");
    this.descriptionParagraph.innerText = description;
  }
}
