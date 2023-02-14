let popup = document.querySelector('.popup'); // переменая попапа
let buttonEdit = document.querySelector('.profile__button_type_edit'); // переменая - кнопка редактирования профиля
let buttonClose = document.querySelector('.popup__close-button'); // переменая - кнопка закрытия попапа
let nameInput = document.querySelector('.popup__input_type_name'); // переменая ввода имени
let jobInput = document.querySelector('.popup__input_type_hobby'); // переменная ввода хобби
let getName = document.querySelector('.profile__name'); // переменая имени
let getHobby = document.querySelector('.profile__hobby'); // переменая хобби
let formElement = document.querySelector('.popup__form'); // переменая формы
let formSave = document.querySelector('popup__save-button'); // пкременая - кнопка сохранить значения имени и хобби

buttonEdit.addEventListener('click', function () {
  console.log(popup);
  popup.classList.add('popup_opened');
})

buttonClose.addEventListener('click', function () {
  console.log(popup);
  popup.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
	evt.preventDefault();
	nameInput.value = getName.textContent;
	jobInput.value = getHobby.textContent;

  
	formSave.addEventListener('click', function () {
		getName.insertAdjacentText('afterbegin', nameInput.value);
	  getHobby.insertAdjacentText('afterbegin', jobInput.value);
		popup.classList.remove('popup_opened');
	})

	// Получите значение полей из свойства value

	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);