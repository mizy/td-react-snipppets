import { Transfer } from 'antd';

/**
 * Transfer穿梭框
 * 更多api见官网: https://ant.design/components/transfer-cn/
*/

<Transfer
    dataSource={mockData}
    titles={['Source', 'Target']}
    targetKeys={targetKeys}
    selectedKeys={selectedKeys}
    onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
    }}
    onChange={(nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
    }}
    onScroll={(direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }}
    render={item => item.title}
/>
