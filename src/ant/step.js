import { Steps } from 'antd';
const { Step } = Steps;

<div>
    <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
    </Steps>

    <Steps>
        <Step status="finish" title="Login" icon={<Icon type="user" />} />
        <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
        <Step status="process" title="Pay" icon={<Icon type="loading" />} />
        <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
</div>
