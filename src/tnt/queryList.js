import { QueryListScene } from 'tntd';
import service from './service';

const { QueryForm, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

export default () => {
    const query = (params = {}) => {
        const { current: curPage = 1, pageSize = 20, dateRange, ...rest } = params;

        return service.query({
            ...rest,
            dateRange: (dateRange || []).map(
                date => date.format('YYYY-MM-DD HH:mm:ss')
            ),
            curPage,
            pageSize
        }).then(data => ({
            ...data,
            data: data.list || [],
            current: data.curPage
        }));
    };
    const columns = [
        { title: '策略集/策略', dataIndex: 'name' },
        { title: '所属应用', dataIndex: 'appDisplayName' },
        { title: '描述', dataIndex: 'description' },
        { title: '策略回测', dataIndex: 'eventType' },
        { title: '回测状态', dataIndex: 'status' },
        { title: '操作', dataIndex: 'operations' }
    ];
    const onFormChange = (values, changeInfo) => {
        console.log('onFormChange', values, changeInfo);

        if (['dateRange', 'type'].includes(changeInfo.name)) {
            actions.search(values);
        }
    };

    return (
        <QueryListScene
            query={query}
            actions={actions}
        >
            <QueryForm
                initialValues={{
                    type: 1
                }}
                renderActions={() => null}
                onChange={onFormChange}
            >
                <Field
                    title=""
                    name="name"
                    type="input"
                    props={{
                        placeholder: '名称',
                        onPressEnter: evt => {
                            const value = (evt.target.value || '').trim();
                            actions.setFormData({
                                ...actions.getFormData(),
                                name: value || undefined
                            });
                        }
                    }}
                />
                <Field
                    title=""
                    name="dateRange"
                    type="dateRange"
                    props={{
                        // disabledDate: currentDate => {
                        //     const current = currentDate.format('YYYYMMDD');
                        //     return current >= moment().format('YYYYMMDD') || current <= moment().subtract(30, 'days').format('YYYYMMDD')
                        // }
                    }}
                />
                <Field
                    title=""
                    name="type"
                    type="select"
                    props={{
                        options: [
                            { label: '类别1', value: 1 },
                            { label: '类别2', value: 2 }
                        ]
                    }}
                />
                <Field
                    title=""
                    name="gangId"
                    type="search"
                    props={{
                        placeholder: '团伙ID',
                        enterButton: true,
                        allowClear: true,
                        onSearch: value => {
                            actions.setFormData({
                                ...actions.getFormData(),
                                gangId: value.trim() ? value.trim() : undefined
                            });
                        }
                    }}
                />
            </QueryForm>
            <QueryList columns={columns} />
        </QueryListScene>
    );
};
