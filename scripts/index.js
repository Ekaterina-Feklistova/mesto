//ищем в html кнопку //
const buttonPencil = document.querySelector('.profile__button-info');
//ищем в html попап с карандашиком //
const popupPencil = document.querySelector('.popup');
//ищем в html кнопку закрытия попапа с карандашиком //
const pencilClose = popupPencil.querySelector('.popup__close');
//ищем форму//
const profileForm = popupPencil.querySelector('.popup__form')
//ищем в html форму ввода имени профиля и профессии//
const nameInput = popupPencil.querySelector('.popup__input_type_name');
const professoinInput = popupPencil.querySelector('.popup__input_type_subname');

let nameProfile = document.querySelector('.profile__title')
let professionProfile = document.querySelector('.profile__subtitle')

//открытие попапа "Редактировать профиль"//
buttonPencil.addEventListener('click', function(){
    openPopap();
    nameInput.value = nameProfile.textContent;
    professoinInput.value = professionProfile.textContent;
});

//закрытие попапа "Редактировать профиль"//
pencilClose.addEventListener('click', function(){
    closePopap();
});

//обработчик события на кнопке Сохранить//
profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professoinInput.value;
    closePopap();
});

//многоразовая функция Открытия//
function openPopap(){
    popupPencil.classList.add('popup_opened');
};

//многоразовая функция Закрытия//
function closePopap() {
    popupPencil.classList.remove('popup_opened');
};
