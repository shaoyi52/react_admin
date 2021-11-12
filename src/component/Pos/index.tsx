import React, { memo,useState,useEffect } from "react";
import {InputNumber} from 'antd';
import styles from './index.less';

type PosProps ={
    value?:String;
    onChange?:(v:String)=>void;
}

export default memo(function Pos(){
    const {value,onChange}=porps;
    let _this=Pos;
    const handleChange=(index,v)=>{
        let arr=value||[];
        arr[index]=v;
        onChange && onChange(arr);
    }

    return (
        <div className={styles.posIpt}>
            <div className={styles.posItem}>
                <span>x:</span>
                <InputNumber defaultValue={value && value[0]} onChange={handleChange.bind(_this, 0)}/>
            </div>
            <div className={styles.posItem}>
                <span>y:</span>
                <InputNumber defaultValue={value && value[1]} onChange={handleChange.bind(_this, 1)}/>
            </div>
        </div>
    )

})