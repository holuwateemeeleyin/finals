import React from 'react'
import AdminSideBar from './admin'
import StudentSideBar from './student'
import CourseSideBar from './courses'

const SidebarMenu = ()=>{
    return (
        <div className="sidebar-container">
            <div className="sidemenu-container navbar-collapse collapse fixed-menu">
				<div id="remove-scroll" className="left-sidemenu">
					<ul className="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false"
					    data-auto-scroll="true" data-slide-speed="200" style={{paddingTop: "20px"}}>
						<li className="sidebar-toggler-wrapper hide">
							<div className="sidebar-toggler">
								<span></span>
							</div>
						</li>
                        <li className="sidebar-user-panel">
							<div className="user-panel">
								<div className="pull-left image">
									<img src="assets/img/dp.jpg" className="img-circle user-img-circle"
									alt="User Image" />
								</div>
								<div className="pull-left info">
									<p> Admin Timmy</p>
									<a href="#"><i className="fa fa-circle user-online"></i><span className="txtOnline">Online</span></a>
								</div>
							</div>
						</li>
                        <li className="nav-item start active open">
							<a href="#" className="nav-link nav-toggle">
								<i className="material-icons">dashboard</i>
								<span className="title">Dashboard</span>
								<span className="selected"></span>
								<span className="arrow open"></span>
							</a>
                        </li>
                        <AdminSideBar/>
                        <StudentSideBar/>
                        <CourseSideBar/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarMenu