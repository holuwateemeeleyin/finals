import React from "react";
import Home from "../../component/adminLayoutComponent";

const AdminLayout = (props) => ( 

    <div>
        <Home/>
        <div>
            {props.children}
        </div>
    </div>
);


export default AdminLayout;
