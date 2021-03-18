import React from 'react'
import { Link } from 'react-router-dom'
import Admin from './admin'
import Courses from './courses'
import Student from './student'
const HorizontalMenu = ()=>{
    return (
        <div className="navbar-custom">
            <div className="hor-menu hidden-sm hidden-xs">
                <ul className="nav navbar-nav">
                    <li className="mega-menu-dropdown active open">
                        <Link to="./dashboard" className="dropdown-toggle"> <i className="material-icons">dashboard</i> Dashboard
							<i className="fa fa-angle-down"></i>
							<span className="selected"></span>
							<span className="arrow open"></span>
						</Link>
                    </li>
                    <Admin/>
                    <Student/>
                    <Courses/>
                </ul>
            </div>
        </div>
    )
}
export default HorizontalMenu;