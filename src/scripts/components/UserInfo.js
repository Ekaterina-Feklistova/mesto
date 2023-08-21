import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import { 
    config,
    popupProfile,
    buttonEditProfilePencil,
    buttonCloseProfile,
    profileForm,
    nameInputProfileForm,
    professoinInputProfileForm
 } from "../utils/costants.js";

export default class UserInfo{
    constructor(configUserInfo){
        this._inputName = document.querySelector(configUserInfo.profileNameSelector);
        this._inputInfo = document.querySelector(configUserInfo.profileInfoSelector);
    };
    //возвращает объект с данными пользователя
    //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo(){
        return {name: this._inputName.textContent, subname: this._inputInfo.textContent}
    };

    _closeProfile(){
        const profileClose = new Popup(popupProfile);
        profileClose.close()
    };

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(dataUser){
        this._inputName.textContent = dataUser.name;
        this._inputInfo.textContent = dataUser.subname;
    };

    setEventListeners(){
        //клик на карандашик - открытие попапа Редактривать профиль
        this._buttonEditProfilePencil = document.querySelector('.profile__button-info');
        this._buttonEditProfilePencil.addEventListener('click', () => this.getUserInfo());

        //клик - закрытие попапа "Редактировать профиль"
        this._buttonCloseProfile = document.querySelector('.popup__close_type_profil');
        this._buttonCloseProfile.addEventListener('click', () => this._closeProfile());

        //клик на кнопке Сохранить
        profileForm.addEventListener('submit', this.setUserInfo);
    }
}

