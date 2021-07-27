import { DatePicker, TimePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

/**
 * 日期选择框：DatePicker、RangePicker
 * picker: date、week、month、quarter、year
 * 更多api见antd官网: https://ant.design/components/date-picker-cn/
*/

<Space>
    <DatePicker
        onChange={(date, dateString) => {
            console.log(date, dateString);
        }}
    />
    <RangePicker
        showTime
        picker="week"
    />
</Space>
