"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.insertDoc = exports.dbDisconnect = exports.dbConnect = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    const uri = process.env.NODE_ENV == "dev" || process.env.NODE_ENV == "test"
        ? process.env.DEV_URI
        : process.env.PROD_URI;
    yield mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
});
exports.dbConnect = dbConnect;
const dbDisconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.disconnect();
    console.log("✅ Disconnected from MongoDB");
});
exports.dbDisconnect = dbDisconnect;
function insertDoc() {
    const Doc = mongoose_1.default.model('Doc', new mongoose_1.Schema({
        date: Number,
        fog_net_id: String,
        cluster_id: String,
        water_collected: Number
    }));
    const doc1 = new Doc({
        date: 2023,
        fog_net_id: "clusterID_302942",
        cluster_id: "clusterID323",
        water_collected: 100.78
    });
    doc1.save();
}
exports.insertDoc = insertDoc;
