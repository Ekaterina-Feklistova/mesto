//ищем в html кнопку карандашик //
const ButtonPencil = document.querySelector('.button-open');
//ищем в html попап с карандашиком //
const PopupPencil = document.querySelector('.popup_pencil');
//ищем в html кнопку закрытия попапа с карандашиком //
const PencilClose = PopupPencil.querySelector('.popup__close');
//ищем копопку Сохранить //
const ProfileSubmit = PopupPencil.querySelector('.popup__submit')
//ищем форму//
const ProfileForm = PopupPencil.querySelector('.popup__form')
//ищем в html форму ввода имени профиля и профессии//
const NameInput = PopupPencil.querySelector('.popup__input_type_name');
const ProfessoinInput = PopupPencil.querySelector('.popup__input_type_subname');

let NameProfile = document.querySelector('.profile__title')
let ProfessionProfile = document.querySelector('.profile__subtitle')
//открытие попапа "Редактировать профиль"//
ButtonPencil.addEventListener('click', function(){
    open();
    NameInput.value = NameProfile.textContent;
    ProfessoinInput.value = ProfessionProfile.textContent;
});

//закрытие попапа "Редактировать профиль"//
PencilClose.addEventListener('click', function(){
    close();
});

//обработчик события на кнопке Сохранить//
ProfileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    NameProfile.textContent = NameInput.value;
    ProfessionProfile.textContent = ProfessoinInput.value;
    close();
});

//многоразовая функция Открытия//
function open(){
    PopupPencil.classList.add('popup_opened');
};

//многоразовая функция Закрытия//
function close() {
    PopupPencil.classList.remove('popup_opened');
};
