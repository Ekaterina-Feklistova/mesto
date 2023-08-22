import '../pages/index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import { 
  buttonEditProfilePencil, profileForm,
  buttonAddMesto,
  editImageForm,
  config, configUserInfo,
  popupProfileSelector, popupAddMestoSelector,
  zoomSelector, cardListSelector 
} from '../scripts/utils/costants.js';
import { initialCards } from '../scripts/utils/ArrayCards.js';

const popupImage = new PopupWithImage(zoomSelector);
const userInfo = new UserInfo(configUserInfo);
const profileValidator = new FormValidator(config, profileForm);
const cardValidator = new FormValidator(config, editImageForm);

const section = new Section({ 
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, popupImage.open);
    return card.generateCard();
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