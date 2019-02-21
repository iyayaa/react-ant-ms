import React from 'react'
import { Select } from 'antd'
import axios from '../axios'

const Option = Select.Option

export default {
    formatDate(time) {
        if (!time) {
            return ''
        }
        let date = new Date(time)
        return (
            date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +
            " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        )

    },
    // 分页
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total,
            showTotal: () => {
                return `共${data.result.total}条`
            },
            showQuickJumper: true
        }
    },
    // 生成下拉框选项
    getOptionList(data) {
        if (!data) {
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.map((item) => {
            return options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    },
    // 请求列表数据
    requestList(_this, url, params, isMock) {
        var data = {
            params: params,
            isMock
        }
        axios.ajax({
            url,
            data
        }).then((data) => {
            if (data && data.result) {
                let dataSource = data.result.item_list.map((item, index) => {
                    item.key = index;
                    return item
                });
                _this.setState({
                    dataSource,
                    pagination: this.pagination(data, current => {
                        _this.params.page = current;
                        _this.requestList();
                    })
                });
            }
        })
    },
        /**
     * ETable 行点击通用函数
     * @param {*选中行的索引} selectedRowKeys
     * @param {*选中行对象} selectedItem
     */
    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
        if(selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    },

}