import React from 'react'
import { Link } from 'react-router-dom' 

const CoursesItems =(item)=> {
    return (
        <Link to={`/course/${item._id}`} className="text-justify" style={{padding:'6px'}}  >
            <div>
                <h3> {item.courseTitle}</h3>
                
            </div>
            <div>
                <span>{item.courseCode} </span>
                <span>Course Unit: {item.courseUnit} </span>

            </div>

        </Link>
    )
}

export default CoursesItems