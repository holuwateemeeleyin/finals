import React from 'react'
import student from '../../hoc/auth/student';

const Question = (props)=> {
    // console.log(props.student.signin);
    let student = props.student.signin
    return (
        <div>
            <div> <h3>Student Details </h3> </div>
            <div> <span>Name:</span> {student.lastname} {student.name} {student.middlename} </div>
            <div> <span>Matric No:</span> {student.matric} </div>
            <div> <span>Faculty:</span> {student.faculty} </div>
            <div> <span>Department:</span> {student.department} </div>

        </div>
    )
}

export default Question