import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";

const { Dragger } = Upload;

/**
 * value就是Upload组件中fileList
 * onChange就是更新value的值
 */

export default ({value = [], onChange}) => {

    const uploadProps = {
        onRemove: (file) => {
            const newFileList = [...value];
            const index = newFileList.indexOf(file);
            newFileList.splice(index, 1);
            onChange(newFileList)
        },
        beforeUpload: (file) => {
            const xmlMinetype = [
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ];

            const isXML =
                xmlMinetype.includes(file.type) || /\.xlsx?$/.test(file.name);

            if (!isXML) {
                message.error("只能上传.xls或者.xlsx文件!");
                return;
            }

            if (file.size / 1024 / 1024 > 1) {
                message.error("上传的XML文件不能超过1M!");
                return;
            }

            onChange([...value, file]);

            return false;
        },
        value
    };
    return (
        <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或将文件拖拽到这里</p>
            <p className="ant-upload-hint">
                <span>
                    请先下载
                    <a
                        href={`${config.baseUrl}/standardField/download/template`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        模板文件.xls
                    </a>
                    ，严格按照模板整理数据并上传xls文件，最大支持1M
                </span>
            </p>
        </Dragger>
    );
};
