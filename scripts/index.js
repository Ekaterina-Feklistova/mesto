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
const galeryList = document.querySelector('.elements');
const galeryTemplate = document.querySelector('.element__template').content.querySelector('.element');

//Увеличение картинок
const popupZoomImage = document.querySelector('.popup_type_zoom-card');
const openZoomImage = popupZoomImage.querySelector('.popup__zoom-image');
const openZoomTitle = popupZoomImage.querySelector('.popup__zoome-title');
const closeZoomImage = popupZoomImage.querySelector('.popup__close_zoom');

//Добавить место
const buttonAddMesto = document.querySelector('.profile__button');
const popupAddMesto = document.querySelector('.popup_add');
const buttonCloseMesto = document.querySelector('.popup__close-add');

//многоразовая функция Открытия
const openPopup = (popup)=>{
  popup.classList.add('popup_opened');
};

//многоразовая функция Закрытия
const closePopup = (popup)=> {
  popup.classList.remove('popup_opened');
};

//функция создания новой карточки с Местом
function createCard(element){
  const cardsElement = galeryTemplate.cloneNode(true);
  cardsElement.querySelector('.element__image').src = element.link;
  cardsElement.querySelector('.element__title').textContent = element.name;

  cardsElement.querySelector('.element__image').addEventListener('click', () => {
    openPopup(popupZoomImage);
    
    openZoomImage.src = element.link;
    openZoomTitle.textContent = element.name;
  });
  closeZoomImage.addEventListener('click', () => {
    closePopup(popupZoomImage);
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
}

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
//уважаемый ревьюер, я не совсем понимаю, как здесь вызвать функцию создания карточки,
//объясните мне подробнее пожалуйста
initialCards.forEach(function(element){
  
  const cardsElement = galeryTemplate.cloneNode(true);
  cardsElement.querySelector('.element__image').src = element.link;
  cardsElement.querySelector('.element__title').textContent = element.name;
  
  //увеличение картинок
    cardsElement.querySelector('.element__image').addEventListener('click', () => {
    openPopup(popupZoomImage);
    
    openZoomImage.src = element.link;
    openZoomTitle.textContent = element.name;
    openZoomImage.setAttribute('alt',element.name);
  });
  closeZoomImage.addEventListener('click', () => {
    closePopup(popupZoomImage);
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

  galeryList.append(cardsElement);
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
const editImageForm = document.querySelector('.popup__form-add');
const handleEditImageSubmit = (evt) => {
  evt.preventDefault();

  const nameMesto = editImageForm.querySelector('.popup__input_type_mesto');
  const imageMesto = editImageForm.querySelector('.popup__input_type_image');

  const name = nameMesto.value;
  const link = imageMesto.value;

  const mestoData = {
    name,
    link,
  };
  renderImageElement(createCard(mestoData));
  closePopup(popupAddMesto);
};

editImageForm.addEventListener('submit', handleEditImageSubmit);