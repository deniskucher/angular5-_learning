"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VALUES = [
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
var PRODUCTS = [
    { id: 1, name: 'product 1', price: 100, category: 1 },
    { id: 2, name: 'product 2', price: 200, category: 1 },
    { id: 3, name: 'product 3', price: 300, category: 1 },
    { id: 4, name: 'product 4', price: 400, category: 3 },
    { id: 5, name: 'product 5', price: 500, category: 1 },
    { id: 6, name: 'product 6', price: 600, category: 2 },
    { id: 7, name: 'product 7', price: 700, category: 3 },
    { id: 8, name: 'product 8', price: 800, category: 1 },
    { id: 9, name: 'product 9', price: 900, category: 2 },
    { id: 10, name: 'product 10', price: 1000, category: 3 },
];
// Для использования относительных путей, необходимо добавить свойство moduleId и установить значение для свойства module.id
// Данное свойство необходимо устанавливать в случае если в проекте используется загрузчик systemJS
var MyTableComponent = /** @class */ (function () {
    function MyTableComponent() {
        // private Products:object;
        this.rows = 3;
        this.Products = PRODUCTS.slice(0, this.rows);
        this.categoryDecriptor = [1, 2, 3];
    }
    MyTableComponent.prototype.ngOnInit = function () {
        this.col = this.rows;
        this.Products = PRODUCTS.slice(0, this.col);
    };
    MyTableComponent.prototype.getStyles = function (product) {
        var styles = {};
        if (product.price > 500) {
            styles = {
                "color": "red",
            };
        }
        return styles;
    };
    MyTableComponent.prototype.onChange = function (category) {
        this.Products = PRODUCTS.filter(function (item) { return item.category == category; });
        this.Products = this.Products.slice(0, this.col);
    };
    __decorate([
        core_1.Input("rows"),
        __metadata("design:type", Number)
    ], MyTableComponent.prototype, "rows", void 0);
    MyTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-table",
            templateUrl: "my-table.component.html",
            inputs: ["name"]
            // styleUrls: ["my-table.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], MyTableComponent);
    return MyTableComponent;
}());
exports.MyTableComponent = MyTableComponent;
//# sourceMappingURL=my-table.component.js.map