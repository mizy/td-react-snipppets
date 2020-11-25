<Modal
    wrapClassName="modal-class"
    title="modal弹窗"
    visible={true || false}
    onOk={onOk}
    onCancel={onCancel}
    afterClose={afterClose}
    maskClosable={true}
    centered={false}
    cancelText="quxiao"
    okText="queding"
    okType="primary"
    destroyOnClose // 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 destroyOnClose
>

</Modal>
