import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ()=> {
    return (
        <div className="page-logo">
            <Link to="/dashboard">
               <span className="logo-icon material-icons fa-rotate-45">school</span>
               {/* <span> <img style={{width:"20%", minHeight:"10%"}} src="images/logo.png"/> </span> */}
               <span className="logo-default" style={{fontSize:"17px"}}>University Of Ilorin</span> </Link>
        </div>
    )
}

export default Logo;