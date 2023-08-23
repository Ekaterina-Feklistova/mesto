export default class Section{
    constructor({ items, renderer }, selector){
        this._initialArray = items;
        this._container = document.querySelector(selector);
        this._renderer = renderer;
        
    }

    //отрисовка всех элементов
    renderItems(){
        this._initialArray.forEach((element) => {
            this._renderer(element);
        })
    };

    addItem(element){
        this._container.prepend(element);
    };
}