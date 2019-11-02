/** @format */

import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import AppRoutes from './routers'
import ENV_CONFIG from './env.config'
import Cors from 'koa2-cors'

const app: Koa = new Koa()
const router: Router = new Router()
const PORT: string | undefined = ENV_CONFIG.PORT

/** @路由 */
AppRoutes.forEach(route => {
    const METHOD: string = route.method
    const PATH: string = route.path
    const ACTION = route.action

    if (!METHOD || !PATH || !ACTION) {
        console.error('ERROR: ' + '路由设置错误，请检查是否已经设置了请求方式、请求路径、逻辑方法。')
        return
    }

    if (METHOD === 'get') router.get(PATH, ACTION)
    if (METHOD === 'post') router.post(PATH, ACTION)
    if (METHOD === 'all') router.all(PATH, ACTION)
})

/** @初始化 */
app.use(
    Cors({
        origin: function(ctx: any) {
            return '*'
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }),
)
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

/** @监听端口 */
app.listen(PORT)
console.log('当前环境：localhost，端口为：' + PORT)
