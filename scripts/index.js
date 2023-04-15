//Редактирования Профиля
const buttonPencil = document.querySelector('.profile__button-info'); //ищем в html кнопку редактирования профиля
const popupProfile = document.querySelector('.popup'); //ищем в html попап с карандашиком
const pencilClose = popupProfile.querySelector('.popup__close'); //ищем в html кнопку закрытия попапа с карандашиком
const profileForm = popupProfile.querySelector('.popup__form'); //ищем форму//
const nameInput = popupProfile.querySelector('.popup__input_type_name'); //ищем в html форму ввода имени профиля
const professoinInput = popupProfile.querySelector('.popup__input_type_subname'); //и профессии

let nameProfile = document.querySelector('.profile__title');
let professionProfile = document.querySelector('.profile__subtitle');

buttonPencil.addEventListener('click', () => { //открытие попапа "Редактировать профиль"
    openPopup(popupProfile);
    nameInput.value = nameProfile.textContent;
    professoinInput.value = professionProfile.textContent;
});

pencilClose.addEventListener('click', () => { //закрытие попапа "Редактировать профиль"
    closePopup(popupProfile);
});

profileForm.addEventListener('submit', (event) => { //обработчик события на кнопке Сохранить
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professoinInput.value;
    closePopup(popupProfile);
});

//многоразовая функция Открытия
const openPopup = (popup)=>{
    popup.classList.add('popup_opened');
};

//многоразовая функция Закрытия
const closePopup = (popup)=> {
    popup.classList.remove('popup_opened');
};
////////////////////////////////////////////////////////////////////////////
//массив с фотографиями мест
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//добавление массива в html
//ищем место для галереи фотографий мест
const galeryList = document.querySelector('.elements');
const galeryTemplate = document.querySelector('.element__template').content;

initialCards.forEach(function(element){
  
  const cardsElement = galeryTemplate.cloneNode(true);
  cardsElement.querySelector('.element__image').src = element.link;
  cardsElement.querySelector('.element__title').textContent = element.name;
  
  //увеличение картинок
  
  let popupImage = document.querySelector('.popup_type_zoom-card');
  let openImage = popupImage.querySelector('.popup__zoom-image');
  let openTitle = popupImage.querySelector('.popup__zoome-title');
  const closeImage = popupImage.querySelector('.popup__close_zoom');
  
  cardsElement.querySelector('.element__image').addEventListener('click', () => {
    openPopup(popupImage);
    
    openImage.src = element.link;
    openTitle.textContent = element.name;
  });
  closeImage.addEventListener('click', () => {
    closePopup(popupImage);
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

//ищем кнопку добавления +
const addMestoButton = document.querySelector('.profile__button');
const popupAddMesto = document.querySelector('.popup__add');
//ищем в html кнопку закрытия попапа добавить
const popupCloseMesto = document.querySelector('.popup__close-add');

//открытие попапа "Добавить место"
addMestoButton.addEventListener('click', () => {
  openPopup(popupAddMesto);
});

//закрытие попапа "Добавить место"
popupCloseMesto.addEventListener('click', () => {
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

function createCard(element){
  const cardsElement = galeryTemplate.cloneNode(true);
  cardsElement.querySelector('.element__image').src = element.link;
  cardsElement.querySelector('.element__title').textContent = element.name;

  cardsElement.querySelector('.element__image').addEventListener('click', () => {
    openPopup(popupImage);
    
    openImage.src = element.link;
    openTitle.textContent = element.name;
  });
  closeImage.addEventListener('click', () => {
    closePopup(popupImage);
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
