export default class Section{
    constructor(renderer, selector){
        
        this._container = document.querySelector(selector);
        this._renderer = renderer;
        
    }

    //отрисовка всех элементов
    renderItems(dataCard){
        dataCard.forEach((element) => {
            this._renderer(element);
        })
    };

    addItemPrepend(element){
        this._container.prepend(element);
    };
    addItemAppend(element){
        this._container.append(element);
    };
}