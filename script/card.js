//Filling cards wrapper
fillCards = function (cards) {
  const cardsWrapper = document.getElementById("cards");
  cards.forEach((el) => {
    const obj = new CardBuilder(el.id)
      .setImage(el.header, el.src)
      .setDescriptionHeader(el.header)
      .setDescriptionText(el.description)
      .build();

    obj
      .getCardDescription()
      .append(obj.getDescriptionHeader(), obj.getDescriptionParagraph());
    obj.getCard().append(obj.getCardImage(), obj.getCardDescription());
    cardsWrapper.append(obj.getCard());
  });
};

class Card {
  constructor(
    card,
    image,
    cardDescription,
    descriptionHeader,
    descriptionParagraph
  ) {
    this.card = card;
    this.cardImage = image;
    this.cardDescription = cardDescription;
    this.descriptionHeader = descriptionHeader;
    this.descriptionParagraph = descriptionParagraph;
  }

  getCard() {
    return this.card;
  }

  getCardImage() {
    return this.cardImage;
  }

  getCardDescription() {
    return this.cardDescription;
  }

  getDescriptionHeader() {
    return this.descriptionHeader;
  }

  getDescriptionParagraph() {
    return this.descriptionParagraph;
  }
}

class CardBuilder {
  constructor(id) {
    //Card
    this.card = document.createElement("div");
    this.card.className = "card";
    this.card.id = "card-" + id;

    //Description container
    this.cardDescription = document.createElement("div");
    this.cardDescription.className = "card-description";
  }

  //Image
  setImage(alt, src) {
    this.image = document.createElement("img");
    this.image.alt = alt;
    this.image.src = src;
    return this;
  }

  //Description header
  setDescriptionHeader(header) {
    this.descriptionHeader = document.createElement("h1");
    this.descriptionHeader.className = "card-title";
    this.descriptionHeader.innerText = header;

    return this;
  }
  //Description text
  setDescriptionText(description) {
    this.descriptionParagraph = document.createElement("p");
    this.descriptionParagraph.className = "card-paragraph";
    this.descriptionParagraph.innerText = description;

    return this;
  }

  build() {
    return new Card(
      this.card,
      this.image,
      this.cardDescription,
      this.descriptionHeader,
      this.descriptionParagraph
    );
  }
}
