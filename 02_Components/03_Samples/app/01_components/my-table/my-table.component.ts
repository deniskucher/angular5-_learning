import { Component, Input, OnInit } from "@angular/core";

const VALUES = [ 
    "Hello World", 
    "Привет Мир",
    "Привіт Світ", 
    "Hola Mundo", 
    "Bonjour le monde", 
    "Hallo Welt", 
    "Ciao mondo", 
    "Witaj świecie", 
    "Hej världen", 
    "Pozdravljen, svet", 
    "Прывітанне Сусвет"
]; 
const PRODUCTS = [
    { id: 1, name : 'product 1', price : 100, category:1}, 
    { id: 2, name : 'product 2', price : 200, category:1}, 
    { id: 3, name : 'product 3', price : 300, category:1}, 
    { id: 4, name : 'product 4', price : 400, category:3}, 
    { id: 5, name : 'product 5', price : 500, category:1}, 
    { id: 6, name : 'product 6', price : 600, category:2}, 
    { id: 7, name : 'product 7', price : 700, category:3}, 
    { id: 8, name : 'product 8', price : 800, category:1}, 
    { id: 9, name : 'product 9', price : 900, category:2}, 
    { id: 10, name : 'product 10', price : 1000, category:3},
];

// Для использования относительных путей, необходимо добавить свойство moduleId и установить значение для свойства module.id
// Данное свойство необходимо устанавливать в случае если в проекте используется загрузчик systemJS
@Component({
    moduleId: module.id,
    selector: "my-table",
    templateUrl: "my-table.component.html",
    inputs: ["name"]
    // styleUrls: ["my-table.component.css"]
})

export class MyTableComponent implements OnInit {
    private col:number;
    // private Products:object;
    
    @Input("rows")
    rows: number = 3;
    Products = PRODUCTS.slice(0, this.rows);
    categoryDecriptor = [1, 2, 3];
    ngOnInit() {
        this.col = this.rows;
        this.Products =  PRODUCTS.slice(0, this.col);
        
    }
    constructor(){
        
    }
    getStyles(product) {
        let styles = {};
        if (product.price > 500) {
                styles = {
                "color": "red",
            };
        }        
        return styles;
    }

    onChange(category) {
        this.Products = PRODUCTS.filter(item => item.category == category);
        this.Products = this.Products.slice(0, this.col);
    }
}