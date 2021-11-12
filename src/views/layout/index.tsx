import React,{Suspense}from 'react';
import { connect } from "react-redux";
import {Spin} from "antd";
function Layout(props){
    return (
        <>
            <section>
                <div>
                    <Suspense fallback={<Spin size="large" className="layout_loading"/>} >
                        
                    </Suspense>
                </div>
            </section>
        </>
    )
}

export default Layout