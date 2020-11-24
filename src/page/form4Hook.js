import { Form, Input, Button, Checkbox, Select } from "antd";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            {...layout}
            form={form}
            initialValues={{ gender: "male", remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: "Please input your username!" },
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};
