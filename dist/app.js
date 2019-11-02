"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const routers_1 = __importDefault(require("./routers"));
const app = new koa_1.default();
const router = new koa_router_1.default();
const PORT = process.env.PORT || 3333;
console.log(process.env.NODE_ENV);
/** @路由 */
routers_1.default.forEach(route => {
    const METHOD = route.method;
    const PATH = route.path;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ACTION = route.action;
    if (!METHOD || !PATH || !ACTION) {
        console.error('ERROR: ' + '路由设置错误，请检查是否已经设置了请求方式、请求路径、逻辑方法。');
        return;
    }
    if (METHOD === 'get')
        router.get(PATH, ACTION);
    if (METHOD === 'post')
        router.post(PATH, ACTION);
    if (METHOD === 'all')
        router.all(PATH, ACTION);
});
/** @初始化 */
app.use(koa_bodyparser_1.default);
app.use(router.routes());
app.use(router.allowedMethods());
/** @监听端口 */
app.listen(PORT);
console.log('当前环境：localhost，端口为：' + PORT);
//# sourceMappingURL=app.js.map