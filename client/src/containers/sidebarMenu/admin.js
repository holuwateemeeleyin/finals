import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = ()=> {
    return (
        <li className="nav-item">
            <Link to="" className="nav-link nav-toggle"> <i className="material-icons">person</i>
				<span className="title">Admins</span> <span className="arrow"></span>
			</Link>
			<ul className="sub-menu">
				<li className="nav-item">
			    	<Link to="" className="nav-link "> <span className="title">All Admins</span></Link>
				</li>
                <li className="nav-item">
                    <Link to="" className="nav-link "> <span className="title">Add Admin</span></Link>
				</li>
				<li className="nav-item">
					<Link to="" className="nav-link "> <span className="title">Edit Admin</span></Link>
				</li>
			</ul>
		</li>

    )
}

export default AdminSideBar;