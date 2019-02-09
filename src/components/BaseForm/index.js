import React from 'react';
import {  Button, Form, Select, DatePicker } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id',{
                            initialValue: '1'
                        })(
                            <Select style={{ width: '100px' }}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">上海市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="开始时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </FormItem>
                <FormItem label="结束时间">
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode',{
                            initialValue: ''
                        })(
                            <Select style={{ width: '150px' }}>
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">进行中（临时锁车）</Option>
                                <Option value="3">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary">查询</Button>
                    <Button style={{marginLeft: 20}}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({})(FilterForm)