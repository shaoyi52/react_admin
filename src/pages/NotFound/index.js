/*
 * @Author: yuzhoufen
 * @Date: 2020-08-28 15:23:43
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-11 10:43:20
 * @Description: Do not edit
 * @FilePath: \my-app\src\pages\NotFound\index.js
 */
import React from 'react'
import { Spin } from 'antd'
//import "./index.less";

export default class NotFound extends React.Component {
    state = {
        status: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                status: false,
            })
        })
    }

    componentWillUnmount() {
        //卸载异步操作设置状态
        this.setState = (state, callback) => {
            return
        }
    }

    render() {
        if (this.state.status) {
            return (
                <div className="loading">
                    <Spin tip="loading..." />
                </div>
            )
        }
        return <div className="loading">NotFound 404</div>
    }
}
