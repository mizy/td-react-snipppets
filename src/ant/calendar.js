import { Calendar } from 'antd';

<Calendar
    onPanelChange={(value, mode) => {
        console.log(value, mode);
    }}
    dateCellRender={(date) => {
        // date:moment
        console.log(date)
    }}
    monthCellRender={(date) => {
        // date:moment
        console.log(date)
    }}
    onSelect={(date) => {
        // date:moment
        console.log(date)
    }}
/>
