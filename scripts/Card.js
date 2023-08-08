import { initialCards } from './costants.js';
import { openPopup, closePopup, handleEscape } from './index.js';
const popupElement = document.querySelector('.popup_type_zoom-card');
const popupImage = popupElement.querySelector('.popup__zoom-image');
const popupCaption = popupElement.querySelector('.popup__zoom-title')
const popupCloseButton = popupElement.querySelector('.popup__close_zoom');
                           

class Card {
  constructor(data){
    this._name = data.name;
    this._link = data.link;
  }

  //шаблон места
  _getTemplate(){
    return document
    .querySelector('#mesto-template')
    .content
    .querySelector('.element')
    .cloneNode(true);
  }

  //открытие попапа с увеличением картинки
  _handleOpenPopup(){
    popupImage.src = this._link;
    openPopup(popupElement);
    popupCaption.textContent = this._name;
  }

  //закрите попапа
  _handleClosePopup(){
    popupImage.src = '';
    closePopup(popupElement);
  }
  
  //ставим лайк
  _handleLikeImage(){
    this._elementLike.classList.toggle('element__like_active');
  }

  //удаляем картинку
  _handleImageDelete(){
    this._elementDelete.closest('.element').remove();
  }

  //слушатели
  _setEventListeners(){
    //клик на картинку для увеличения
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.addEventListener('click', () => this._handleOpenPopup());
    
    //клик на кнопку закрытия попапа
    popupCloseButton.addEventListener('click', () => this._handleClosePopup());
    
    //клик на кнопку лайк
    this._elementLike = this._element.querySelector('.element__like');
    this._elementLike.addEventListener('click', () => this._handleLikeImage());
    
    //клик на кнопку удаления
    this._elementDelete = this._element.querySelector('.element__delete');
    this._elementDelete.addEventListener('click', () => this._handleImageDelete());
  }

  //генерация карточки (создание)
  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
        
    return this._element;
  }
};

export default Card;