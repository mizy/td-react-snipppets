import React, { PureComponent } from 'react';
import { Form, Input, Button, Select } from "antd";
import service from './service';        // service引入示例
import './index.less';                  // less样式引入示例

export default class extends PureComponent {
    constructor(props) {
        super(props);
    }

    state = {
        list: [],
        params: {
            curPage: 1,
            pageSize: 10
        }
    };

    componentDidMount() {
        // 组件已经挂载
        // 示例：执行 this 里的方法
        this.getList();
    }

    componentDidUpdate(preProps) {
        // 组件更新
    }

    componentWillUnmount() {
        // 组件卸载
    }

    getList = (obj) => {
        service.getUserList({
            ...this.state.params,
            ...obj
        }).then(res => {
            this.setState({
                list: res?.data?.list || []
            })
        })
    };

    render() {
        let { list = [], params = {} } = this.state;

        return (
            <div>
                hello world
            </div>
        );
    }
}
