/*
 * @Author: yuzhoufen
 * @Date: 2021-11-05 11:28:42
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-05 15:46:06
 * @Description: Do not edit
 * @FilePath: \my-app\.eslintrc.js
 */
module.exports = {
        "env": {
                //环境定义了预定义的全局变量。更多在官网查看
                "browser": true,
                "node": true,
                "commonjs": true,
                "amd": true,
                "es6": true,
                "mocha": true
        },
        "extends": [
                "eslint:recommended",
                "plugin:react/recommended"
            ],
        "parserOptions": {
                // ECMAScript 版本
                "ecmaVersion": 6,
                "sourceType": "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
                //想使用的额外的语言特性:
                "ecmaFeatures": {
                // 允许在全局作用域下使用 return 语句
                "globalReturn": true,
                // impliedStric
                "impliedStrict": true,
                // 启用 JSX
                "jsx": true,
                "modules": true
                }
        },

        "plugins": [
                "react"
        ],
        "rules": {
                //禁止未使用变量
                "no-unused-vars":0,
                // 禁止 function 定义中出现重名参数
                "no-dupe-args": 2,
                // 禁止对象字面量中出现重复的 key
                "no-dupe-keys": 0        
        }
};