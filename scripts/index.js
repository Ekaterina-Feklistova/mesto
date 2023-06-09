import { initialCards, Card, cardList } from './Card.js';
//массив попапов
const popupArray = document.querySelectorAll('.popup');
//Редактирования Профиля
const popupProfile = document.querySelector('.popup_type_profil');
const buttonEditProfilePencil = document.querySelector('.profile__button-info');
const buttonCloseProfile = popupProfile.querySelector('.popup__close_type_profil');
const profileForm = popupProfile.querySelector('.popup__form_type_profil');
const nameInputProfileForm = popupProfile.querySelector('.popup__input_type_name');
const professoinInputProfileForm = popupProfile.querySelector('.popup__input_type_subname');

const nameProfile = document.querySelector('.profile__title');
const professionProfile = document.querySelector('.profile__subtitle');

/*//Галерея картинок
const galeryList = document.querySelector('.elements');
const galeryTemplate = document.querySelector('.element__template').content.querySelector('.element');*/

/*//Увеличение картинок
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
const openPopup = (popup)=>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

//многоразовая функция Закрытия
const closePopup = (popup)=> {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};

//закрытие формы через ESC
function handleEscape(evt){
  if (evt.key === 'Escape'){
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

//закрытие при клике на оверлей
popupArray.forEach(function(popup){
  popup.addEventListener('mousedown', (evt) =>{
    if (evt.target.classList.contains('popup')){
      closePopup(popup);
    }
  });
});

//функция создания новой карточки с Местом
/*function createCard(element){
  const cardsElement = galeryTemplate.cloneNode(true);
  const cardElementImage = cardsElement.querySelector('.element__image');
  cardElementImage.src = element.link;
  cardsElement.querySelector('.element__title').textContent = element.name;
  cardElementImage.setAttribute('alt',element.name);

  cardElementImage.addEventListener('click', () => {
    openPopup(popupZoomImage);
    
    openZoomImage.src = element.link;
    openZoomTitle.textContent = element.name;
    openZoomImage.setAttribute('alt',element.name);
  });  

  //лайки
  cardsElement.querySelector('.element__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active');
  });
  
  //удаление
  cardsElement.querySelector('.element__delete').addEventListener('click', function(evt){
    const listItem = evt.target.closest('.element');
    listItem.remove();
  });
  return cardsElement;
}*/

/*//закрытие увеличенной картинки
closeZoomImage.addEventListener('click', () => {
  closePopup(popupZoomImage);
});*/

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
  const card = new Card(item);
  const cardElement = card.generateCard();
  cardList.append(cardElement);
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
const renderImageElement = (cardsElement) => {
  galeryList.prepend(cardsElement);
}

const handleEditImageSubmit = (evt) => {
  evt.preventDefault();

  const name = nameMesto.value;
  const link = imageMesto.value;

  const mestoData = {
    name,
    link,
  };
  
  renderImageElement(createCard(mestoData));
  closePopup(popupAddMesto);
  editImageForm.reset();
};

editImageForm.addEventListener('submit', handleEditImageSubmit);