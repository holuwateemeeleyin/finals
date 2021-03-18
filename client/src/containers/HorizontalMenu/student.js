import React from 'react'
import { Link } from 'react-router-dom';

const Student = ()=> {
    return (
        <li className="classic-menu-dropdown mega-menu-dropdown">
			<Link to="#" className=" megamenu-dropdown" data-close-others="true"> 
                <i className="fa fa-users"></i><span className="title">Student</span> <span className="arrow"></span>
				<i className="fa fa-angle-down"></i><span className="arrow "></span>
			</Link>
			<ul className="dropdown-menu">
                <li>
					<div className="mega-menu-content">
						<div className="row">
							<div className="col-md-12">
								<ul className="mega-menu-submenu">
									<li className="nav-item">
										<Link to="./students" className="nav-link "> <span className="title">All Students</span></Link>
									</li>
									<li className="nav-item">
										<Link to="./register" className="nav-link "> <span className="title">Add Student</span></Link>
									</li>
									<li className="nav-item">
										<Link to="./students" className="nav-link"> <span className="title">Student Details</span></Link>
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
export default Student;