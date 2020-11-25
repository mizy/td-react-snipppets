const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                tag
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>Invite {record.name}</a>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        ),
    },
];


<Table
    className='border-table'
    rowKey="id"
    dataSource={[]}
    columns={columns}
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
