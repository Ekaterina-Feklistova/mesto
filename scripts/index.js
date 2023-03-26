//ищем в html кнопку карандашик //
const buttonPencil = document.querySelector('.button-open');
//ищем в html попап с карандашиком //
const popupPencil = document.querySelector('.popup_pencil');
//ищем в html кнопку закрытия попапа с карандашиком //
const pencilClose = popupPencil.querySelector('.popup__close');
//ищем копопку Сохранить //
const ProfileSubmit = popupPencil.querySelector('.popup__submit')
//ищем форму//
const ProfileForm = popupPencil.querySelector('.popup__form')
//ищем в html форму ввода имени профиля и профессии//
const nameInput = popupPencil.querySelector('.popup__input_type_name');
const professoinInput = popupPencil.querySelector('.popup__input_type_subname');

let nameProfile = document.querySelector('.profile__title')
let professionProfile = document.querySelector('.profile__subtitle')
//открытие попапа "Редактировать профиль"//
buttonPencil.addEventListener('click', function(){
    popupPencil.classList.add('popup_open');
    nameInput.value = nameProfile.innerHTML;
    professoinInput.value = professionProfile.innerHTML;
});

//закрытие попапа "Редактировать профиль"//
pencilClose.addEventListener('click', function(){
    popupPencil.classList.remove('popup_open');
});

//обработчик события на кнопке Сохранить//
ProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    nameProfile.innerHTML = nameInput.value;
    professionProfile.innerHTML = professoinInput.value;
    popupPencil.classList.remove('popup_open');
});
