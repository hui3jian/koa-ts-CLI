"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static hello(params) {
        console.log(params);
        return new Promise(resolve => resolve('hello world'));
    }
}
exports.default = HomeController;
//# sourceMappingURL=home-controller.js.map