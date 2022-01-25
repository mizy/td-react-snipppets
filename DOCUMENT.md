## 帮助文档
https://sinan.tongdun.me/book/3085/article/26395
## 本地打包
`npm i vsce -g`
`vsce package`


rookie
old：fu63cw7zxguuddvrbqqjkqgmqy72trblekttzsue5tyywhdfen7q
new：kdse4soviv24ze2qmzytapgawggjwizsvkoxxdao22behdg2w2aq


目前此应用路奇负责发布
vsce create-publisher td-tntd


## 使用方式
1、编译snippets包：npm run make
2、编译vsix包：npm run build
3、发布vsix包：npm run publish

## 问题解决
发现```The Personal Access Token used has expired```token过期的解决方案；  
打开网址：https://sinan.tongdun.me/book/3085/article/26495  
登录：vsce login td-tntd  
输入token：kdse4soviv24ze2qmzytapgawggjwizsvkoxxdao22behdg2w2aq


