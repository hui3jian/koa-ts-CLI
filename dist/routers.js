"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_router_1 = __importDefault(require("./routers/home.router"));
exports.default = [
    {
        path: '/',
        method: 'get',
        action: home_router_1.default.hello,
    },
];
//# sourceMappingURL=routers.js.map