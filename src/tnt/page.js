import { Page } from "tntd";
const { Box } = Page;

<Page
    title='用户详情页'
    goBack={() => {
        console.log('点击返回');
    }}
    center='白色背景在中间列'
    extra={
        <>
            <Button type="primary">保存</Button>
            <Button>返回</Button>
        </>
    }
    inLayout={true}     // 是否在layout中使用
>
    {/* <div>页面自定义内容</div> */}
    <Box width="200" title='列表'>
        第一列
    </Box>
    <Box mode="white" title='详情'>
        第二列
    </Box>
    <Box width="200" noPadding>
        第三列
    </Box>
</Page>
