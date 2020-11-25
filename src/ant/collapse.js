import { Collapse } from 'antd';
const { Panel } = Collapse;

const genExtra = () => (
    <Icon
        type="setting"
        onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
        }}
    />
);

<Collapse
    accordion
    defaultActiveKey={['1']}
    onChange={(key) => {
        console.log(key);
    }}
>
    <Panel header="This is panel header 1" key="1" extra={genExtra()}>
        <div>123</div>
    </Panel>
    <Panel header="This is panel header 2" key="2" extra={genExtra()}>
        <div>123</div>
    </Panel>
    <Panel header="This is panel header 3" key="3" extra={genExtra()}>
        <div>123</div>
    </Panel>
</Collapse>
