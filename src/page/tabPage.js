import { connect } from 'dva';
import { Tabs } from 'antd';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import './index.less';

const { TabPane } = Tabs;

export default connect(
    state => ({
        globalStore: state.global,
        store: state.tabListPage
    })
)(props => (
    <Tabs className="tabs-page">
        <TabPane tab="用户关联" key="userRelations">
            <TabOne {...props} />
        </TabPane>
        <TabPane tab="团伙事件" key="gangEvents">
            <TabTwo {...props} />
        </TabPane>
        <TabPane tab="团伙事件" key="TabThree">
            <TabThree {...props} />
        </TabPane>
    </Tabs>
));
