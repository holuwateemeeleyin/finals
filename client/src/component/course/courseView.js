import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourseView, loginTest } from '../../action'
import Login from '../../containers/student/login';
import LoginTest from '../../containers/student/test'
class CourseView extends Component {

    componentWillMount() {
        this.props.dispatch(getCourseView(this.props.match.params.id))
    }
    renderCourse = (courses) => (
        courses.course ?
            <div>
                <h6> Course Code: {courses.course.courseCode} </h6>
                <h5> Course Title: {courses.course.courseTitle} </h5>
                <h5> Course Unit: {courses.course.courseUnit}</h5>
            </div>
            : null
    )

     

    render() {
        // console.log(this.props);
        // console.log(this.props.courses.course);
        let courses = this.props.courses
        return (
            <div className="login-limiter">
                <div className="login-container-login100">
                    <div className="login-wrap-login100">
                        <div className="login-login100-form-title" style={{ backgroundColor: "blue" }}>
                            <span className="login-login100-form-title-1">
                                Sign In <br/>
                                {this.renderCourse(courses)}
					</span>
                        </div>
                        {/* <LoginTest/> */}
                        <Login/>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CourseView)