import { Form, Icon, Input, Button, Checkbox } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

export default Form.create()((props) => {
    const { visible, data, form, close, onSubmit } = props;
    const { getFieldDecorator } = form;

    const onOk = () => {
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                onSubmit && onSubmit(values);
            }
        });
    };

    return (
        <Modal
            title={data.id ? '编辑' : '新建'}
            visible={visible}
            destroyOnClose
            onCancel={close}
            onOk={onOk}
        >
            <Form {...formItemLayout}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        initialValue: '小王',
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input placeholder="Username" />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                </Form.Item>
            </Form>
        </Modal>
    );
})
