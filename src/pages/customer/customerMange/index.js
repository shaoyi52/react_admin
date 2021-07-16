import React from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Radio, Button, Card, Space, Table } from "antd";
import { addCustomer } from "@redux/actions/customerList";
//import { login } from "@apis/common";
import { ListBtnGroup } from "@component";
import "./index.less";

const FormLayer = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="新建用户"
      okText="新建"
      cancelText="取消"
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
          name="name"
          label="客户名称"
          rules={[
            {
              required: true,
              message: "请输入客户名称!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="customerType"
          label="客户类型"
          rules={[
            {
              required: true,
              message: "请输入客户类型!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="1">普通</Radio>
            <Radio value="2">Vip</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="customerID"
          label="客户编码"
          rules={[
            {
              required: true,
              message: "请输入客户编码!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="telephone"
          label="电话"
          rules={[
            {
              required: true,
              message: "请输入电话!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="description" label="描述">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      dataSource: [],
      visible: false,
    };
  }
  componentDidMount() {
    this.setState({ dataSource: this.props.customers });
    /*  login({ name: "yuyi" }, (res) => {
      console.log(res);
    }); */
  }
  component() {
    this.setState({ dataSource: this.props.customers });
    /*  login({ name: "yuyi" }, (res) => {
      console.log(res);
    }); */
  }

  renderCloumns = () => {
    return [
      {
        title: "客户名称",
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
        title: "客户类型",
        dataIndex: "customerType",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "客户编号",
        dataIndex: "customerID",
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
        title: "更新时间",
        dataIndex: "updateTime",
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
        title: "创建时间",
        dataIndex: "createTime",
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
        title: "电话",
        dataIndex: "telephone",
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
  };
  onChange = () => {};
  onCreate = () => {
    this.setState({ visible: true });
    console.log("customer Create");
  };
  save = (values) => {
    console.log(values);
    this.props.addCustomer({
      ...values,
      key: Math.round(Math.random() * 10000),
      id: Math.round(Math.random() * 10000),
    });
    this.setState({ visible: false });
  };
  cancel = () => {
    this.setState({ visible: false });
  };
  render() {
    let { visible } = this.state;
    let dataSource = this.props.customers;
    return (
      <div className="customerList">
        <Card bordered={false}>
          <ListBtnGroup onCreate={this.onCreate} />
          <Table
            columns={this.renderCloumns()}
            dataSource={dataSource}
            onChange={this.onChange}
          />
        </Card>
        <FormLayer
          visible={visible}
          onCreate={this.save}
          onCancel={this.cancel}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCustomer: (customer) => {
      dispatch(addCustomer(customer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
