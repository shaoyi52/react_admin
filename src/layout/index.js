import React,{Suspense} from 'react';
import  classnames from 'classnames'
function Layout(props){
    return (
        <>
            <section
                className={
                    classnames({
                        layout:true,                        
                    })
                }
            >
               <section>
                   <Headers/>
                   <div>
                        <Suspense>
                            
                        </Suspense>
                   </div>
                </section> 
                <LayoutSide/>
            </section>
        </>
    )
}
export default Layout;