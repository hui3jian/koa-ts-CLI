/** @format */

import HomeController from './controllers/home'
import LoginController from './controllers/login'

export default [
    {
        path: '/login',
        method: 'post',
        action: LoginController.login,
    },
    {
        path: '/home',
        method: 'get',
        action: HomeController.hello,
    },
]
