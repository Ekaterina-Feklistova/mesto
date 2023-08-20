import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__zoom-image');
        this._popupCaption = this._popup.querySelector('.popup__zoom-title');
    }
    open = (data) => {
        this._popupImage.src = data.link;
        this._popupImage.alt = data.title;
        this._popupCaption.textContent = data.title;
        super.open();   
    }
}