import { List, Avatar } from 'antd';

/**
 * List列表
 * 更多api见官网：https://ant.design/components/list-cn/
*/

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
<List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
        </List.Item>
    )}
/>