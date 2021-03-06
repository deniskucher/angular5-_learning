"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sample1Component = /** @class */ (function () {
    function Sample1Component() {
    }
    // ngOnInit - Lifecycle hook, который вызывается после установки data-bound свойств
    Sample1Component.prototype.ngOnInit = function () {
        console.log(this.name + " initialized.");
    };
    Sample1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "sample1",
            templateUrl: "sample1.component.html",
            inputs: ["name"]
        })
    ], Sample1Component);
    return Sample1Component;
}());
exports.Sample1Component = Sample1Component;
//# sourceMappingURL=sample1.component.js.map