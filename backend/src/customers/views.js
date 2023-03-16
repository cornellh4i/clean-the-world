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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const controllers_1 = __importDefault(require("./controllers"));
// Note: we should use a try/catch to choose successJson or errorJson for responses
// this has been left out of this snippet for brevity
const jsonResponses_1 = require("../utils/jsonResponses");
const customerRouter = (0, express_1.Router)();
customerRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield controllers_1.default.getCustomers());
}));
customerRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose_1.default.Types.ObjectId(req.params.id);
    res.send((0, jsonResponses_1.successJson)(yield controllers_1.default.getCustomerById(id)));
}));
customerRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, title, company } = req.body;
    res.send((0, jsonResponses_1.successJson)(yield controllers_1.default.insertCustomer(name, age, title, company)));
}));
customerRouter.post("/updateName/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose_1.default.Types.ObjectId(req.params.id);
    const name = req.body.name;
    res.send((0, jsonResponses_1.successJson)(yield controllers_1.default.updateName(id, name)));
}));
customerRouter.post("/resetAges", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const numResets = yield controllers_1.default.resetAges();
    res.send((0, jsonResponses_1.successJson)(numResets));
}));
exports.default = customerRouter;
