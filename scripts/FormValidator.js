class FormValidator {
    constructor(config, formElement){
      this._config = config;
      this._formElement = formElement;
      this._formSelector = this._config.formSelector;
      this._inputSelector = this._config.inputSelector;
      this._submitButtonSelector = this._config.submitButtonSelector;
      this._inactiveButtonClass = this._config.inactiveButtonClass;
      this._inputErrorClass = this._config.inputErrorClass;
      this._errorClass = this._config.errorClass;
      this._errorSpan = this._config.errorSpan;
      console.log(this._inputSelector)
    }
    
    //функция, которая добвляет класс с ошибкой
    _showInputError () {
        this._inputSelector.classList.add(this._inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorSpan);
        
    }


    //функция, которая убирает класс с ошибкой
    _hideInputError () {
        this._inputSelector.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorSpan);
    }

    //функция, которая проверяет валидность поля
    _checkValidity () {
        const errorElement = document.querySelector(`#error-${input.id}`);
        
        if (! input.validity.valid){
            showInputError(this._inputErrorClass, errorElement);
        } else {
            hideInputError(this._inputErrorClass, errorElement);
        };
    };

    //функция для скрывания кнопки
    _disableButton(){
        button.setAttribute('disabled', '');
        button.classList.add(this._inactiveButtonClass);
        
    };

    //функция показа кнопки
    _enableButton(){
        button.removeAttribute('disabled');
        button.classList.remove(this._inactiveButtonClass);
    };

    //функция проверки показа или скрытия кнопки
    _validityButton(){
        if (form.checkValidity()){
            enableButton(this._inactiveButtonClass, savedButton);
        } else {
            disableButton(this._inactiveButtonClass, savedButton);
        };
    };

    enableValidation() {
        const formsPopup = document.querySelectorAll(this._formSelector);
        const formsArray = Array.from(formsPopup);
            
        formsArray.forEach(function(form){
            //отключаем отправку для всех форм
            form.addEventListener('submit', function(evt){
                evt.preventDefault();
            });    
            
            //очистка формы
            const savedButton = form.querySelector('.popup__submit');
            
            form.addEventListener('reset', function(evt) {
                disableButton(this._inactiveButtonClass, savedButton);
            });

            const inputs = form.querySelectorAll('.popup__input');
            const inputsArray = Array.from(inputs);
            inputsArray.forEach(function(input){
                input.addEventListener('input', () => {
                    checkValidity();
                    //кнопка
                    validityButton(rest, this._form, savedButton);
                });
            }); 
        });
    }
}
export default FormValidator;
