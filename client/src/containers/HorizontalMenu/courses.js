import React from 'react'
import { Link } from 'react-router-dom';

const Courses = ()=> {
    return (
        <li className="mega-menu-dropdown ">
			<Link to="#" className=" megamenu-dropdown" data-close-others="true"> 
                <i className="fa fa-hospital-o" aria-hidden="true"></i><span className="title">Courses</span> <span className="arrow"></span>
				<i className="fa fa-angle-down"></i><span className="arrow "></span>
			</Link>
			<ul className="dropdown-menu" style={{minWidth: "200px"}}>
				<li>
					<div className="mega-menu-content">
						<div className="row">
							<div className="col-md-12">
								<ul className="mega-menu-submenu">
									<li className="nav-item">
										<Link to="./courses" className="nav-link ">
											<span className="title">All Courses</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="add-course" className="nav-link ">
											<span className="title">Add Course</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="./edit-course" className="nav-link ">
											<span className="title">Edit Course</span>
										</Link>
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
export default Courses;