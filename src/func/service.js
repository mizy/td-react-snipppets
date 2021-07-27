const params = {
    name: 'xiaoMing'
};
xxxxAPI.getXxxList(params).then(res => {
    if (res.success) {
        message.success(res.message);
    } else {
        message.error(res.message);
    }
}).catch(e => {
    console.log(e);
});
