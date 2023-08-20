import '../pages/index.css';
import { initialCards } from './utils/ArrayCards.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import { 
  nameProfile, professionProfile,
  galeryTemplate,
  cardList,
  buttonEditProfilePencil, profileForm,
  buttonAddMesto, buttonCloseMesto,
  popupCloseButton, popupElement,
  editImageForm,
  config 
} from './utils/costants.js';
const popupProfileSelector = '.popup_type_profil';
const popupAddMestoSelector = '.popup_add';
const zoomSelector = '.popup_type_zoom-card';
const cardListSelector = '.elements';

const popupImage = new PopupWithImage(zoomSelector);
popupImage.setEventListeners();
const userInfo = new UserInfo(nameProfile, professionProfile);

const section = new Section({ 
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, galeryTemplate, popupImage.open);
    const newCard = card.generateCard();
    return newCard
  }
}, cardListSelector);
section.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  console.log('klik')
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
});
popupProfile.setEventListeners();

//открытие попапа "Редактировать профиль"
buttonEditProfilePencil.addEventListener('click', () => {
    popupProfile.open();
    popupProfile.setInputValues(userInfo.getUserInfo())
    const profileValidator = new FormValidator(config, profileForm);
    profileValidator.enableValidation();
    
});

const popupAddMesto = new PopupWithForm(popupAddMestoSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddMesto.getInputValues()));
  popupAddMesto.close();
});
popupAddMesto.setEventListeners();

/*/закрытие попапа "Редактировать профиль"
buttonCloseProfile.addEventListener('click', () => {
    const profileClose = new Popup(popupProfile);
    profileClose.close()
});

//обработчик события на кнопке Сохранить
profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameProfile.textContent = nameInputProfileForm.value;
    professionProfile.textContent = professoinInputProfileForm.value;
    close(popupProfile);
});*/

/*/добавление массива в html
initialCards.forEach((item) => {
  const card = createCard(item);
  cardList.append(card);
});*/

//открытие попапа "Добавить место"
buttonAddMesto.addEventListener('click', () => {
  popupAddMesto.open()

  const cardValidator = new FormValidator(config, editImageForm);
  cardValidator.enableValidation();
});

/*/закрытие попапа "Добавить место"
buttonCloseMesto.addEventListener('click', () => {
  const closeAddMesto = new Popup(popupAddMesto);
  closeAddMesto.close();
  editImageForm.reset();
});*/

/*/клик на кнопку закрытия попапа
popupCloseButton.addEventListener('click', () => {
    popupImage.src = '';
    const closeZoomImage = new Popup(popupElement);
    closeZoomImage.close();
});*/

/*/добавление картинки в "Место"
const handleSubmitAddMesto = (event) => {
  event.preventDefault();

  const item = {
    name: nameMesto.value,
    link: imageMesto.value
  }

  const card = createCard(item);
  cardList.prepend(card);
  close(popupAddMesto);
  editImageForm.reset();
};

editImageForm.addEventListener("submit", handleSubmitAddMesto);*/

/*export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_add',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_visible',
  errorSpan: 'form__input-error'
};*/
