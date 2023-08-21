import Card from "./Card.js";
export default class Section{
    constructor({ items, renderer }, selector){
        this._initialArray = items;
        this._container = document.querySelector(selector);
        this.renderer = renderer;
        
    }

    //отрисовка всех элементов
    renderItems(){
        /*this.clear();*/
        this._initialArray.forEach((item) => {
            
            /*const card = new Card(item, galeryTemplate);
            const newCard = card.generateCard();*/
            this.addItem(this.renderer(item));
        })
    };

    addItem(element){
        this._container.prepend(element);
    };

    clear(){
        this._container.innerHTML = "";
    };
}