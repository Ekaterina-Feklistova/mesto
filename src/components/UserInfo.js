export default class UserInfo{
    constructor(configUserInfo){
        this._inputName = document.querySelector(configUserInfo.profileNameSelector);
        this._inputInfo = document.querySelector(configUserInfo.profileInfoSelector);
        this._profileAvatar = document.querySelector(configUserInfo.profileAvatarSelector);
    };
    //возвращает объект с данными пользователя
    //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo(){
        return {name: this._inputName.textContent, subname: this._inputInfo.textContent}
    };

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({ avatar, name, subname }) {
        this._profileAvatar.src = avatar;
        this._inputName.textContent = name;
        this._inputInfo.textContent = subname;
    };

    setId(id){
        this._id = id;
    };

    getId(){
        return this._id;
    }
}

