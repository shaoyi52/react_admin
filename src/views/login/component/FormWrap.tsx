import React,{memo} from 'react';

interface FromWrapProps{
    children:React.ReactNode;
    className?:string;
}

function FormWrap({children,className}:FromWrapProps){
    return (
    <div
        className={className}
        style={{
            width:'300px',
            margin:'80px auto 0',
        }}
    >
        {children}
    </div>)
}
/**
 * React.memo(...)是React v16.6引进来的新属性。
 * 它的作用和React.PureComponent类似，
 * 是用来控制函数组件的重新渲染的。
 * React.memo(...) 其实就是函数组件的React.PureComponent;
 * 这个组件将会在JSX标记中渲染出来。
 * 当组件的参数props和状态state发生改变时，
 * React将会检查前一个状态和参数是否和下一个状态和参数是否相同，
 * 如果相同，组件将不会被渲染，如果不同，组件将会被重新渲染
 */
export default memo(FormWrap)