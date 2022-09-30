import React from 'react';
import 'antd/dist/antd.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

const items: MenuProps['items']  = [
    getItem('Cliente', 'sub1', <MailOutlined />, [
      getItem('Ver todos', '1'),
      getItem('Cadastrar', '2'),
      
    ]),
    getItem('Filme', 'sub2', <AppstoreOutlined />, [
      getItem('Ver todos', '3'),
      getItem('Cadastrar', '4'),
    ]),
    getItem('Alocação', 'sub3', <SettingOutlined />, [
      getItem('Ver todos', '5'),
      getItem('Cadastrar', '6'),
    ]),
  ];
const SideBar = () => {

    return(
        <div>
  <Menu
      
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
        </div>

    )}

export default SideBar;
