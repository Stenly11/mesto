let popup = document.querySelector(".popup"); // переменная попапа
let buttonEdit = document.querySelector(".profile__button_type_edit"); // переменная - кнопка редактирования профиля
let buttonClose = document.querySelectorAll(".popup__close-button"); // переменная - кнопка закрытия попапа
let nameInput = document.querySelector(".popup__input_type_name"); // переменная ввода имени
let hobbyInput = document.querySelector(".popup__input_type_hobby"); // переменная ввода хобби
let nameInProfile = document.querySelector(".profile__name"); // переменная имени
let hobbyInProfile = document.querySelector(".profile__hobby"); // переменная хобби
let formElement = document.querySelector(".popup__form"); // переменная формы

buttonEdit.addEventListener("click", function () {
  openPopup(popup);
  nameInput.value = nameInProfile.textContent;
  hobbyInput.value = hobbyInProfile.textContent;
});

buttonClose.forEach(function (button) {
  button.addEventListener("click", () => {
    closePopup(popup);
    closePopup(popupAddCard);
    closePopup(imageZoom);
  });
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  hobbyInProfile.textContent = hobbyInput.value;
  closePopup(popup);
}

formElement.addEventListener("submit", formSubmitHandler);
// 5 ПР
let buttonAdd = document.querySelector(".profile__button_type_add"); // переменная - кнопкa добавления карточек
let popupAddCard = document.querySelector(".popup_type_add-card"); // переменная попапа добавления карточек

buttonAdd.addEventListener("click", function () {
  openPopup(popupAddCard);
});

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://images.unsplash.com/photo-1665073140507-0bad3d962476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Сахалин",
    link: "https://images.unsplash.com/photo-1662953748980-f8adec7fdf6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
];

const cards = document.querySelector(".cards");

function createCard(card) {
  const newCard = document.querySelector("#cardTemplate").content.cloneNode(true);
  const cardTitle = newCard.querySelector(".card__title");
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector(".card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cards.prepend(newCard);
  cardImage.addEventListener("click", function () {
    openPopupZoomImage(card);
  });
}

initialCards.forEach(createCard);

const form = popupAddCard.querySelector(".popup__form");
form.addEventListener("submit", formSubmitHandlerImg);
function formSubmitHandlerImg(event) {
  event.preventDefault();
  const form = event.target;
  const link = form.querySelector(".popup__input_type_link-img").value;
  const name = form.querySelector(".popup__input_type_name-img").value;
  const card = { name, link };
  createCard(card);
  closePopup(popupAddCard);

  const buttonLike = document.querySelectorAll(".card__like-button"); // Кнопка добавления лайка
  buttonLike.forEach(function (button) {
    button.addEventListener("click", () => {
      button.classList.toggle("card__like-button_type_active");
    });
  });

  const buttonDeletCard = document.querySelectorAll(".card__image-delet-button"); // Кнопка удаления карточки
  buttonDeletCard.forEach(function (button) {
    button.addEventListener("click", deletingCard);
    function deletingCard(event) {
      const button = event.target;
      const card = button.closest(".card");
      card.remove();
    }
  });
}

const buttonLike = document.querySelectorAll(".card__like-button"); // Кнопка добавления лайка
buttonLike.forEach(function (button) {
  button.addEventListener("click", () => {
    button.classList.toggle("card__like-button_type_active");
  });
});

const buttonDeletCard = document.querySelectorAll(".card__image-delet-button"); // Кнопка удаления карточки
buttonDeletCard.forEach(function (button) {
  button.addEventListener("click", deletingCard);
  function deletingCard(event) {
    const button = event.target;
    const card = button.closest(".card");
    card.remove();
  }
});

let imageZoom = document.querySelector(".popup_type_zoom-image");
let cardImagePopup = document.querySelector(".popup__image");
let cardImageCaption = document.querySelector(".popup__image-caption");

let cardImageOne = document.querySelector(".card__image");
let cardTitle = document.querySelector(".card__title");

function openPopupZoomImage(element) {
  cardImagePopup.src = element.link;
  cardImageCaption.textContent = element.name;
  cardImagePopup.alt = element.name;
  openPopup(imageZoom);
}

/*function openPopupZoomImageHtml(element) {
  cardImagePopup.src = element.cardImageOne;
  cardImageCaption.textContent = element.cardTitle;
  cardImagePopup.alt = element.cardTitle;
  openPopup(imageZoom);
}
cardImageOne.addEventListener("click", function () {
  openPopupZoomImageHtml(cardImageOne);
});
cards.forEach(openPopupZoomImageHtml);*/
//openPopupZoomImageHtml(cardImageOne);

/*const form = popupAddCard.querySelector('.popup__form')
console.log(form)
form.addEventListener('submit', formSubmitHandler);
function formSubmitHandler(event){
  event.preventDefault()
  const form = event.target
  const link = form.querySelector('.popup__input_type_link-img').value
  const name = form.querySelector('.popup__input_type_name-img').value
  const card = {name, link};
  createCard(card)
  closePopup(popupAddCard);
}*/
