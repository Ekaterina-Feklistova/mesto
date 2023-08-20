//массив попапов
export const popupArray = document.querySelectorAll('.popup');
export const cardList = document.querySelector('.elements');

//Редактирования Профиля
export const popupProfile = document.querySelector('.popup_type_profil');
export const buttonEditProfilePencil = document.querySelector('.profile__button-info');
export const buttonCloseProfile = popupProfile.querySelector('.popup__close_type_profil');
export const profileForm = popupProfile.querySelector('.popup__form_type_profil');
export const nameInputProfileForm = popupProfile.querySelector('.popup__input_type_name');
export const professoinInputProfileForm = popupProfile.querySelector('.popup__input_type_subname');
export const nameProfile = document.querySelector('.profile__title');
export const professionProfile = document.querySelector('.profile__subtitle');

//Галерея картинок
export const galeryTemplate = document.querySelector('.element__template');
export const galeryElement = galeryTemplate.querySelector('.element');

//Увеличение картинок
export const popupElement = document.querySelector('.popup_type_zoom-card');
export const popupImage = popupElement.querySelector('.popup__zoom-image');
export const popupCaption = popupElement.querySelector('.popup__zoom-title');
export const popupCloseButton = popupElement.querySelector('.popup__close_zoom');

//Добавить место
export const buttonAddMesto = document.querySelector('.profile__button');
export const popupAddMesto = document.querySelector('.popup_add');
export const buttonCloseMesto = document.querySelector('.popup__close-add');
export const editImageForm = document.querySelector('.popup__form-add');
export const nameMesto = editImageForm.querySelector('.popup__input_type_mesto');
export const imageMesto = editImageForm.querySelector('.popup__input_type_image');

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_add',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error_visible',
    errorSpan: 'form__input-error'
};
export const configUserInfo = {
    profileNameSelector: '.profile__title',
    profileInfoSelector: '.profile__subtitle'
}