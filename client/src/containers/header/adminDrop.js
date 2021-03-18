import React from 'react'
import { Link } from 'react-router-dom'
const AdminDrop = ()=> {
    return (
        <li className="dropdown dropdown-user">
			<a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
			    data-close-others="true">
			    <img alt="" className="img-circle " src="../assets/img/dp.jpg" />
				<span className="username username-hide-on-mobile"> Admin Timmy </span>
				<i className="fa fa-angle-down"></i>
			</a>
			<ul className="dropdown-menu dropdown-menu-default">
			    <li><Link to="/admin"><i className="icon-user"></i> Profile </Link></li>
			    <li><Link to="/admin-signin"><i className="icon-logout"></i> Log Out </Link></li>
			</ul>
		</li>
    )
}
export default AdminDrop