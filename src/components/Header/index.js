import React from 'react'
import {Row, Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            sysTime:''
        }
    }
    componentWillMount() {
        this.setState({
            userName: '汉宝宝'
        })
        setInterval(()=>{
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
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
                        <span className="date">{this.state.sysTime}</span>
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