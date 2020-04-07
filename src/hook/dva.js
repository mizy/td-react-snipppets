import { useEffect, useState, Fragment } from "react";
import { connect } from "dva";
import { Input, Select, message, Modal } from "antd";

const HookPage = props => {
	const { globalStore, dispatch } = props;
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		console.log("init function");
	};

	return (
		<div className="hook-page">
			hook page
		</div>
	);
};

export default connect(state => ({
	globalStore: state.global
}))(HookPage);
