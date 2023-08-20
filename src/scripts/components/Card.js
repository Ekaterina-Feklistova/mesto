import { popupImage, popupCaption } from "../utils/costants.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
export default class Card {
  constructor(data){
    this._name = data.title;
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
  _openZoomImage(){
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;
    const openPopupZoomImage = new PopupWithImage('.element__image');
    openPopupZoomImage.open()
  }
  //открытие попапа с увеличением картинки
  _handleCardClick = () => {
    this._openZoomImage(this._data);
    console.log('Вы кликнули на картинку')
    
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
    this._elementImage.addEventListener('click', this._handleCardClick);
    
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