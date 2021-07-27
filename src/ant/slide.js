import { Slider, Switch } from 'antd';

/**
 * range：双滑块模式
 * 更多api见官网：https://ant.design/components/slider-cn/
*/
<Slider
    range
    min={1}
    max={20}
    defaultValue={[20, 50]}
    disabled={disabled}
    onChange={(value) => {
        console.log('onChange: ', value);
    }}
/>
