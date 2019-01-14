import React from 'react'
import './index.less'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd'
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;




export default class NavLeft extends React.Component {

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)

        this.setState({menuTreeNode})   //调用setState时会调用render
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map( (item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return (<Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>);
        } )
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Ilin MS</h1>
                </div>
                <Menu theme="dark">
                    {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu> */}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}