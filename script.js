/*let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button_type_edit');
let buttonClose = document.querySelector('.popup__close-button');
let getName = document.querySelector('.profile__name');
let getHobby = document.querySelector('.profile__hobby');
let formEdit = document.querySelector('.popup__container');

function openPopup () {
  popup.classList.add ('.popup_opened');
}


function openPopup () {
  popup.classList.remove ('.popup_opened');
}*/


let editProfileButton = document.querySelector('.profile__button_type_edit');
editProfileButton.addEventListener('click', function () {
  let popup = document.querySelector('.popup');
  console.log(popup);
  popup.classList.add('popup_opened');
})

let editPopupCloseButton = document.querySelector('.popup__close-button');
editPopupCloseButton.addEventListener('click', function () {
  let popup = document.querySelector('.popup');
  console.log(popup);
  popup.classList.remove('popup_opened');
})

/*let formElement = // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
												// О том, как это делать, расскажем позже.

	// Находим поля формы в DOM
	let nameInput = // Воспользуйтесь инструментом .querySelector()
	let jobInput = // Воспользуйтесь инструментом .querySelector()

	// Получите значение полей из свойства value

	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);*/