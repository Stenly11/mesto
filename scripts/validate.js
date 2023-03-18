const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};

const showError = (input, validationConfig, form, messageError) => {
  const textError = form.querySelector(`.${input.id}-error`);
  textError.textContent = messageError;
  textError.classList.add(validationConfig.errorClass);
  input.classList.add(validationConfig.inputErrorClass);
};

const hideError = (input, validationConfig, form) => {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.remove(validationConfig.inputErrorClass);
  textError.classList.remove(validationConfig.errorClass);
  textError.textContent = '';
};

const hasInvalidInput = (inputs) => {
  return inputs.some((itemElement) => {
    return !itemElement.validity.valid;
  });
};

const resetError = (form, validationConfig) => {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  const submitButton = form.querySelector(validationConfig.submitButtonSelector);
  inputList.forEach((input) => hideError(input, validationConfig, form));
  toggleButtonState(submitButton, validationConfig, inputList);
};

const disableButton = (submitButton, validationConfig) => {
  submitButton.classList.remove(validationConfig.inactiveButtonClass);
  submitButton.disabled = false;
};

const enableButton = (submitButton, validationConfig) => {
  submitButton.classList.add(validationConfig.inactiveButtonClass);
  submitButton.disabled = true;
};

const toggleButtonState = (submitButton, validationConfig, inputList) => {
  if (hasInvalidInput(inputList)) {
    enableButton(submitButton, validationConfig);
  } else {
    disableButton(submitButton, validationConfig);
  }
};

// Проверяем правильность ввода
const checkInputValidity = (input, validationConfig, form) => {
  if (!input.validity.valid) {
    showError(input, validationConfig, form, input.validationMessage);
  } else {
    hideError(input, validationConfig, form);
  }
};

const setEventListeners = (formList, validationConfig) => {
  const inputList = Array.from(formList.querySelectorAll(validationConfig.inputSelector));
  const submitButton = formList.querySelector(validationConfig.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, validationConfig, formList);
      toggleButtonState(submitButton, validationConfig, inputList);
    });
  });
};

const enableValidation = (validationConfig) => {
  const formList = document.querySelectorAll(validationConfig.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, validationConfig);
  });
};
enableValidation(config);
