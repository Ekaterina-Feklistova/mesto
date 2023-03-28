//ищем в html кнопку //
const ButtonPencil = document.querySelector('.button-open');
//ищем в html попап с карандашиком //
const PopupPencil = document.querySelector('.popup_pencil');
//ищем в html кнопку закрытия попапа с карандашиком //
const PencilClose = PopupPencil.querySelector('.popup__close');
//ищем форму//
const ProfileForm = PopupPencil.querySelector('.popup__form')
//ищем в html форму ввода имени профиля и профессии//
const NameInput = PopupPencil.querySelector('.popup__input_type_name');
const ProfessoinInput = PopupPencil.querySelector('.popup__input_type_subname');

let NameProfile = document.querySelector('.profile__title')
let ProfessionProfile = document.querySelector('.profile__subtitle')
//открытие попапа "Редактировать профиль"//
ButtonPencil.addEventListener('click', function(){
    OpenPopap();
    NameInput.value = NameProfile.textContent;
    ProfessoinInput.value = ProfessionProfile.textContent;
});

//закрытие попапа "Редактировать профиль"//
PencilClose.addEventListener('click', function(){
    ClosePopap();
});

//обработчик события на кнопке Сохранить//
ProfileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    NameProfile.textContent = NameInput.value;
    ProfessionProfile.textContent = ProfessoinInput.value;
    ClosePopap();
});

//многоразовая функция Открытия//
function OpenPopap(){
    PopupPencil.classList.add('popup_opened');
};

//многоразовая функция Закрытия//
function ClosePopap() {
    PopupPencil.classList.remove('popup_opened');
};
