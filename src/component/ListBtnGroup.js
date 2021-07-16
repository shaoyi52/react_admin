import React from "react";
import { Button } from "antd";
import {
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
} from "@ant-design/icons";
class ListBtnGroup extends React.PureComponent {
  create = () => {
    this.props.onCreate();
    console.log("create");
  };

  render() {
    return (
      <div className="tableOption">
        {" "}
        {this.props.onCreate && (
          <Button type="primary" onClick={this.create} icon={<PlusOutlined />}>
            {" "}
            新建
          </Button>
        )}
        <Button icon={<EditOutlined />}>批量更新</Button>
        <Button icon={<DeleteOutlined />}>批量删除</Button>
        <Button icon={<ExportOutlined />}>导出</Button>
      </div>
    );
  }
}

export default ListBtnGroup;
