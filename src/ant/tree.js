import { Tree } from 'antd';

/**
 * Tree树形控件
 * 更多api见官网: https://ant.design/components/tree-cn/
*/

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
            },
        ],
    },
];

<Tree
    checkable
    defaultExpandedKeys={['0-0-0', '0-0-1']}
    defaultSelectedKeys={['0-0-0', '0-0-1']}
    defaultCheckedKeys={['0-0-0', '0-0-1']}
    onSelect={(selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }}
    onCheck={(checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }}
    treeData={treeData}
/>
