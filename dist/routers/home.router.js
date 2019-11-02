"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = __importDefault(require("../controllers/home-controller"));
class HomeRouter {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async hello(ctx) {
        ctx.body = await home_controller_1.default.hello(ctx);
    }
}
exports.default = HomeRouter;
//# sourceMappingURL=home.router.js.map