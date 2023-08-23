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

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(dataUser){
        this._inputName.textContent = dataUser.name;
        this._inputInfo.textContent = dataUser.subname;
    };
}

