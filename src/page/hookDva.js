import { useEffect, useState, Fragment } from "react";
import { connect } from "dva";
import { Input, Select, message, Modal } from "antd";
// import service from './service';
// import './index.less';

const HookPage = props => {
    const { globalStore, dispatch } = props;
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getSolutionList();
    }, []);

    const getSolutionList = () => {
        // const params = {};
        // service.getSolutionList(params).then((data) => {
        //     console.log('data', data);
        // })
    };

    return (
        <div className="hook-page">
            hook page
        </div>
    );
};

export default connect(state => ({
    globalStore: state.global
}))(HookPage);
