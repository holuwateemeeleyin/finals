import React from 'react'
import AdminDrop from './adminDrop'
import LanguageMenu from './langMenu'

const Header = ()=> {
    return (
        <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
                <li><a href="javascript:;" className="fullscreen-btn"><i className="fa fa-arrows-alt"></i></a></li>
                <LanguageMenu/>
                <AdminDrop/>
            </ul>
        </div>
    )
}

export default Header