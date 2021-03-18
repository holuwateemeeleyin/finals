import React from 'react'
import { Link } from 'react-router-dom'

const Admin = ()=> {
    return (
        <li className="mega-menu-dropdown">
			<Link to="#" className=" megamenu-dropdown" data-close-others="true"> 
				<i className="fa fa-user-circle-o"></i><span className="title">Admin</span> <span className="arrow"></span>
				<i className="fa fa-angle-down"></i><span className="arrow "></span>
			</Link>
			<ul className="dropdown-menu" style={{minWidth: "200px"}}>
				<li>
					<div className="mega-menu-content">
						<div className="row">
							<div className="col-md-12">
								<ul className="mega-menu-submenu">
									<li className="nav-item">
										<Link to="./admins" className="nav-link "> <span className="title">All Admin</span></Link>
									</li>
									<li className="nav-item">
										<Link to="./register-admin" className="nav-link "> <span className="title">Add Admin</span></Link>
									</li>
									<li className="nav-item">
										<Link to="./admin"className="nav-link "> <span className="title">Admin Details</span></Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</li>

    )
}
export default Admin;