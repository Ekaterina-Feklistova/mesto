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

/*/Увеличение картинок
const popupZoomImage = document.querySelector('.popup_type_zoom-card');
const openZoomImage = popupZoomImage.querySelector('.popup__zoom-image');
const openZoomTitle = popupZoomImage.querySelector('.popup__zoom-title');
const closeZoomImage = popupZoomImage.querySelector('.popup__close_zoom');*/

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
  cardList.append(newCard);
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
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__submit_add')){
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
  /*const card = new Card(item);
  const cardElement = card.generateCard();*/
  createCard(item);
  /*cardList.append(newCard);*/
});

//открытие попапа "Добавить место"
buttonAddMesto.addEventListener('click', () => {
  openPopup(popupAddMesto);
});

//закрытие попапа "Добавить место"
buttonCloseMesto.addEventListener('click', () => {
  closePopup(popupAddMesto);
});

//добавление картинки в "Место"
const handleSubmitAddMesto = (event) => {
  event.preventDefault();

  const item = {
    name: nameMesto.value,
    link: imageMesto.value
  }

  /*const card = new Card(item, galeryTemplate);
  const newCard = card.generateCard();*/
  createCard(item);

  /*cardList.prepend(newCard);*/
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

const profileValidator = new FormValidator(config, popupProfile);
profileValidator.enableValidation();

const cardValidator = new FormValidator(config, popupAddMesto);
cardValidator.enableValidation();
