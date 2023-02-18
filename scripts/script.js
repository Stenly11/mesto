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
})

buttonClose.addEventListener('click', function () {
  closePopup(popup);
  })

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  hobbyInProfile.textContent = hobbyInput.value;
  closePopup(popup);
}

formElement.addEventListener('submit', formSubmitHandler);