import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Table,
  Modal,
  Card,
  Space,
  Alert,
  Radio,
} from "antd";
import {
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import fetch from "../../utils/fetch";
//import { fetch } from "../../utils";

import "./tableList.scss";

const FilterForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      );
    }
    return children;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let res = fetch.post("mock/usercenter/login", { name: "yuyi" });
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};

const FormLayer = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      maskClosable={false}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  showModal = () => {
    this.setState({ visible: true });
  };
  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  onCancel = () => {
    this.setState({ visible: false });
  };
  onCreate = (values) => {
    console.log(values);
    this.setState({ visible: false });
  };
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        filters: [
          {
            text: "Joe",
            value: "Joe",
          },
          {
            text: "Jim",
            value: "Jim",
          },
          {
            text: "Submenu",
            value: "Submenu",
            children: [
              {
                text: "Green",
                value: "Green",
              },
              {
                text: "Black",
                value: "Black",
              },
            ],
          },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend"],
      },
      {
        title: "Age",
        dataIndex: "age",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        dataIndex: "address",
        filters: [
          {
            text: "London",
            value: "London",
          },
          {
            text: "New York",
            value: "New York",
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
      },
    ];
    let { visible } = this.state;
    return (
      <React.Fragment>
        <Card bordered={false}>
          <FilterForm></FilterForm>
          <div className="tableOption">
            {" "}
            <Button
              type="primary"
              onClick={this.showModal}
              icon={<PlusOutlined />}
            >
              新建
            </Button>
            <Button icon={<EditOutlined />}>批量更新</Button>
            <Button icon={<DeleteOutlined />}>批量删除</Button>
            <Button icon={<ExportOutlined />}>导出</Button>
          </div>
          <Alert
            className="tableTips"
            message={
              <span>
                一共 <a>2</a> 项, 请选择要操作的项来执行更多功能
              </span>
            }
            type="info"
          />
          <Table columns={columns} dataSource={data} onChange={this.onChange} />
        </Card>
        <FormLayer
          visible={visible}
          onCancel={this.onCancel}
          onCreate={this.onCreate}
        />
      </React.Fragment>
    );
  }
}
