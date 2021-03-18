import React from 'react'
import Header from '../../containers/header'
import HorizontalMenu from '../../containers/HorizontalMenu'
import Logo from '../../containers/logo'
import Mobile from '../../containers/mobileMenu'
import Search from '../../containers/search'
import SidebarMenu from '../../containers/sidebarMenu'


const AdminLayoutCom = ()=>{
    return (
        <div className="page-wrapper">
            <div className="page-header navbar navbar-fixed-top">
			    <div className="page-header-inner ">
                    <Logo/>
                    <ul className="nav navbar-nav navbar-left in">
					    <li><a href="#" className="menu-toggler sidebar-toggler"><i className="icon-menu"></i></a></li>
				    </ul>
                    <Search/>
                    <Mobile/>
                    <Header/>
                </div>
                <HorizontalMenu/>
            </div>
            <div className="page-container">
                <SidebarMenu/>
            </div>
        </div>
    )
}
export default AdminLayoutCom;