confirm({
	title: "Are you sure delete this task?",
	content: "Some descriptions",
	okText: "确定",
	okType: "danger",
	cancelText: "取消",
	onOk() {
		console.log("OK");
	},
	onCancel() {
		console.log("Cancel");
	}
});
