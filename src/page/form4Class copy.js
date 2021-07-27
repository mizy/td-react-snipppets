import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default class extends React.Component {
    formRef = React.createRef();

    onFinish = (values) => {
        console.log(values);
    };
    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };

    render() {
        return (
            <Form
                {...layout}
                ref={this.formRef}
                initialValues={{ gender: "male", remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true,message: "Please input your username!"}, ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true,},]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
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
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
