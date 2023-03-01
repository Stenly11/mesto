let popup = document.querySelector('.popup'); // переменная попапа
let buttonEdit = document.querySelector('.profile__button_type_edit'); // переменная - кнопка редактирования профиля
let buttonClose = document.querySelector('.popup__close-button'); // переменная - кнопка закрытия попапа
let nameInput = document.querySelector('.popup__input_type_name'); // переменная ввода имени
let hobbyInput = document.querySelector('.popup__input_type_hobby'); // переменная ввода хобби
let nameInProfile = document.querySelector('.profile__name'); // переменная имени
let hobbyInProfile = document.querySelector('.profile__hobby'); // переменная хобби
let formElement = document.querySelector('.popup__form'); // переменная формы

buttonEdit.addEventListener('click', function () {
  openPopup(popup);
  nameInput.value = nameInProfile.textContent;
  hobbyInput.value = hobbyInProfile.textContent;
});

buttonClose.addEventListener('click', function () {
  closePopup(popup);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  hobbyInProfile.textContent = hobbyInput.value;
  closePopup(popup);
}

formElement.addEventListener('submit', formSubmitHandler);
// 5 ПР
let buttonAdd = document.querySelector('.profile__button_type_add'); // переменная - кнопкa добавления карточек
let popupAddCard = document.querySelector('.popup_type_add-card'); // переменная попапа добавления карточек
let buttonClosePopapCard = document.querySelector(".popup__close-button-card");

buttonAdd.addEventListener('click', function () {
  openPopup(popupAddCard);
});

buttonClosePopapCard.addEventListener('click', function () {
  closePopup(popupAddCard);
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
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Сахалин',
    link: 'https://images.unsplash.com/photo-1662953748980-f8adec7fdf6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  },
];


const cards = document.querySelector('.cards');

function createCard(card) {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardTitle = newCard.querySelector(".card__title");
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.card__image');
  //cardImage.addEventListener("click", zoomImage);
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  cards.append(newCard);
}

initialCards.forEach(createCard);

const buttonLike = document.querySelectorAll('.card__like-button'); // Кнопка добавления лайка
buttonLike.forEach (function (button) {                           // Переборка элементов и добавление слушителя событий к кнопке
  button.addEventListener('click', () => {
    button.classList.toggle('card__like-button_type_active');
  })
});

const buttonDeletCard = document.querySelectorAll('.card__image-delet-button'); // Кнопка удаления карточки
buttonDeletCard.forEach (function (button) {                   // Переборка элементов и добавление слушителя событий к кнопке
  button.addEventListener('click', deletingCard)
    function deletingCard(event) {                        //Функция, которая присваивает кнопке удаление карточки
      const button = event.target;
      const card = button.closest('.card');
      card.remove();
    }
});

/*function zoomImage(event) {
  event.target.classList.add("popup_opened")
}*/

/*function createCardOld(){
  let buttonDeletCardE = document.querySelectorAll(".card__image-delet-button");
  console.log(buttonDeletCardE);
  buttonDeletCardE.addEventListener("click",deletCardEl );
}


function deletCardEl(eventi) {
  eventi.classList.remove("card");
}

cards.forEach(createCardOld);

let buttonAdd = document.querySelector(".profile__button_type_add"); // переменная - кнопкa добавления карточек
let popupAddCard = document.querySelector(".popup_type_add-card"); // переменная попапа добавления карточек
let buttonClosePopapCard = document.querySelector(".popup__close-button-card");

buttonAdd.addEventListener("click", function () {
  openPopup(popupAddCard);
});

buttonClosePopapCard.addEventListener("click", function () {
  closePopup(popupAddCard);
});*/
