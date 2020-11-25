/**
 * mask：是否展示遮罩
 * maskClosable：点击蒙层是否允许关闭
 * closable：是否显示右上角的关闭按钮
 * destroyOnClose：关闭时销毁 Drawer 里的子元素
 * placement：抽屉的方向	'top' | 'right' | 'bottom' | 'left'
 * zIndex：设置 Drawer 的 z-index
*/
<Drawer
    title="Basic Drawer"
    placement="right"
    closable={false}
    width={256}
    onClose={this.onClose}
    visible={this.state.visible}
>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
</Drawer>
