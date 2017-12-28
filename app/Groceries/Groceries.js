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
var GroceriesComponent = (function () {
    function GroceriesComponent() {
        this.defaultData = [
            { "title": "Category 1", "type": 0 },
            { "title": "Category 2", "type": 1 },
            { "title": "Category 3", "type": 0 },
            { "title": "Category 4", "type": 1 },
            { "title": "Category 5", "type": 0 },
            { "title": "Category 6", "type": 1 },
            { "title": "Category 7", "type": 1 },
            { "title": "Category 8", "type": 0 }
        ];
        this.modeEdit = false;
        this.filter = false;
        this.state = '';
        if (!localStorage.getItem('Data')) {
            localStorage.setItem('Data', JSON.stringify(this.defaultData));
        }
        this._getDefaultData();
    }
    GroceriesComponent.prototype.onToggleMove = function (index) {
        this.Orders[index].type = (this.Orders[index].type) ? 0 : 1;
        this._setDefaultData();
    };
    GroceriesComponent.prototype.onFilter = function (value) {
        this.filter = value;
        /*if(!value) return this._getDefaultData();
        let result = this.Orders.filter(function(item) {
            return item.type == value;
        });

        this.Orders = result;*/
    };
    GroceriesComponent.prototype.onModeEdit = function () {
        this.modeEdit = (this.modeEdit) ? false : true;
    };
    GroceriesComponent.prototype.onRemoveItem = function (index) {
        console.log(this.Orders);
        this.Orders.splice(index, 1);
        console.log(this.Orders);
        this._setDefaultData();
    };
    GroceriesComponent.prototype.onAddItem = function () {
        var _this = this;
        console.log(bootbox);
        bootbox.prompt("Add new list item", function (res) {
            if (res === null)
                return;
            if (res.trim() == '')
                return bootbox.alert('Поле не может быть пустым');
            _this.Orders.unshift({ "title": res, "type": 0 });
            _this._setDefaultData();
        });
    };
    GroceriesComponent.prototype.onResetData = function () {
        localStorage.setItem('Data', JSON.stringify(this.defaultData));
        this._getDefaultData();
    };
    GroceriesComponent.prototype._getDefaultData = function () {
        this.Orders = JSON.parse(localStorage.getItem('Data'));
        console.log(this.Orders);
    };
    GroceriesComponent.prototype._setDefaultData = function () {
        localStorage.setItem('Data', JSON.stringify(this.Orders));
        console.log(this.Orders);
    };
    GroceriesComponent.prototype.ngOnInit = function () { this.log("onInit"); };
    GroceriesComponent.prototype.ngOnDestroy = function () { this.log("onDestroy"); };
    GroceriesComponent.prototype.log = function (msg) {
        console.log(msg);
    };
    GroceriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Groceries',
            templateUrl: "Groceries.html",
            animations: [
                // не доделал...
                core_1.trigger('focusPanel', [
                    core_1.state('car', core_1.style({
                        transform: 'scale(1)',
                        position: 'absolute',
                        left: '0px'
                    })),
                    core_1.state('home', core_1.style({
                        transform: 'scale(1.1)',
                        position: 'absolute',
                        right: '0px'
                    })),
                    core_1.transition('car => home', core_1.animate('100ms ease-in')),
                    core_1.transition('home => car', core_1.animate('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], GroceriesComponent);
    return GroceriesComponent;
}());
exports.GroceriesComponent = GroceriesComponent;
//# sourceMappingURL=Groceries.js.map