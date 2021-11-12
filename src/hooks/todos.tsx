/*
 * @Author: yuzhoufen
 * @Date: 2021-11-01 10:19:22
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-05 10:18:51
 * @Description: Do not edit
 * @FilePath: \my-app\src\hooks\todos.tsx
 */
import { useState } from "react";

const useArray=(initialValue=[])=>{
    const [value,setValue]=useState(initialValue);
    
    const push=(element)=>{
        setValue(oldValue=>[...oldValue,element]);
    }
    const remove=(element)=>{
        setValue(oldValue=>oldValue.filter((value,i)=>i!=element))
    }

    const isEmpty=()=>value.length===0;
    return {value,setValue,push,remove,isEmpty}
}

export default useArray;