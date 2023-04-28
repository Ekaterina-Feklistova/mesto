//функция, которая добвляет класс с ошибкой
function inputShowErrorClass ({inputErrorClass, errorSpan}, input, errorElement) {
    input.classList.add(inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorSpan);
};

//функция, которая убирает класс с ошибкой
function inputHideErrorClass ({inputErrorClass, errorSpan}, input, errorElement) {
    input.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorSpan);
};

//функция, которая проверяет валидность поля
function checkedValidity ({inputErrorClass, errorSpan }, input) {
    const errorElement = document.querySelector(`#error-${input.id}`);
    
    if (! input.validity.valid){
        inputShowErrorClass({inputErrorClass, errorSpan}, input, errorElement);
    } else {
        inputHideErrorClass({inputErrorClass, errorSpan}, input, errorElement);
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
    const savedButton = form.querySelector(submitButtonSelector);
    
    if (form.checkValidity()){
        enableButton(inactiveButtonClass, savedButton);
    } else {
        disableButton(inactiveButtonClass, savedButton);
    };
};

function enableValidation({ formSelector, inputSelector, ...rest}) {
    const formsPopup = document.querySelectorAll(formSelector);
    const formsArray = Array.from(formsPopup);
    
    formsArray.forEach(function(form){
        //отключаем отправку для всех форм
        form.addEventListener('submit', function(evt){
            evt.preventDefault();
        });    
        
        form.addEventListener('reset', function(evt) {
            console.log(evt);
            validityButton(rest, form);
        })
        const inputs = form.querySelectorAll(inputSelector);
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
    errorClass: 'form__input-error_visible',
    errorSpan: 'form__input-error'
  }); 