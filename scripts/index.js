import { initialCards } from './costants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';


//массив попапов
const popupArray = document.querySelectorAll('.popup');
const cardList = document.querySelector('.elements');
//Редактирования Профиля
const popupProfile = document.querySelector('.popup_type_profil');
const buttonEditProfilePencil = document.querySelector('.profile__button-info');
const buttonCloseProfile = popupProfile.querySelector('.popup__close_type_profil');
const profileForm = popupProfile.querySelector('.popup__form_type_profil');
const nameInputProfileForm = popupProfile.querySelector('.popup__input_type_name');
const professoinInputProfileForm = popupProfile.querySelector('.popup__input_type_subname');
const nameProfile = document.querySelector('.profile__title');
const professionProfile = document.querySelector('.profile__subtitle');

//Галерея картинок
const galeryTemplate = document.querySelector('.element__template');

//Увеличение картинок
export const popupElement = document.querySelector('.popup_type_zoom-card');
export const popupImage = popupElement.querySelector('.popup__zoom-image');
export const popupCaption = popupElement.querySelector('.popup__zoom-title')
export const popupCloseButton = popupElement.querySelector('.popup__close_zoom');

//Добавить место
const buttonAddMesto = document.querySelector('.profile__button');
const popupAddMesto = document.querySelector('.popup_add');
const buttonCloseMesto = document.querySelector('.popup__close-add');
const editImageForm = document.querySelector('.popup__form-add');
const nameMesto = editImageForm.querySelector('.popup__input_type_mesto');
const imageMesto = editImageForm.querySelector('.popup__input_type_image');

//многоразовая функция Открытия
export const openPopup = (popup)=>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

//многоразовая функция Закрытия
export const closePopup = (popup)=> {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};

const createCard = (data) =>{
  const card = new Card(data, galeryTemplate);
  const newCard = card.generateCard();
  return newCard;
};

//закрытие формы через ESC
export function handleEscape(evt){
  if (evt.key === 'Escape'){
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

//закрытие при клике на оверлей
popupArray.forEach(function(popup){
  popup.addEventListener('mousedown', (evt) =>{
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('.popup__close')){
      closePopup(popup);
    }
  });
});

//Функционал "Редактировать профиль"
//открытие попапа "Редактировать профиль"
buttonEditProfilePencil.addEventListener('click', () => {
    openPopup(popupProfile);
    nameInputProfileForm.value = nameProfile.textContent;
    professoinInputProfileForm.value = professionProfile.textContent;

    const profileValidator = new FormValidator(config, profileForm);
    profileValidator.enableValidation();
});

//закрытие попапа "Редактировать профиль"
buttonCloseProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});

//обработчик события на кнопке Сохранить
profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameProfile.textContent = nameInputProfileForm.value;
    professionProfile.textContent = professoinInputProfileForm.value;
    closePopup(popupProfile);
});

//добавление массива в html
initialCards.forEach((item) => {
  const card = createCard(item);
  cardList.append(card);
});

//открытие попапа "Добавить место"
buttonAddMesto.addEventListener('click', () => {
  openPopup(popupAddMesto);

  const cardValidator = new FormValidator(config, editImageForm);
  cardValidator.enableValidation();
});

//закрытие попапа "Добавить место"
buttonCloseMesto.addEventListener('click', () => {
  closePopup(popupAddMesto);
  editImageForm.reset();
});

//клик на кнопку закрытия попапа
popupCloseButton.addEventListener('click', () => {
    popupImage.src = '';
    closePopup(popupElement);
});

//добавление картинки в "Место"
const handleSubmitAddMesto = (event) => {
  event.preventDefault();

  const item = {
    name: nameMesto.value,
    link: imageMesto.value
  }

  const card = createCard(item);
  cardList.prepend(card);
  closePopup(popupAddMesto);
  editImageForm.reset();
};

editImageForm.addEventListener("submit", handleSubmitAddMesto);

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_add',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_visible',
  errorSpan: 'form__input-error'
};
