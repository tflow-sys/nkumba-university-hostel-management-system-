import { useState } from 'react';
import {
  HomeOutlined,
  BuildOutlined,
  UserOutlined,
  FileTextOutlined,
  ToolOutlined,
  AlertOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Badge, Avatar, theme, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

const navigation = [
  { key: '1', label: 'Dashboard', icon: <HomeOutlined />, path: '/' },
  { key: '2', label: 'Room Management', icon: <BuildOutlined />, path: '/rooms' },
  { key: '3', label: 'Student Management', icon: <UserOutlined />, path: '/students' },
  { key: '4', label: 'Payment & Finance', icon: <CreditCardOutlined />, path: '/finance' },
  { key: '5', label: 'Complaints', icon: <AlertOutlined />, path: '/complaints' },
  { key: '6', label: 'Inventory & Maintenance', icon: <ToolOutlined />, path: '/inventory' },
  { key: '7', label: 'Graduation Clearance', icon: <SafetyCertificateOutlined />, path: '/clearance' },
  { key: '8', label: 'Reports & Analytics', icon: <BarChartOutlined />, path: '/reports' },
  { key: '9', label: 'Settings', icon: <SettingOutlined />, path: '/settings' },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const userMenu: MenuProps['items'] = [
    { key: '1', label: 'Profile' },
    { key: '2', label: 'Settings' },
    { key: '3', type: 'divider' },
    { key: '4', label: 'Logout' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div style={{ height: 64, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, fontSize: collapsed ? 16 : 20 }}>
            {collapsed ? 'HM' : 'Hostel Manager'}
          </h1>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={navigation}
          style={{ borderRight: 0 }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Badge count={4}>
                <Button type="text" icon={<BellOutlined />} />
              </Badge>
              <Dropdown menu={{ items: userMenu }} placement="bottomRight">
                <Avatar style={{ cursor: 'pointer' }}>AD</Avatar>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}