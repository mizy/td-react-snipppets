import { Popconfirm } from 'antd';

<Popconfirm
    title="Are you sure delete this task?"
    onConfirm={() => {

    }}
    onCancel={() => {

    }}
    okText="Yes"
    cancelText="No"
    placement="top"	// topLeft，top，topRight，leftTop，left，leftBottom，rightTop，right，rightBottom等
>
    <a href="#">Delete</a>
</Popconfirm>
