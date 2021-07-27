import { Select } from 'antd';
const { Option } = Select;

<Select
    value={"jack" || undefined}
    style={{ width: 120 }}
    onChange={() => {

    }}
    placeholder="请选择"
>
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="disabled" disabled>
        Disabled
    </Option>
</Select>
