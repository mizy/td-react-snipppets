import { TimePicker } from 'antd';

/**
 * 时间选择框
 * value、defaultValue: 接收moment对象
 * 更多api见官网: https://ant.design/components/time-picker-cn/
*/

<TimePicker
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    onChange={(time, timeString) => {
        console.log(time, timeString);
    }}
/>
