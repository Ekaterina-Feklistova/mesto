export default class Card {
  constructor(data, templateSelector, openZoomImage, openDeletePopup, changelLike){
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._myId = data.myId;
    this._likes = data.likes;
    this._likesLength = data.likes.length;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._templateSelector = templateSelector 
    this._openZoomImage = openZoomImage;
    this._openDeletePopup = openDeletePopup;
    this._changelLike = changelLike;
  }

  //шаблон места
  _getTemplate(){
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  }
  
  //открытие попапа с увеличением картинки
  _handleCardClick = () => {
    this._openZoomImage(this._data);    
  }
  
  //ставим лайк
  _handleLikeImage = () => {
    this._changelLike(this._elementLike, this._cardId)
  }

  //удаляем картинку
  _handleImageDelete = () => {
    this._openDeletePopup({ card: this, cardId: this._cardId })
  }

  _checkDeleteButton(){
    if (this._myId === this._ownerId) {
      this._elementDelete.style.display = 'block'
    } else {
      this._elementDelete.style.display = 'none'
    }
  }

  _checkLikes(){
    this._likes.forEach(item => {
      if (item._id === this._myId){
        this._elementLike.classList.add('element__like_active');
        return
      }
    })
    this._counter.textContent = this._likesLength
  }

  isLiked(likes){
    this._elementLike.classList.toggle('element__like_active');
    this._counter.textContent = likes.length;
  }

  removeCard(){
    this._element.remove();
    this._element = null;
  }

  //слушатели
  _setEventListeners(){
    //клик на картинку для увеличения
    this._elementImage.addEventListener('click', this._handleCardClick);
    
    //клик на кнопку лайк
    this._elementLike.addEventListener('click', this._handleLikeImage);
    
    //клик на кнопку удаления
    this._elementDelete.addEventListener('click', this._handleImageDelete);
  }

  //генерация карточки (создание)
  generateCard(){
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementDelete = this._element.querySelector('.element__delete');
    this._counter = this._element.querySelector('.element__counter');
    this._checkLikes();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._checkDeleteButton()

    return this._element;
  }
};