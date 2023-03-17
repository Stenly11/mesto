const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};

const showError = (input, object, form, messageError) => {
  const textError = form.querySelector(`.${input.id}-error`);
  textError.textContent = messageError;
  textError.classList.add(object.errorClass);
  input.classList.add(object.inputErrorClass);
};

const hideError = (input, object, form) => {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.remove(object.inputErrorClass);
  textError.classList.remove(object.errorClass);
  textError.textContent = '';
};

const hasInvalidInput = (inputs) => {
  return inputs.some((itemElement) => {
    return !itemElement.validity.valid;
  });
};

const resetError = (form, object) => {
  const inputList = Array.from(form.querySelectorAll(object.inputSelector));
  const submitButton = form.querySelector(object.submitButtonSelector);
  inputList.forEach((input) => hideError(input, object, form));
  toggleButtonState(submitButton, object, inputList);
};

const disableButton = (submitButton, object) => {
  submitButton.classList.remove(object.inactiveButtonClass);
  submitButton.disabled = false;
};

const enableButton = (submitButton, object) => {
  submitButton.classList.add(object.inactiveButtonClass);
  submitButton.disabled = true;
};

const toggleButtonState = (submitButton, object, inputList) => {
  if (hasInvalidInput(inputList)) {
    enableButton(submitButton, object);
  } else {
    disableButton(submitButton, object);
  }
};

// Проверяем правильность ввода
const checkInputValidity = (input, object, form) => {
  if (!input.validity.valid) {
    showError(input, object, form, input.validationMessage);
  } else {
    hideError(input, object, form);
  }
};

const setEventListeners = (formList, object) => {
  const inputList = Array.from(formList.querySelectorAll(object.inputSelector));
  const submitButton = formList.querySelector(object.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, object, formList);
      toggleButtonState(submitButton, object, inputList);
    });
  });
};

const enableValidation = (object) => {
  const formList = document.querySelectorAll(object.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, object);
  });
};
enableValidation(config);
