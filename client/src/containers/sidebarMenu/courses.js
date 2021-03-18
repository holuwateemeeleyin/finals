import React from 'react'

const CourseSideBar = ()=> {
    return (
        <li className="nav-item">
            <a href="#" className="nav-link nav-toggle"> <i className="material-icons">school</i>
				<span className="title">Courses</span> <span className="arrow"></span>
				<span className="label label-rouded label-menu label-success">new</span>
			</a>
			<ul className="sub-menu">
				<li className="nav-item">
					<a href="all_courses.html" className="nav-link "> <span className="title">All Courses</span></a>
				</li>
                <li className="nav-item">
                    <a href="add_course.html" className="nav-link "> <span className="title">Add Course</span> </a>
				</li>
				<li className="nav-item">
				    <a href="edit_course.html" className="nav-link "> <span className="title">Edit Course</span></a>
				</li>
			</ul>
		</li>
    )
}

export default CourseSideBar;