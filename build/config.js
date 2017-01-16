/*
 ** 配置文件
 */

const path = require('path');

const DEV_HOST = 'http://localhost:3000'

const now = new Date()
const PAGE_TIME = now.getTime();

module.exports = {
    // 默认 动态生成 目录下的 entries ( src/[name]/ 下含有 app.js 的情况下生成 对应的 [name].js)
    // 
    entries: {
        // test: './src/meal/app.js'
    },

    server: {
        staticRoot: path.resolve(__dirname, '../'),
        port: 3000
    },

    build: {
        assetsRoot: path.resolve(__dirname, '../assets'),
        assetsSrcRoot: path.resolve(__dirname, '../src'),
        assetsPublicPath:'/assets/',

        // 基础 URL 地址, 根据环境变量加载不同的配置文件
        ENV_BASE_URL: path.resolve(__dirname ,"../src/config/" , (process.env.NODE_ENV || "dev"))
    },

    // 打包的时候需要替换的内容
    patterns: {
        dev: [
            {
                match: /(\.\.\/js)/g,
                replacement: DEV_HOST + '/nginx/meal/js'
            },
            {
                match: /(\.\.\/public)/g,
                replacement: DEV_HOST + '/nginx/meal/public'
            },
            {
                match: /(\.\.\/images)/g,
                replacement: DEV_HOST + '/nginx/meal/images'
            },
            {
                match: /(\.\.\/css)/g,
                replacement: DEV_HOST + '/nginx/meal/css'
            },
            {
                match: /(\.\.\/page)/g,
                replacement: DEV_HOST + '/nginx/meal/page'
            },
            {
                match: "grunt_page_time",
                replacement: PAGE_TIME
            }
        ],
        daily: [
            {
                match: /(\.\.\/public)/g,
                replacement: 'http://d.2dfire-daily.com/meal/public'
            },
            {
                match: /(\.\.\/images)/g,
                replacement: 'http://d.2dfire-daily.com/meal/images'
            },
            {
                match: /(\.\.\/css)/g,
                replacement: 'http://d.2dfire-daily.com/meal/css'
            },
            {
                match: /(\.\.\/js)/g,
                replacement: 'http://d.2dfire-daily.com/meal/js'
            },
            {
                match: /(\.\.\/page)/g,
                replacement: 'http://api.l.whereask.com/daily/page'
            },
            {
                match: /(\.\.\/\.\.\/marketing)/g,
                replacement: 'http://api.l.whereask.com/marketing'
            },
            {
                match: /(\.\.\/\.\.\/bill)/g,
                replacement: 'http://api.l.whereask.com/bill'
            },
            {
                match: /(grunt_env_dev)/g,
                replacement: "grunt_env_daily"
            },
            {
                match: /(grunt_page_time)/g,
                replacement: PAGE_TIME
            }
        ],
        pre: [
            {
                match: /(\.\.\/js)/g,
                replacement: 'http://d2.2dfire-pre.com/meal/js'
            },
            {
                match: /(\.\.\/public)/g,
                replacement: 'http://cdn.2dfire-pre.com/meal/public'
            },
            {
                match: /(\.\.\/img)/g,
                replacement: 'http://cdn.2dfire-pre.com/meal/img'
            },
            {
                match: /(\.\.\/css)/g,
                replacement: 'http://cdn.2dfire-pre.com/meal/css'
            },
            {
                match: /(\.\.\/page)/g,
                replacement: 'http://d.2dfire-pre.com/meal/page'
            },
            {
                match: /(\.\.\/\.\.\/marketing)/g,
                replacement: 'http://d.2dfire-pre.com/marketing'
            },
            {
                match: /(\.\.\/\.\.\/bill)/g,
                replacement: 'http://d.2dfire-pre.com/bill'
            },
            {
                match: /(grunt_env_dev)/g,
                replacement: "grunt_env_pre"
            },
            {
                match: /(grunt_page_time)/g,
                replacement: PAGE_TIME
            }
        ],
        publish: [
            {
                match: /(\.\.\/public\/images\/0.gif)/g,
                replacement: 'https://trace.2dfire.com/0.gif'
            },
            {
                match: /(\.\.\/public)/g,
                replacement: '//jscdn.2dfire.com/meal/public'
            },
            {
                match: /(\.\.\/images)/g,
                replacement: 'https://imgcdn.2dfire.com/meal/images'
            },
            {
                match: /(\.\.\/css)/g,
                replacement: '//csscdn.2dfire.com/meal/css'
            },
            {
                match: /(\.\.\/js)/g,
                replacement: '//jscdn.2dfire.com/meal/js'
            },
            {
                match: /(\.\.\/page)/g,
                replacement: 'https://d.2dfire.com/meal/page'
            },
            {
                match: /(\.\.\/\.\.\/marketing)/g,
                replacement: 'https://d.2dfire.com/marketing'
            },
            {
                match: /(\.\.\/\.\.\/bill)/g,
                replacement: 'https://d.2dfire.com/bill'
            },
            {
                match: /(grunt_env_dev)/g,
                replacement: "grunt_env_release"
            },
            {
                match: /(grunt_page_time)/g,
                replacement: PAGE_TIME
            },
        ]
    },

}