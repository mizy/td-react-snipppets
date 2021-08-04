import { QueryListScene, Handle } from 'tntd';
import service from './service';

const { QueryForm, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

export default () => {
    const query = (params = {}) => {
        const { current: curPage = 1, pageSize = 20, dateRange, ...rest } = params;

        return service.query({
            ...rest,
            // dateRange: (dateRange || []).map(
            //     date => date.format('YYYY-MM-DD HH:mm:ss')
            // ),
            curPage,
            pageSize
        }).then(data => ({
            ...data,
            data: data.list || [],
            current: data.curPage
        }));
    };
    const columns = [
        {
            title: '姓名',
            dataIndex: 'nickname',
            ellipsis: true,
        },
        {
            title: '工号',
            dataIndex: 'badge',
            ellipsis: true,
        },
        {
            title: '账号',
            dataIndex: 'account'
        },
        {
            title: '邮箱',
            dataIndex: 'email'
        },
        {
            title: '团队',
            dataIndex: 'team',
            render: (team, row) => {
                if (team) {
                    return team.name;
                }
            }
        },
        {
            title: '操作',
            dataIndex: 'operations',
            width: 150,
            render: (text, row) => {
                return (
                    <Handle>
                        <a
                            onClick={() => {
                                console.log("online");
                            }}
                        >
                            上线
                        </a>
                        <a>查看</a>
                        <a>编辑</a>
                        <a>测试</a>
                        <a>导入</a>
                        <a>导出</a>
                    </Handle>
                )
            }
        }
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
                // initialValues={{
                //     type: 1
                // }}
                renderActions={() => null}
                onChange={onFormChange}
            >
                <Field
                    title=""
                    name="nickname"
                    type="input"
                    props={{
                        placeholder: '请输入昵称',
                        onPressEnter: evt => {
                            const value = (evt.target.value || '').trim();
                            actions.setFormData({
                                ...actions.getFormData(),
                                nickname: value || undefined
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
                    name="account"
                    type="search"
                    props={{
                        placeholder: '请输入账号',
                        enterButton: true,
                        allowClear: true,
                        onSearch: value => {
                            actions.setFormData({
                                ...actions.getFormData(),
                                account: value.trim() ? value.trim() : undefined
                            });
                        }
                    }}
                />
            </QueryForm>
            <QueryList columns={columns} />
        </QueryListScene>
    );
};
