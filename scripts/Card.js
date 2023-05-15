//Массив с фотографиями мест
export const initialCards = [
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

export const cardList = document.querySelector('.elements');
const popupElement = document.querySelector('.popup_type_zoom-card');
const popupCloseButton = popupElement.querySelector('.popup__close_zoom');
const popupImage = popupElement.querySelector('.popup__zoom-image');
const popupCaption = popupElement.querySelector('.popup__zoom-title');
const elementLike = document.querySelector('.element__like');
const elementDelete = document.querySelector('.element__delete');

export class Card {
  constructor(data){
    this._name = data.name;
    this._link = data.link;
    
    /*this._templateSelector = templateSelector;*/
  }
  _getTemplate(){
    const cardElement = document
    .querySelector('.element__template')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }
  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    /*this._element.setAttribute('alt',element.name);*/
        
    return this._element;
  }
  _handleOpenPopup(){
    popupImage.src = this._link;
    popupElement.classList.add('popup_opened');
    popupCaption.textContent = this._name;
  }
  _handleClosePopup(){
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');
  }
  
  _handleLikeImage(){
    this._element.classList.toggle('element__like_active');
  }
  _setEventListeners(){
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.addEventListener('click', () => this._handleOpenPopup());
    popupCloseButton.addEventListener('click', () => this._handleClosePopup());
    this._elementLike = this._element.querySelector('.element__like');
    this._elementLike.addEventListener('click', () => this._handleLikeImage());
  }
  /*//лайки
  cardsElement.querySelector('.element__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active');
  });
  
  //удаление
  cardsElement.querySelector('.element__delete').addEventListener('click', function(evt){
    const listItem = evt.target.closest('.element');
    listItem.remove();
  });*/
};


