import { useEffect, useState, Fragment } from "react";
import { connect } from "dva";
import { Layout } from "tntd";

export default props => {
    const menus = [
        {
            children: [
                {
                    code: "dadicasesearch",
                    enName: "dadicasesearch",
                    icon: "home",
                    menuName: "案件检索",
                    path: "/orion/case/relation"
                }
            ],
            code: "casegraph",
            enName: "casegraph",
            groupIcon: "case",
            groupName: "案件分析"
        },
        {
            children: [
                {
                    code: "taglist",
                    enName: "taglist",
                    icon: "home",
                    menuName: "标签管理",
                    path: "/orion/tag/list"
                },
                {
                    code: "tagdata",
                    enName: "tagdata",
                    icon: "layer-color",
                    menuName: "打标数据管理",
                    path: "/orion/tag/datalist"
                }
            ],
            code: "tagmm",
            enName: "tagmm",
            groupIcon: "layer-color",
            groupName: "标签管理"
        },
        {
            children: [
                {
                    code: "QX0101",
                    enName: "Organization Manage",
                    icon: "org",
                    menuName: "机构管理\t",
                    path: "/bridge/permission/organization"
                },
                {
                    code: "QX0102",
                    enName: "Role Manage",
                    icon: "role",
                    menuName: "角色管理",
                    path: "/bridge/permission/role"
                },
                {
                    code: "QX0103",
                    enName: "User Manage",
                    icon: "user-group",
                    menuName: "用户管理",
                    path: "/bridge/permission/user"
                }
            ],
            code: "permission",
            enName: "Permission Manage",
            groupIcon: "case",
            groupName: "权限管理"
        },
        {
            children: [
                {
                    code: "QX0201",
                    enName: "Function Register",
                    icon: "python",
                    menuName: "功能注册",
                    path: "/bridge/system/register"
                },
                {
                    code: "QX0202",
                    enName: "Solution",
                    icon: "python",
                    menuName: "解决方案",
                    path: "/bridge/system/solution"
                },
                {
                    code: "QX0203",
                    enName: "System Configuration",
                    icon: "Python",
                    menuName: "系统设置",
                    path: "/bridge/system/startup"
                }
            ],
            code: "QX0203",
            enName: "System Configuration",
            groupIcon: "setting",
            groupName: "解决方案"
        }
    ];
    const userInfo = {
        "account": "admin",
        "avatar": "male1",
        "expiration": 1924963199000,
        "firstLogin": "0",
        "gender": 0,
        "gmtCreate": 1551771456000,
        "gmtModified": 1570607897000,
        "lang": "cn",
        "layout": "default",
        "orgUuid": "a8202aea546f48979754bdd45c471b08",
        "roleUuids": "[\"ee8dbc99831b4a9cb17578b51bbb09e0\"]",
        "salt": "9ac81141a689494eb769d39956bf5656",
        "simplified": 1,
        "status": 0,
        "theme": "default",
        "tryDate": 1571033960000,
        "tryTime": 1,
        "userName": "超级管理员",
        "uuid": "c693e0ec0a2e4bf8b71eef8152d88a29"
    };

    const onMenuChange = param => {
        console.log('onMenuChange:', param);
    };
    const onMenuSelect = param => {
        console.log('onMenonMenuSelectuChange:', param);
    };
    const onLanguageChange = language => {
        console.log('onLanguageChange:', language);
    };
    const onThemeChange = theme => {
        console.log('onThemeChange:', theme);
    };
    const onAppChange = param => {
        console.log('onAppChange', param);
    };
    const onLogoClick = () => {
        console.log('logo click');
    };


    return (
        <Layout
            logo={<img src='/bifrost-resource/logo/logo9-color.svg' />}
            className="tntd-layout"
            name="私有云全家桶"
            enName="Private Cloud"
            selectedAppKey="enterprice"
            appList={[
                { key: 'movie', name: '电影图谱' },
                { key: 'enterprice', name: '企业图谱' }
            ]}
            userInfo={userInfo}
            selectedMenuKey="tagdata"
            menus={menus}
            // isEmptyLayout={
            //     ['/bridge/singlePage'].includes(location.pathname)
            // }
            onMenuChange={onMenuChange}
            onMenuSelect={onMenuSelect}
            onLanguageChange={onLanguageChange}
            onThemeChange={onThemeChange}
            onAppChange={onAppChange}
            onLogoClick={onLogoClick}
        >
        </Layout>
    );
};
