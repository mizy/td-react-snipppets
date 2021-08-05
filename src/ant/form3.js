
import { Form, Select, Input } from 'antd';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

<Form {...formItemLayout}>
    <Form.Item
        label='姓名'
        validateStatus="error"
    >
        <Input placeholder="请输入用户名" />
    </Form.Item>
    <Form.Item
        label='账号'
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
    >
        <Input placeholder="请输入账号" />
    </Form.Item>
    <Form.Item
        label='邮箱'
        hasFeedback
        validateStatus="success"
    >
        <Input placeholder="请输入邮箱" />
    </Form.Item>
    <Form.Item label='团队'>
        <Select placeholder='请选择团队'>
            <Option value={1}>团队1</Option>
            <Option value={2}>团队2</Option>
            <Option value={3}>团队3</Option>
        </Select>
    </Form.Item>
</Form>
