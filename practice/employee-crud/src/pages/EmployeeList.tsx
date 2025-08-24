import React, { useState } from 'react';
import {
  Table, Button, Space, Card, Form, Modal,
  Input, Popconfirm, DatePicker, Select, Switch
} from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import type { IEmployee } from '../enums/employee';
import { useEmployees, useAddEmployee, useUpdateEmployee, useDeleteEmployee } from '../hooks/employee.hook';

const EmployeePage: React.FC = () => {
  const [formAdd] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  // Pagination state
  const [page, setPage] = useState(1);
  const [limit] = useState(2);

  // Show/hide modal
  const handleShowModalAdd = () => setIsModalAddOpen(true);
  const handleOkAdd = () => formAdd.submit();
  const handleCancelAdd = () => setIsModalAddOpen(false);

  const showModalUpdate = () => setIsModalUpdateOpen(true);
  const handleOkUpdate = () => formUpdate.submit();
  const handleCancelUpdate = () => setIsModalUpdateOpen(false);

  // Queries & mutations
  const { data, isLoading } = useEmployees(page, limit);
  const addMutation = useAddEmployee();
  const updateMutation = useUpdateEmployee();
  const deleteMutation = useDeleteEmployee();

  const onHandleFinishAddEmployee = async (values: any) => {
    await addMutation.mutateAsync(values);
    setIsModalAddOpen(false);
  };

  const onHandleFinishUpdateEmployee = async (values: any) => {
    const payload = {
      fullName: values.fullName,
      email: values.email,
      dateOfBirth: values.dateOfBirth ? dayjs(values.dateOfBirth).format("YYYY-MM-DD") : undefined,
      gender: values.gender,
      phoneNumber: values.phoneNumber,
      active: values.active,
    };

    await updateMutation.mutateAsync({ id: values.id, employee: payload });
    setIsModalUpdateOpen(false);
  };

  const columns: TableProps<IEmployee>["columns"] = [
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Date of Birth', dataIndex: 'dateOfBirth', key: 'dateOfBirth' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Active', dataIndex: 'active', key: 'active', render: val => (val ? 'Yes' : 'No') },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => {
            formUpdate.setFieldsValue({
              ...record,
              dateOfBirth: record.dateOfBirth ? dayjs(record.dateOfBirth) : undefined,
            });
            showModalUpdate();
          }}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this employee?"
            onConfirm={() => deleteMutation.mutate(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <div className="min-h-full">
      <Card title="Employees List" extra={<Button type="primary" onClick={handleShowModalAdd}>New Employee</Button>}>
        {isLoading ? <div>Loading...</div> : (
          <Table
            rowKey="id"
            dataSource={Array.isArray(data?.data?.content) ? data.data.content : []}
            columns={columns}
            pagination={{
              current: page,
              pageSize: limit,
              onChange: (p) => setPage(p),
              total: data?.data?.totalElements || 0,
            }}
          />
        )}
      </Card>

      {/* Add Modal */}
      <Modal title="Add Employee" open={isModalAddOpen} onOk={handleOkAdd} onCancel={handleCancelAdd}>
        <Form form={formAdd} layout="vertical" onFinish={onHandleFinishAddEmployee}>
          <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Date of Birth" name="dateOfBirth" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
            <Select options={[{ label: 'Male', value: 'MALE' }, { label: 'Female', value: 'FEMALE' }]} />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Active" name="active" valuePropName="checked" initialValue={true}>
            <Switch />
          </Form.Item>
        </Form>
      </Modal>

      {/* Update Modal */}
      <Modal title="Update Employee" open={isModalUpdateOpen} onOk={handleOkUpdate} onCancel={handleCancelUpdate}>
        <Form form={formUpdate} layout="vertical" onFinish={onHandleFinishUpdateEmployee}>
          <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Date of Birth" name="dateOfBirth" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
            <Select options={[{ label: 'Male', value: 'MALE' }, { label: 'Female', value: 'FEMALE' }]} />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Active" name="active" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item hidden name="id">
            <Input hidden />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeePage;
