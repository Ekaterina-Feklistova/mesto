class FormValidator {
    constructor(data, form){
      this._form = form;      
      this._formSelector = data.formSelector;
      this._inputSelector = data.inputSelector;
      this._submitButtonSelector = data.submitButtonSelector;
      this._inactiveButtonClass = data.inactiveButtonClass;
      this._inputErrorClass = data.inputErrorClass;
      this._errorClass = data.errorClass;
      this._errorSpan = data.errorSpan;     
    }    
        //функция, которая добвляет класс с ошибкой
    _showInputError (input, errorElement) {
        input.classList.add(this._inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorSpan);
    };

    //функция, которая убирает класс с ошибкой
    _hideInputError (input, errorElement) {
        input.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorSpan);
        
    };

    //функция, которая проверяет валидность поля
    _checkValidity (input) {
        const errorElement = document.querySelector(`#error-${input.id}`);
        
        if (! input.validity.valid){
            this._showInputError(input, errorElement);
        } else {
            this._hideInputError(input, errorElement);
        };
    };

    //функция для скрывания кнопки
    _disableButton(savedButton){
        savedButton.setAttribute('disabled', '');
        savedButton.classList.add(this._inactiveButtonClass);
        
    };

    //функция показа кнопки
    _enableButton(savedButton){
        savedButton.removeAttribute('disabled');
        savedButton.classList.remove(this._inactiveButtonClass);
    };

    //функция проверки показа или скрытия кнопки
    _validityButton(savedButton){
        
        if (this._form.checkValidity()){
            this._enableButton(savedButton);
        } else {
            this._disableButton(savedButton);
        };        
    };

    enableValidation() {
        //отключаем отправку для всех форм
        this._form.addEventListener('submit', function(evt){
            evt.preventDefault();
        });    
            
        const inputs = this._form.querySelectorAll(this._inputSelector);
        const inputsArray = Array.from(inputs);
        
        inputsArray.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkValidity(input);
                //кнопка
                this._validityButton(savedButton);
            });       
        }); 
            
        //очистка формы
        const savedButton = this._form.querySelector(this._submitButtonSelector);
        this._form.addEventListener('reset', (evt) => {
            this._disableButton(savedButton);
        });
    };
}
export default FormValidator;
