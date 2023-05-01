//функция, которая добвляет класс с ошибкой
function showInputError ({inputErrorClass, errorSpan}, input, errorElement) {
    input.classList.add(inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorSpan);
};

//функция, которая убирает класс с ошибкой
function hideInputError ({inputErrorClass, errorSpan}, input, errorElement) {
    input.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorSpan);
};

//функция, которая проверяет валидность поля
function checkValidity ({inputErrorClass, errorSpan }, input) {
    const errorElement = document.querySelector(`#error-${input.id}`);
    
    if (! input.validity.valid){
        showInputError({inputErrorClass, errorSpan}, input, errorElement);
    } else {
        hideInputError({inputErrorClass, errorSpan}, input, errorElement);
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
function validityButton({ inactiveButtonClass}, form, savedButton){
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
        
        //очистка формы
        const savedButton = form.querySelector(rest.submitButtonSelector);
        form.addEventListener('reset', function(evt) {
            disableButton(rest.inactiveButtonClass, savedButton);
        });

        const inputs = form.querySelectorAll(inputSelector);
        const inputsArray = Array.from(inputs);
        inputsArray.forEach(function(input){
            input.addEventListener('input', () => {
                checkValidity(rest, input);
                //кнопка
                validityButton(rest, form, savedButton);
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