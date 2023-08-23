import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { 
  buttonEditProfilePencil, profileForm,
  buttonAddMesto,
  editImageForm, templateSelector,
  config, configUserInfo,
  popupProfileSelector, popupAddMestoSelector,
  zoomSelector, cardListSelector 
} from '../utils/costants.js';
import { initialCards } from '../utils/ArrayCards.js';

const popupImage = new PopupWithImage(zoomSelector);
const userInfo = new UserInfo(configUserInfo);
const profileValidator = new FormValidator(config, profileForm);
const cardValidator = new FormValidator(config, editImageForm);

const section = new Section({ 
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, templateSelector, popupImage.open);
    section.addItem(card.generateCard());
    
  }
}, cardListSelector);
section.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});

const popupAddMesto = new PopupWithForm(popupAddMestoSelector, (data) => {
  section.addItem(data);
});

//открытие попапа "Редактировать профиль"
buttonEditProfilePencil.addEventListener('click', () => openPopapProfilePencil());

function openPopapProfilePencil(){
  popupProfile.open();
    popupProfile.setInputValues(userInfo.getUserInfo())
    profileValidator.enableValidation();
}

//открытие попапа "Добавить место"
buttonAddMesto.addEventListener('click', () => openPopupAddMesto());

function openPopupAddMesto(){
  popupAddMesto.open()
  cardValidator.enableValidation();
}

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddMesto.setEventListeners();