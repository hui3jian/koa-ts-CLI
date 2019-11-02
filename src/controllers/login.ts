/** @format */
export default class HomeController {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static login(ctx: any): void {
        // console.log(ctx.params.id)
        console.log(ctx.request.body)
        const account: string = ctx.request.body.account
        const password: string = ctx.request.body.password
        console.log(account)
        console.log(password)
        if (account === 'admin' && password === 'admin.123321') {
            ctx.response.body = {
                code: 200,
                msg: '登录成功',
                data: {},
            }
            return
        }
        // ctx.response.body = `<h1>login, </h1>`
    }
}
