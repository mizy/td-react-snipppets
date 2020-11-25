/**
 * delay：延迟显示加载效果的时间（防止闪烁）	ms
 * indicator：加载指示符
 * 组件大小，可选值为 small default large：size
 * 是否为加载中状态：spinning
 * 当作为包裹元素时，可以自定义描述文案	：tip
 * 包装器的类属性：wrapperClassName
*/
<div>
    <Spin />
    <Spin tip="Loading...">
        <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
        />
    </Spin>
</div>
