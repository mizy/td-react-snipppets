import { Fragment } from 'react';
import { Form, Select, Icon, Input, Button, Checkbox, Modal } from 'antd';

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

export default Form.create()((props) => {
    const { visible, data = {}, form, close, onSubmit } = props;
    const { getFieldDecorator } = form;

    const onOk = () => {
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                onSubmit && onSubmit(values);
            }
        });
    };

    const teamList = [
        {
            "id": 1,
            "name": "产品技术部",
        },
        {
            "id": 2,
            "name": "客户交付部",
        },
        {
            "id": 3,
            "name": "平台技术部",
        },
        {
            "id": 4,
            "name": "人力资源部",
        },
        {
            "id": 5,
            "name": "市场公关部",
        }
    ]

    return (
        <Modal
            title={data.id ? '编辑' : '新建'}
            visible={visible}
            destroyOnClose
            onCancel={close}
            onOk={onOk}
        >
            <Form {...formItemLayout}>
                <Form.Item label='姓名'>
                    {getFieldDecorator('nickname', {
                        initialValue: '小王',
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input placeholder="请输入用户名" />,
                    )}
                </Form.Item>
                <Form.Item label='账号'>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: '请输入账号' }],
                    })(
                        <Input placeholder="请输入账号" />,
                    )}
                </Form.Item>
                <Form.Item label='邮箱'>
                    {getFieldDecorator('email', {
                        rules: [{ required: false, message: '请输入邮箱' }],
                    })(
                        <Input placeholder="请输入邮箱" />,
                    )}
                </Form.Item>
                <Form.Item label='团队'>
                    {getFieldDecorator('team', {
                        rules: [{ required: false, message: '请选择团队' }],
                    })(
                        <Select placeholder='请选择团队'>
                            {
                                (teamList || []).map((item, index) => (
                                    <Option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </Option>
                                ))
                            }
                        </Select>,
                    )}
                </Form.Item>
            </Form>
        </Modal>
    );
})
