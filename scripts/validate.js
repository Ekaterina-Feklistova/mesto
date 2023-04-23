//функция, которая добвляет класс с ошибкой
function inputShowErrorClass (input, errorElement) {
    input.classList.add('popup__input_type_error');
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add('form__input-error');
};

//функция, которая убирает класс с ошибкой
function inputHideErrorClass (input, errorElement) {
    input.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error');
};

//функция, которая проверяет валидность поля
function checkedValidity (input) {
    const errorElement = document.querySelector(`#error-${input.id}`);
    
    if (! input.validity.valid){
        inputShowErrorClass(input, errorElement);
    } else {
        inputHideErrorClass(input, errorElement);
    };
};

//функция для скрывания кнопки
function disableButton(button){
    button.setAttribute('disabled', '');
    button.classList.add('popup__submit_add');
};

//функция показа кнопки
function enableButton(button){
    button.removeAttribute('disabled');
    button.classList.remove('popup__submit_add');
};

//функция проверки показа или скрытия кнопки
function validityButton(form){
    const savedButton = document.querySelector('.popup__submit');
    if (form.checkValidity()){
        enableButton(savedButton);
    } else {
        disableButton(savedButton);
    };
};

function enableValidation() {
    const form = document.querySelector('.popup__form');
        
    //отключаем отправку для всех форм
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
    });
        
    const inputs = document.querySelectorAll('.popup__input');
    const inputsArray = Array.from(inputs);
    inputsArray.forEach(function(input){
        input.addEventListener('input', () => {
            checkedValidity(input);

            //кнопка
            validityButton(form);
        });
    });
};
enableValidation();