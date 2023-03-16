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
  })
});

// Закрытие попапов нажатием на Esc
popups.forEach((element) => {
  document.addEventListener('keydown', (evt) => {
  const popup = element.closest('.popup');
    if (evt.key === "Escape") {
      closePopup(popup); 
    }
 })
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1665073140507-0bad3d962476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Сахалин',
    link: 'https://images.unsplash.com/photo-1662953748980-f8adec7fdf6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  },
  {
    name: 'Владимир',
    link: './images/mesto/Vladimir.jpg',
  },
  {
    name: 'Ростов',
    link: './images/mesto/Rostov.jpg',
  },
  {
    name: 'Гора Эльбрус',
    link: './images/mesto/Gora_Elbrus.jpg',
  },
  {
    name: 'Домбай',
    link: './images/mesto/Dombai.jpg',
  },
  {
    name: 'Карачаевск',
    link: './images/mesto/Kara4aevsk.png',
  },
  {
    name: 'Байкал',
    link: './images/mesto/Baikal.jpg',
  },
];

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
  const buttonLike = card.querySelector('.card__like-button');
  buttonLike.addEventListener('click', аddLike);
  cardImage.addEventListener('click', function () {
    openPopupZoomImage(item);
  });
return card;
}

function createCard(card) {              //Функция создания новой карточки
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
newCardForm.addEventListener('submit', handleNewCardFormSubmit);
function handleNewCardFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const link = form.querySelector('.popup__input_type_link-img').value;
  const name = form.querySelector('.popup__input_type_name-img').value;
  const card = { name, link };
  createCard(card);
  closePopup(popupAddCard);
  form.reset();
}

const imageZoom = document.querySelector('.popup_type_zoom-image');
const cardImagePopup = document.querySelector('.popup__image');
const cardImageCaption = document.querySelector('.popup__image-caption');

function openPopupZoomImage(element) {
  cardImagePopup.src = element.link;
  cardImageCaption.textContent = element.name;
  cardImagePopup.alt = element.name;
  openPopup(imageZoom);
};


//Валидация форм


const showInterError = (errorTextElement, validationMessage, visibleErrorClass, ) => {
  //inputError.classList.add(inputErrorClass);
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(visibleErrorClass);


};

const hideInterError = (errorTextElement, visibleErrorClass, ) => {
  //inputError.classList.remove(inputErrorClass);
  errorTextElement.classList.remove(visibleErrorClass);
  errorTextElement.textContent = '';

};

const checkInputValidity = (input, errorClassTemplate, visibleErrorClass, inputErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input['name']}`);
  if (!input.validity.valid){
    showInterError(errorTextElement, input.validationMessage, visibleErrorClass, );
  }
  else {
    hideInterError(errorTextElement, );
  }

}

const setEventListeners = (formList, inputList, errorClassTemplate, visibleErrorClass, ) => {
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      console.log(form);
      evt.preventDefault();
    });
  });
  
  inputList.forEach((input) => {
    input.addEventListener('input',(e) => {
      checkInputValidity(input, errorClassTemplate, visibleErrorClass,);
      console.log(e.target.value);
    });
  });

}

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  const inputList = document.querySelectorAll(config.inputSelector);
  setEventListeners(formList, inputList, config.errorClassTemplate, config.visibleErrorClass, config.inputErrorClass, )


  };
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    visibleErrorClass: 'popup__input-error_visible',
    inputErrorClass: 'popup__input_type_error',
    
  });