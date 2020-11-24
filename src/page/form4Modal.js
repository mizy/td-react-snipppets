import React, { useState } from "react";
import { Form, Input, Select, Modal, message, Button } from "antd";
import service from "../service";

const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
};

export default (props) => {
    const { visible, editItem, search, onCancel } = props;

    const isCreate = !editItem?.id;

    const [form] = Form.useForm();

    const [confirmLoading, setConfirmLoading] = useState(false);

    const onFinish = (values) => {
        console.log("Received values from form: ", values);

        const newValues = { ...editItem, ...values };

        setConfirmLoading(true);

        service[`${isCreate ? "create" : "update"}`](newValues)
            .then(() => {
                onCancel();
                search();
                message.success("保存成功");
            })
            .finally(() => {
                setConfirmLoading(false);
            });
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Modal
            title={`${isCreate ? "新建" : "更新"}数据源`}
            visible={visible}
            destroyOnClose
            onCancel={onCancel}
            footer={
                <div>
                    <Button onClick={onCancel}>取消</Button>
                    <Button htmlType="button" onClick={onReset}>
                        重置
                    </Button>
                    <Button
                        type="primary"
                        loading={confirmLoading}
                        onClick={form.submit}
                    >
                        保存
                    </Button>
                </div>
            }
        >
            <Form
                {...formItemLayout}
                form={form}
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                    ...editItem,
                }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true }]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Select.Option value="male">male</Select.Option>
                        <Select.Option value="female">female</Select.Option>
                        <Select.Option value="other">other</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) =>
                        prevValues.gender !== currentValues.gender
                    }
                >
                    {({ getFieldValue }) => {
                        return getFieldValue("gender") === "other" ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
            </Form>
        </Modal>
    );
};
