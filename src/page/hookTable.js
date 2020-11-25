import { useEffect, useState, Fragment } from "react";
import { connect } from "dva";
import { Table, Divider, message, Modal } from "antd";

const HookTable = props => {
	const { pageSize, total, currentPage } = props;
	const [tableLoading, setTableLoading] = useState(false);

	const dataSource = [
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		},
		{
			key: "2",
			name: "胡彦祖",
			age: 42,
			address: "西湖区湖底公园1号"
		}
	];

	const columns = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			ellipsis: true
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address"
		},
		{
			title: "操作",
			key: "action",
			render: (text, record) => (
				<span>
					<a>修改</a>
					<Divider type="vertical" />
					<a>删除</a>
				</span>
			)
		}
	];

	return (
		<div className="hook-modal">
			<Table
				className='border-table'
				rowKey="id"
				dataSource={dataSource}
				columns={columns}
				loading={tableLoading}
				scroll={{ x: 1900 }}
				pagination={{
					pageSize,
					total,
					current: currentPage,
					showTotal: total => `共${total}条`,
					onChange: () => { },
					onShowSizeChange: () => { },
					showQuickJumper: true,
					showSizeChanger: true
				}}
			/>
		</div>
	);
};

export default connect(state => ({
	globalStore: state.global
}))(HookTable);
