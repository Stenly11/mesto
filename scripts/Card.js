export default class Card {
  constructor(data, templateSelector, handleCardImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardImageClick = handleCardImageClick;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // Добавим данные
    this._buttonLike = this._element.querySelector(".card__like-button");
    this._buttonDeletCard = this._element.querySelector(".card__image-delet-button");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardImage.addEventListener("click", () => {this._handleCardImageClick(this._name, this._link);});

    this._setEventListeners(); // добавим обработчики

    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleLikeClick();
    });
    this._buttonDeletCard.addEventListener("click", () => {
      this._handleButtonDeleteClick();
    });
  }

  _handleLikeClick() {
    this._buttonLike.classList.toggle("card__like-button_type_active");
  }

  _handleButtonDeleteClick() {
    this._element.remove();
  }
}