import React,{memo,useCallback} from 'react';
import {LockOutlined,UserOutlined} from '@ant-design/icons';
import FormInputItem from './FormItem.tsx';
import {FormItemProps,FormInstance} from 'antd/lib/form';
import {InputProps} from 'antd/lib/input';

export interface LoginItemType{
    Account:React.FC<LoginItemProps>;
    Password:React.FC<LoginItemProps>;
    Confirm:React.FC<LoginItemProps>;
    Mobile:React.FC<LoginItemProps>;
    Code:React.FC<LoginItemProps>;
}

interface LoginItemConfig{
    name:string;
    rules:any[];
    inputProps:InputProps & {visibilityToggle?:boolean};
}

interface LoginItemProps{
    countStatic?:number;
    onGetMobileCode?:(cb:()=>void)=>void;
    form:FormInstance;
}

const config:{[key in keyof LoginItemType]:LoginItemConfig}={
    Account:{
        name:'account',
        inputProps:{
            prefix:<UserOutlined />,
            placeholder:'6-18位帐号',
            type:'text'
        },
        rules:[{required:true,message:'请输入合法帐号'}]
    },
    Mobile:{
        name:'mobile',
        inputProps:{
            prefix:<UserOutlined/>,
            placeholder:'11位合法手机号',
            type:'text',
        },
        rules:[{
            required:true,message:'请输入合法手机号',len:11
        }]
    },
    Password: {
        name: 'password',
        inputProps: {
          prefix: <LockOutlined />,
          placeholder: '大于6位的密码',
          type: 'password',
          visibilityToggle: true,
        },
        rules: [{ required: true, message: '请输入合法密码', min: 5 }],
      },
      Confirm: {
        name: 'repassword',
        inputProps: {
          id: 'confirm',
          prefix: <LockOutlined />,
          placeholder: '确认密码',
          type: 'password',
          visibilityToggle: true,
        },
        rules: [],
      },
    
      Code: {
        name: 'code',
        inputProps: {
          placeholder: '大于6位的密码',
          prefix: <LockOutlined />,
          type: 'code',          
        },
        countStatic: 1,
        rules: [{ required: true, message: '请输入验证码', len: 6 }],
      },
}

const formProps:FormItemProps={
    hasFeedback:true,
    children:null,
}

function Account(props:LoginItemProps){
    return <FormInputItem formProps={formProps} {...config.Account} {...props}></FormInputItem>
}
function Password(props:LoginItemProps){
    return <FormInputItem formProps={formProps} {...config.Password} {...props}/>
}
function Confirm(props:LoginItemProps){
    return <FormInputItem formProps={formProps} {...config.Confirm} {...props}/>
}
function Mobile(props:LoginItemProps){
    return <FormInputItem formProps={formProps} {...config.Mobile} {...props}/>
}
function Code(props:LoginItemProps){
    return <FormInputItem formProps={formProps} {...config.Code} {...props}/>
}
const LoginItem: LoginItemType ={
    Account:memo(Account),
    Password:memo(Password),
    Confirm:memo(Confirm),
    Mobile:memo(Mobile),
    Code:memo(Code),    
}

export default LoginItem;