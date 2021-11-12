import React,{memo} from 'react';
import {Spin} from 'antd';
import {connect} from 'react-redux';

function AsyncRoutes(props){
    if(!props.init){

        return <Spin className="layout__loading"/>
    }

    return 
}