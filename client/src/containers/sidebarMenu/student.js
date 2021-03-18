import React from 'react'

const StudentSideBar = ()=> {
    return (
        <li className="nav-item">
            <a href="#" className="nav-link nav-toggle"><i className="material-icons">group</i>
				<span className="title">Students</span><span className="arrow"></span>
            </a>
			<ul className="sub-menu">
				<li className="nav-item">
					<a href="all_students.html" className="nav-link "> <span className="title">All Students</span></a>
				</li>
				<li className="nav-item">
				    <a href="add_student.html" className="nav-link "> <span className="title">Add Student</span></a>
				</li>
				<li className="nav-item">
				    <a href="edit_student.html" className="nav-link "> <span className="title">Edit Student</span></a>
				</li>
			</ul>
		</li>

    )
}

export default StudentSideBar;