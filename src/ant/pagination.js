import { Pagination } from 'antd';

<Pagination
    size="small"
    total={85}
    showTotal={total => `Total ${total} items`}
    pageSize={20}
    defaultCurrent={1}
    showSizeChanger
    showQuickJumper
    onChange={(page, pageSize) => { }}
    onShowSizeChange={(page, pageSize) => { }}
    simple={false}		// 简单模式
/>
