"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
/**
 * Finds all customer docs in DB
 * @returns promise with all customer docs or error
 */
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () { return models_1.CustomerModel.find({}); });
/**
 * Finds a customer doc by id
 * @param id customer id
 * @returns promise with customer doc or error
 */
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () { return models_1.CustomerModel.find({ _id: id }); });
/**
 * Updates the name of a customer in DB
 * @param id customer id
 * @param name new name
 * @returns promise with original customer doc or error
 */
const updateName = (id, name) => __awaiter(void 0, void 0, void 0, function* () { return models_1.CustomerModel.findOneAndUpdate({ _id: id }, { name: name }); });
/**
 * Inserts new customer into DB
 * @param name customer name
 * @param age customer age
 * @param title customer job title
 * @param company customer job company
 * @returns promise with new customer doc or error
 */
const insertCustomer = (name, age, title, company) => __awaiter(void 0, void 0, void 0, function* () { return models_1.CustomerModel.create(new models_1.Customer(name, age, title, company)); });
/**
 * Resets ages of all customers in DB to 0
 * @returns number of customers whose age was reset
 */
const resetAges = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield getCustomers();
    customers.forEach((customer) => __awaiter(void 0, void 0, void 0, function* () {
        customer.age = 0;
        yield customer.save();
    }));
    return customers.length;
});
exports.default = {
    getCustomers,
    getCustomerById,
    updateName,
    insertCustomer,
    resetAges,
};
