import React,{ memo,useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
function Breadcrumbs(){
    const [breadcrumbs,setBreadcrumbs]=useState([]);

    const history=useHistory;
    return (
        <div className="breadcrumbs-Contener">
            <Breadcrumb>
                {breadcrumbs.map(route=>(
                    <Breadcrumb.item key={route.path}>{route.name}</Breadcrumb.item>
                ))}
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs;