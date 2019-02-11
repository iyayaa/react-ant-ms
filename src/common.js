import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import './style/common.less'
export default class Common extends React.Component {

    render() {
        return (
            <div style={{background:'#f1f3f5','min-height':'100vh'}} >
                <Row className="simple-page">
                    <Header menuType="second" />
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}