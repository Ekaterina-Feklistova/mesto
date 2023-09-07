import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupCardDelete from '../components/PopupCardDelete.js';
import Api from '../components/API.js';

import { 
  buttonEditProfilePencil, profileForm,
  buttonAddMesto,
  editImageForm, templateSelector,
  config, configUserInfo,
  popupProfileSelector, popupAddMestoSelector,
  zoomSelector, cardListSelector,
  popupAvatarSelector, popupDeleteSelector, avatarForm 
} from '../utils/costants.js';

const popupImage = new PopupWithImage(zoomSelector);
const userInfo = new UserInfo(configUserInfo);
const avatarValidator = new FormValidator(config, avatarForm);
avatarValidator.enableValidation();
const profileValidator = new FormValidator(config, profileForm);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, editImageForm);
cardValidator.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-74',
  headers: {
    authorization: '66845714-5b02-4496-8606-3df242518ec7',
    'Content-Type': 'application/json'
  }
})

const deletePopupCard = new PopupCardDelete(popupDeleteSelector, ({ card, cardId }) => {
  api.deleteCard(cardId)
   .then(() => {
    card.removeCard();
    deletePopupCard.close();
   })
   .catch((err) => console.log(`Ошибка при удалении карточки ${err}`))
   .finally(() => deletePopupCard.setupDefaultText())
});

function createNewCard(data){
  const card = new Card(data, templateSelector, popupImage.open, deletePopupCard.open, (likeElement, cardId) => {
    if(likeElement.classList.contains('element__like_active')){
      api.deleteLike(cardId)
        .then(res => {
          card.isLiked(res.likes)
        })
        .catch((err) => console.log(`Ошибка при снятии лайка ${err}`))
    } else {
      api.addLike(cardId)
        .then( res => {
          card.isLiked(res.likes)
        })
        .catch((err) => console.log(`Ошибка при добавлении лайка ${err}`))
    }
  });
  return card.generateCard();
};
const section = new Section((element) => { 
  section.addItemPrepend(createNewCard(element));    
  }, cardListSelector);


const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, subname: res.about, avatar: res.avatar });
      popupProfile.close();
    })
    .catch((err => console.log(`Ошибка при редактировании профиля ${err}`)))
    .finally(() => popupProfile.setupDefaultText())
});

const popupAddMesto = new PopupWithForm(popupAddMestoSelector, (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myId = dataUser._id;
      section.addItemPrepend(createNewCard(dataCard));
      popupAddMesto.close();
    })
    .catch((err) => console.log(`Ошибка при создании новой карточки ${err}`))
    .finally(() => popupAddMesto.setupDefaultText())
  //section.addItemAppend(createNewCard(data)); 
});

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setNewAvatar(data)
  .then(res => {
    userInfo.setUserInfo({ name: res.name, subname: res.about, avatar: res.avatar })
    popupEditAvatar.close()
  })
  .catch((err) => console.log(`Ошибка при обновлении аватара ${err}`))
  .finally(() => popupEditAvatar.setupDefaultText())
});
//открытие попапа "Редактировать профиль"
buttonEditProfilePencil.addEventListener('click', () => openPopapProfilePencil());

function openPopapProfilePencil(){
  popupProfile.open();
    popupProfile.setInputValues(userInfo.getUserInfo())
}

//открытие попапа "Добавить место"
buttonAddMesto.addEventListener('click', () => openPopupAddMesto());

function openPopupAddMesto(){
  popupAddMesto.open()
}

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddMesto.setEventListeners();
popupEditAvatar.setEventListeners();
deletePopupCard.setEventListeners();
document.querySelector('.profile__button-avatar').addEventListener('click', () => {
  popupEditAvatar.open()
})

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    
    dataCard.forEach(element => element.myId = dataUser._id) 
    userInfo.setUserInfo({ name: dataUser.name, subname: dataUser.about, avatar: dataUser.avatar })
    section.renderItems(dataCard);
  })
  //.catch((err) => console.log(`Ошибка при создании начальных данных ${err}`))