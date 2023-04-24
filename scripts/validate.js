//функция, которая добвляет класс с ошибкой
function inputShowErrorClass ({inputErrorClass}, input, errorElement) {
    input.classList.add(inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add('form__input-error');
};

//функция, которая убирает класс с ошибкой
function inputHideErrorClass ({inputErrorClass}, input, errorElement) {
    input.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error');
};

//функция, которая проверяет валидность поля
function checkedValidity ({ inputErrorClass }, input) {
    const errorElement = document.querySelector(`#error-${input.id}`);
    
    if (! input.validity.valid){
        inputShowErrorClass(inputErrorClass, input, errorElement);
    } else {
        inputHideErrorClass(inputErrorClass, input, errorElement);
    };
};

//функция для скрывания кнопки
function disableButton(inactiveButtonClass, button){
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass);
    
};

//функция показа кнопки
function enableButton(inactiveButtonClass, button){
    button.removeAttribute('disabled');
    button.classList.remove(inactiveButtonClass);
};

//функция проверки показа или скрытия кнопки
function validityButton({ submitButtonSelector, inactiveButtonClass}, form){
    const savedButton = document.querySelector(submitButtonSelector);
    console.log(form);
    if (form.checkValidity()){
        enableButton(inactiveButtonClass, savedButton);
    } else {
        disableButton(inactiveButtonClass, savedButton);
    };
};

function enableValidation({ formSelector, inputSelector, ...rest}) {
    const forms = document.querySelectorAll(formSelector);
    const formsArray = Array.from(forms);
    formsArray.forEach(function(form){
        //отключаем отправку для всех форм
        form.addEventListener('submit', function(evt){
            evt.preventDefault();
        });
        /*validityButton(rest, form);*/
    
    
        const inputs = document.querySelectorAll(inputSelector);
        console.log(inputs);
        const inputsArray = Array.from(inputs);
        inputsArray.forEach(function(input){
            input.addEventListener('input', () => {
                checkedValidity(rest, input);
                //кнопка
                validityButton(rest, form);
            });
        });
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_add',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error_visible'
  }); 