/*
 * @Author: yuzhoufen
 * @Date: 2020-08-19 14:24:34
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-05 17:31:17
 * @Description: Do not edit
 * @FilePath: \my-app\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import * as serviceWorker from './serviceWorker'
import App from './App'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
