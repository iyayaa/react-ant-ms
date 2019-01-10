import React from 'react'
import {Row, Col} from 'antd'
import './index.less'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        this.setState({
            userName: '汉宝宝'
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="logout">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">2019-5-5</span>
                        <span className="weather-img">
                            <img src="" alt="" />
                        </span>
                        <span className="weather-detail">
                            晴转多云啊
                        </span>
                    </Col>
                </Row>

            </div>
        )
    }
}