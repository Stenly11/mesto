import { initialCards } from "./constants.js";
import Card from "./Card.js";

const profilePopup = document.querySelector(".popup_type_profile"); // переменная попапа профиля
const buttonEdit = document.querySelector(".profile__button_type_edit"); // переменная - кнопка редактирования профиля
const closeButtons = document.querySelectorAll(".popup__close-button"); // переменная - кнопки закрытия попапов
const nameInput = document.querySelector(".popup__input_type_name"); // переменная ввода имени
const hobbyInput = document.querySelector(".popup__input_type_hobby"); // переменная ввода хобби
const nameInProfile = document.querySelector(".profile__name"); // переменная имени
const hobbyInProfile = document.querySelector(".profile__hobby"); // переменная хобби
const profileForm = document.forms["profile edit"]; // переменная формы профиля(по имени формы)
const popups = document.querySelectorAll(".popup"); // переменная всех попапов

buttonEdit.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = nameInProfile.textContent;
  hobbyInput.value = hobbyInProfile.textContent;
  resetError(profilePopup, config);
});

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// Закрытие попапов кликом на оверлей
popups.forEach((element) => {
  const popup = element.closest(".popup");
  element.addEventListener("mousedown", (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

// Закрытие попапов нажатием на Esc
function closePopupEscapeKey(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscapeKey);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscapeKey);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  hobbyInProfile.textContent = hobbyInput.value;
  closePopup(profilePopup);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
// 5 ПР
const buttonAddCard = document.querySelector(".profile__button_type_add"); // переменная - кнопкa добавления карточек
const popupAddCard = document.querySelector(".popup_type_add-card"); // переменная попапа добавления карточек

buttonAddCard.addEventListener("click", function () {
  openPopup(popupAddCard);
  newCardForm.reset();
  resetError(popupAddCard, config);
});

const cards = document.querySelector(".cards");

initialCards.forEach((item) => {
  const card = new Card(item, "#cardTemplate",openPopupZoomImage);
  cards.append(card.generateCard());
});

const newCardForm = document.forms["image edit"];
const linkCard = newCardForm.querySelector(".popup__input_type_link-img");
const nameCard = newCardForm.querySelector(".popup__input_type_name-img");
newCardForm.addEventListener("submit", handleNewCardFormSubmit);
function handleNewCardFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const card = new Card({name: nameCard.value, link: linkCard.value},"#cardTemplate",openPopupZoomImage);
  cards.prepend(card.generateCard());
  closePopup(popupAddCard);
  form.reset();
}

const imageZoom = document.querySelector(".popup_type_zoom-image");
const cardImagePopup = imageZoom.querySelector(".popup__image");
const cardImageCaption = imageZoom.querySelector(".popup__image-caption");

function openPopupZoomImage(name, link) {
  cardImagePopup.src = link;
  cardImageCaption.textContent = name;
  cardImagePopup.alt = name;
  openPopup(imageZoom);
}