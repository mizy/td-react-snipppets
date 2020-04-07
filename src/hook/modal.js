import { useEffect, useState, Fragment } from "react";
import { connect } from "dva";
import { Input, Select, message, Modal } from "antd";

const HookModal = props => {
	const { globalStore, dispatch } = props;
	const [modalVisible, setModalVisible] = useState(false);
	const [modalItem, setModalItem] = useState(false);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		console.log("init function");
	};

	const onOk = () => { };
	const onCancel = () => { };
	const afterClose = () => { };

	return (
		<div className="hook-modal">
			<Modal
				title="HOOK弹窗"
				visible={modalVisible}
				onOk={onOk}
				onCancel={onCancel}
				afterClose={afterClose}
			>

			</Modal>
		</div>
	);
};

export default connect(state => ({
	globalStore: state.global
}))(HookModal);
