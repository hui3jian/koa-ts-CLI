/** @format */

export default class HomeController {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static hello(ctx: any): void {
        // console.log(ctx.params.id)
        console.log(ctx.query.name)
        ctx.response.body = `<h1>Hello, </h1>`
    }
}
