const profilePopup = document.querySelector('.popup_type_profile'); // переменная попапа профиля
const buttonEdit = document.querySelector('.profile__button_type_edit'); // переменная - кнопка редактирования профиля
const closeButtons = document.querySelectorAll('.popup__close-button'); // переменная - кнопки закрытия попапов
const nameInput = document.querySelector('.popup__input_type_name'); // переменная ввода имени
const hobbyInput = document.querySelector('.popup__input_type_hobby'); // переменная ввода хобби
const nameInProfile = document.querySelector('.profile__name'); // переменная имени
const hobbyInProfile = document.querySelector('.profile__hobby'); // переменная хобби
const profileForm = document.forms['profile edit']; // переменная формы профиля(по имени формы)
const popups = document.querySelectorAll('.popup'); // переменная всех попапов

buttonEdit.addEventListener('click', function () {
  openPopup(profilePopup);
  nameInput.value = nameInProfile.textContent;
  hobbyInput.value = hobbyInProfile.textContent;
  resetError(profilePopup, config);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Закрытие попапов кликом на оверлей
popups.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

// Закрытие попапов нажатием на Esc
function closePopupEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscapeKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscapeKey);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  hobbyInProfile.textContent = hobbyInput.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);
// 5 ПР
const buttonAddCard = document.querySelector('.profile__button_type_add'); // переменная - кнопкa добавления карточек
const popupAddCard = document.querySelector('.popup_type_add-card'); // переменная попапа добавления карточек

buttonAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
  newCardForm.reset();
  resetError(popupAddCard, config);
});

const cards = document.querySelector('.cards');

function getCard(item) {
  const cardElement = document.querySelector('#cardTemplate').content.querySelector('.card');
  const card = cardElement.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  cardTitle.textContent = item.name;
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const buttonDeletCard = card.querySelector('.card__image-delet-button');
  buttonDeletCard.addEventListener('click', deleteCard);
  const buttonLike = card.querySelector(".card__like-button");
  buttonLike.addEventListener('click', аddLike);
  cardImage.addEventListener('click', function () {
    openPopupZoomImage(item);
  });
  return card;
}

function createCard(card) {
  //Функция создания новой карточки
  const newCard = getCard(card);
  cards.prepend(newCard);
}

initialCards.forEach(createCard);

function deleteCard(event) {
  const button = event.target;
  const card = button.closest('.card');
  card.remove();
}

function аddLike(event) {
  const button = event.target;
  button.classList.toggle('card__like-button_type_active');
}

const newCardForm = document.forms['image edit'];
const linkCard = newCardForm.querySelector('.popup__input_type_link-img');
const nameCard = newCardForm.querySelector('.popup__input_type_name-img');
newCardForm.addEventListener('submit', handleNewCardFormSubmit);
function handleNewCardFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const link = linkCard.value;
  const name = nameCard.value;
  const card = { name, link };
  createCard(card);
  closePopup(popupAddCard);
  form.reset();
}

const imageZoom = document.querySelector('.popup_type_zoom-image');
const cardImagePopup = imageZoom.querySelector('.popup__image');
const cardImageCaption = imageZoom.querySelector('.popup__image-caption');

function openPopupZoomImage(element) {
  cardImagePopup.src = element.link;
  cardImageCaption.textContent = element.name;
  cardImagePopup.alt = element.name;
  openPopup(imageZoom);
}
