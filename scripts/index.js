//ищем в html кнопку
const buttonPencil = document.querySelector('.profile__button-info');
//ищем в html попап с карандашиком
const popupPencil = document.querySelector('.popup');
//ищем в html кнопку закрытия попапа с карандашиком
const pencilClose = popupPencil.querySelector('.popup__close');
//ищем форму//
const profileForm = popupPencil.querySelector('.popup__form')
//ищем в html форму ввода имени профиля и профессии
const nameInput = popupPencil.querySelector('.popup__input_type_name');
const professoinInput = popupPencil.querySelector('.popup__input_type_subname');

let nameProfile = document.querySelector('.profile__title')
let professionProfile = document.querySelector('.profile__subtitle')

//открытие попапа "Редактировать профиль"
buttonPencil.addEventListener('click', function(){
    openPopap();
    nameInput.value = nameProfile.textContent;
    professoinInput.value = professionProfile.textContent;
});

//закрытие попапа "Редактировать профиль"
pencilClose.addEventListener('click', function(){
    closePopap();
});

//обработчик события на кнопке Сохранить
profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professoinInput.value;
    closePopap();
});

//многоразовая функция Открытия
function openPopap(){
    popupPencil.classList.add('popup_opened');
};

//многоразовая функция Закрытия
function closePopap() {
    popupPencil.classList.remove('popup_opened');
};

//ищем место для галереи фотографий мест
const galeryList = document.querySelector('.elements');
const galeryTemplate = document.querySelector('.element__template').content;

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
initialCards.forEach(function(element){
  
  const galeryElement = galeryTemplate.cloneNode(true);
  galeryElement.querySelector('.element__image').src = element.link;
  galeryElement.querySelector('.element__title').textContent = element.name;

  galeryList.append(galeryElement);
});

//лайки
function buttonLikes (){
   document.querySelector('.element__like').onclick = (evt)=>{
    evt.target.classList.toggle('element__like_active');
  };
};
console.log(buttonLikes);
/*document.querySelector('.element__like').onclick = function(evt){
  evt.target.classList.toggle('element__like_active');
}*/


//ищем кнопку добавления +
const addMestoButton = document.querySelector('.profile__button');
const popupAdd = document.querySelector('.popup__add');
//ищем в html кнопку закрытия попапа добавить
const popupCloseAdd = document.querySelector('.popup__close-add');

//открытие попапа "Добавить место"
addMestoButton.addEventListener('click', function(){
  openPopupAdd();
});

//закрытие попапа "Добавить место"
popupCloseAdd.addEventListener('click', function(){
  closePopupAdd();
});

const addForm  = popupAdd.querySelector('.popup__form-add')
//обработчик события на кнопке Сохранить в попапе "Добавить место"
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  initialCards.unshift('.popup__input_type_mesto', '.popup__input_type_image');
  
  /*nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professoinInput.value;*/
  closePopupAdd();
});

//многоразовая функция Открытия
function openPopupAdd(){
  popupAdd.classList.add('popup_opened');
};

//многоразовая функция Закрытия
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
};