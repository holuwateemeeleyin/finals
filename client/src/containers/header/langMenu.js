import React from 'react'

const LanguageMenu =()=> {
    return (
        <li className="dropdown language-switch">
			<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> 
                <img src="assets/img/flags/gb.png" className="position-left" alt=""/> 
                 English 
                <span className="fa fa-angle-down"></span>
			</a>
			<ul className="dropdown-menu">
                <li><a className="deutsch"><img src="../assets/img/flags/de.png" alt=""/> Deutsch</a></li>
                <li><a className="ukrainian"><img src="../assets/img/flags/ua.png" alt=""/> Українська</a></li>
                <li><a className="english"><img src="../assets/img/flags/gb.png" alt=""/> English</a></li>
                <li><a className="espana"><img src="../assets/img/flags/es.png" alt=""/> España</a></li>
                <li><a className="russian"><img src="../assets/img/flags/ru.png" alt=""/> Русский</a></li>
			</ul>
		</li>
    )
}
export default LanguageMenu