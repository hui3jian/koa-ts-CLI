/** @format */

const ENV: string | undefined = process.env.NODE_ENV

interface ConfigITF {
    PORT: string
    SQL_PORT: string
    SQL_HOST: string
    SQL_USER: string
    SQL_PASSWORD: string
    SQL_DATABASE: string
}

let config: ConfigITF

if (ENV === 'develop') {
    /* 开发环境 */
    config = {
        PORT: '3303',
        SQL_PORT: '3306',
        SQL_HOST: 'localhost',
        SQL_USER: 'root',
        SQL_PASSWORD: 'root',
        SQL_DATABASE: 'art',
    }
} else if (ENV === 'test') {
    /* 测试环境 */
    config = {
        PORT: '3303',
        SQL_PORT: '3306',
        SQL_HOST: '192.168.1.30',
        SQL_USER: 'ndxdev',
        SQL_PASSWORD: 'ndx1016',
        SQL_DATABASE: 'nds',
    }
} else {
    /* 正式环境 */
    config = {
        PORT: '3303',
        SQL_PORT: '3306',
        SQL_HOST: 'localhost',
        SQL_USER: 'dev',
        SQL_PASSWORD: 'ndxdev0712',
        SQL_DATABASE: 'art',
    }
}

export default config
