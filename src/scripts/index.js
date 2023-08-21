import '../pages/index.css';
import { initialCards } from './utils/ArrayCards.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import { 
  buttonEditProfilePencil, profileForm,
  buttonAddMesto,
  editImageForm,
  config, configUserInfo,
  popupProfileSelector, popupAddMestoSelector,
  zoomSelector, cardListSelector 
} from './utils/costants.js';

const popupImage = new PopupWithImage(zoomSelector);
popupImage.setEventListeners();
const userInfo = new UserInfo(configUserInfo);

const section = new Section({ 
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, popupImage.open);
    const newCard = card.generateCard();
    return newCard
  }
}, cardListSelector);
section.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
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

//открытие попапа "Добавить место"
buttonAddMesto.addEventListener('click', () => {
  popupAddMesto.open()

  const cardValidator = new FormValidator(config, editImageForm);
  cardValidator.enableValidation();
});