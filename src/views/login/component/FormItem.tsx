import React,{memo,useEffect} from 'react';
import {Row,Col,Form,Input,Button} from 'antd';
import useCount from '../../../hooks/count.ts';
const COUNT_STATIC=60;
function FormInputItem (props){
    const [count,beginTimer,closeTimer]= useCount(COUNT_STATIC);
   
    const onTimerClick = () =>{
        if(props.onGetMobileCode){
            props.OnGetMobileCode(()=>{
                beginTimer();
            })
        }
    };

    useEffect(()=>()=>{
        //在验证码情况下，需要在组件卸载的时候清除定时器，防止内存泄漏；
        if(props.name==='code'){
            closeTimer();
        }
    },[])

    return (
        <Form.Item  {...props.formProps} name={props.name} rules={props.rules} >
            {(()=>{
                switch (props.inputProps.type){
                    case 'password':
                        return <Input.Password {...props.inputProps}/>
                    case 'code':
                        return (
                            <Row gutter={10}>
                                <Col span={16}>
                                    <Input {...props.inputProps} type='text'/>
                                </Col>
                                <Col span={8}>
                                    <Button 
                                        disabled={(props.countStatic || COUNT_STATIC !)=== count}
                                        block
                                        onClick={onTimerClick}
                                    >
                                        {count===COUNT_STATIC?'验证码':'${count}S'}
                                    </Button>
                                </Col>
                            </Row>
                        );
                    default:
                        return <Input {...props.inputProps} />

                }
            })()
            }
        </Form.Item>
    )
}

export default memo(FormInputItem);