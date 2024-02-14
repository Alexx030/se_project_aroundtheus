export default class Card {
  constructor({ name, link }, cardSelector, cardImageEl) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._cardImageEl = cardImageEl;
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._likeButton();
      });
    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._deleteButton();
      });
    //".card__image"
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._cardImageEl();
      });
  }

  _likeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _deleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _cardImageEl() {
    this._cardElement.querySelector(".card__image");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    // get the card view
    // set event listeners
    this._setEventListeners();
    // return the card
    return this._cardElement;
  }
}
