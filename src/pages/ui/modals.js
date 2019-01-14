import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'

export default class Modals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        };
    };
    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    };
    handleConfirm = (type)=>{
        Modal[type]({
            title:'确认？',
            content:'真的吗？（各种类型的信息提示，只提供一个按钮用于关闭。）',
            onOk(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    };


    render() {
        return (
            <div>
                <Card title="基础对话框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="Open"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>欢迎使用</p>
                </Modal>
                <Modal
                    title="自定义页脚"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>欢迎品尝</p>
                </Modal>
                <Modal
                    title="顶部20px弹框"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>23333</p>
                </Modal>
                <Modal
                    title="水平垂直居中"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>23333</p>
                </Modal>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
            </div>
        );
    }
}