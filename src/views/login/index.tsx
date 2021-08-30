import React,{useState,useCallback} from 'react';
import { Tabs, Checkbox, Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import FormWrap from './component/FormWrap.tsx';
import LoginItem from './component/LoginItem.tsx';
function Login(props){
    const [activeTab,setActiveTab] = useState('account');
    const [form] = Form.useForm();
    const onSubmit = useCallback(() => {
      form.validateFields().then(res => {
        /* const values = res as FormProp;
        if (values.account && values.password) {
          apiUserLogin({
            account: values.account,
            password: values.password,
          })
            .then(({ data }: { data: UserState }) => {
              props.setUserInfo(data);
              next();
            })
            .catch(() => {});
  
          return;
        }
  
        if (values.mobile && values.code) {
          apiUserLoginByMobile({ mobile: values.mobile, code: values.code })
            .then(({ data }: { data: UserState }) => {
              props.setUserInfo(data);
  
              next();
            })
            .catch(() => {});
        } */
      });
    }, []);
  
    return (
        <FormWrap className="page-login">
        <Tabs defaultActiveKey={activeTab} onChange={setActiveTab}>
          <Tabs.TabPane tab="账号密码登录" key="account"></Tabs.TabPane>
          <Tabs.TabPane tab="手机号登录" key="mobile"></Tabs.TabPane>
        </Tabs>
          <Form onFinish={onSubmit} form={form}>
          {activeTab === 'account' ? (
          <>
            <LoginItem.Account form={form} />
            <LoginItem.Password form={form} />
          </>
        ) : (
          <>
            <LoginItem.Mobile form={form} />
            <LoginItem.Code form={form} />
          </>
        )}
          <Form.Item>
            <div className="align--between">
              <Checkbox defaultChecked>自动登录</Checkbox>
              <Link to="/system/recovery-pwd">忘记密码</Link>
            </div>
          </Form.Item>
          <Form.Item>
            <Button block htmlType="submit" type="primary">
              登录
            </Button>
          </Form.Item>
          </Form>
        </FormWrap>
    )
}

export default Login;