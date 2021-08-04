import { Fragment } from "react";
import { Page } from "tntd";

const title = (
    <span style={{ cursor: 'pointer' }}>
        <Icon type="left" style={{ marginRight: 2, verticalAlign: '-0.2em' }} />返回
    </span>
);
const center = "白色背景在中间列";
const extra = (
    <>
        <Button type="primary">保存</Button>
        <Button>返回</Button>
    </>
);

<Fragment>
    {/* 页面自定义内容 */}
    <Page
        title="大盘页面"
        inLayout={true}
    >
        <div>页面自定义内容</div>
    </Page>

    {/* 页面中的多列 */}
    <Page
        title="大盘页面"
        inLayout={true}
    >
        <Box width="200">第一列</Box>
        <Box mode="white">第二列</Box>
        <Box width="200">第三列</Box>
    </Page>

    {/* 单独页面中使用 */}
    <Page
        title={title}
        goBack={() => {
            console.log('点击返回');
        }}
        center={center}
        extra={extra}
    >
        <Box width="200">第一列</Box>
        <Box mode="white">第二列</Box>
        <Box width="200">第三列</Box>
    </Page>
</Fragment >
