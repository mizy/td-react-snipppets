<Table
    className='border-table'
    rowKey="id"
    dataSource={[]}
    columns={[]}
    loading={true}
    scroll={{ x: 1900 }}
    pagination={{
        pageSize: 10,
        total: 100,
        current: 1,
        showTotal: total => `共${total}条`,
        onChange: () => { },
        onShowSizeChange: () => { },
        showQuickJumper: true,
        showSizeChanger: true
    }}
/>
