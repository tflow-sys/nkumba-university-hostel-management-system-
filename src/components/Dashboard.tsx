import { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Select,
  Typography,
  Statistic,
  Space,
  Table,
  Tag,
  Progress,
} from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  AlertOutlined,
  DollarOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import { useHostel } from '@/contexts/HostelContext';
import type { Campus } from '@/types';

const { Title, Text } = Typography;
const { Option } = Select;

export default function Dashboard() {
  const { selectedCampus, setSelectedCampus, selectedHostel, setSelectedHostel } =
    useHostel();

  const hostels = {
    Main: [
      { id: 'nabagereka', name: 'Nabagereka Hostel' },
      { id: 'nkrumah', name: 'Nkrumah Hostel' },
      { id: 'lumumba', name: 'Lumumba Hostel' },
    ],
    Kampala: [
      { id: 'livingstone', name: 'Livingstone Hostel' },
      { id: 'mitchell', name: 'Mitchell Hostel' },
    ],
  };

  const stats = [
    {
      title: 'Total Students',
      value: 1234,
      prefix: <UserOutlined />,
      change: 12,
      trend: 'up',
    },
    {
      title: 'Room Occupancy',
      value: 85,
      prefix: <HomeOutlined />,
      suffix: '%',
      change: 5,
      trend: 'up',
    },
    {
      title: 'Active Complaints',
      value: 23,
      prefix: <AlertOutlined />,
      change: -15,
      trend: 'down',
    },
    {
      title: 'Monthly Revenue',
      value: 52000,
      prefix: <DollarOutlined />,
      change: 18,
      trend: 'up',
    },
  ];

  const recentActivities = [
    {
      key: '1',
      type: 'Check-in',
      student: 'John Doe',
      room: '101',
      time: '2024-02-15 09:30',
      status: 'completed',
    },
    {
      key: '2',
      type: 'Maintenance',
      student: 'Jane Smith',
      room: '205',
      time: '2024-02-15 10:15',
      status: 'pending',
    },
    {
      key: '3',
      type: 'Payment',
      student: 'Mike Johnson',
      room: '304',
      time: '2024-02-15 11:00',
      status: 'processing',
    },
  ];

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Student',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={
          status === 'completed' ? 'success' :
          status === 'pending' ? 'warning' :
          'processing'
        }>
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Dashboard Overview</Title>
          <Text type="secondary">Welcome back, manage your hostel operations efficiently</Text>
        </div>
        <Space>
          <Select
            value={selectedCampus}
            onChange={(value: Campus) => setSelectedCampus(value)}
            style={{ width: 180 }}
          >
            <Option value="Main">Main Campus</Option>
            <Option value="Kampala">Kampala Campus</Option>
          </Select>
          <Select
            value={selectedHostel}
            onChange={(value) => setSelectedHostel(value)}
            style={{ width: 180 }}
          >
            {hostels[selectedCampus].map((hostel) => (
              <Option key={hostel.id} value={hostel.id}>
                {hostel.name}
              </Option>
            ))}
          </Select>
        </Space>
      </div>

      <Row gutter={[16, 16]}>
        {stats.map((stat) => (
          <Col xs={24} sm={12} lg={6} key={stat.title}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                precision={stat.title === 'Room Occupancy' ? 1 : 0}
              />
              <div style={{ marginTop: 8 }}>
                {stat.trend === 'up' ? (
                  <Text type="success">
                    <ArrowUpOutlined /> {stat.change}%
                  </Text>
                ) : (
                  <Text type="danger">
                    <ArrowDownOutlined /> {Math.abs(stat.change)}%
                  </Text>
                )}
                <Text type="secondary"> from last month</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Recent Activities">
            <Table
              columns={columns}
              dataSource={recentActivities}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Occupancy Overview">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Text>Total Capacity</Text>
                <Progress percent={85} status="active" />
              </div>
              <div>
                <Text>Maintenance Rooms</Text>
                <Progress percent={15} status="exception" />
              </div>
              <div>
                <Text>Available Rooms</Text>
                <Progress percent={25} status="success" />
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  );
}