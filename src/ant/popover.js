import { Popover } from 'antd';

/**
 * 卡片类名：overlayClassName
 * 卡片样式：overlayStyle
 * 气泡位置：placement  气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
 * 触发行为：trigger  可选 hover/focus/click/contextMenu，默认hover
 */

<Popover
    content={() => {
        return <div>内容</div>;
    }}
    title="Title"
    trigger="click"		// trigger默认是hover
>
    <Button type="primary">
        click me
    </Button>
</Popover>
