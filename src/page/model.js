import { message } from "antd";
import service from "./service";

export default {
    namespace: "demo",
    state: {
        apiReady: false,
        list: []
    },
    effects: {
        *getSolutionList({ payload }, { call, put, select }) {
            const { id } = yield select(state => state.demo);
            const res = yield call(service.getSolutionList, payload);

            yield put({
                type: "updateState",
                payload: {
                    list: res,
                    apiReady: true
                }
            });
        }
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }
    }
};
