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
exports.CustomerModel = exports.Customer = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Job {
    constructor(title, company) {
        this.title = title;
        this.company = company;
    }
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Job.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Job.prototype, "company", void 0);
class Customer {
    constructor(name, age, title, company) {
        this.name = name;
        this.age = age;
        this.job = new Job(title, company);
    }
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Customer.prototype, "age", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Job)
], Customer.prototype, "job", void 0);
exports.Customer = Customer;
const CustomerModel = (0, typegoose_1.getModelForClass)(Customer);
exports.CustomerModel = CustomerModel;
