import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { getTestRev } from '../../action'
import Login from '../../containers/student/login';

class TestView extends Component {

    componentWillMount() {
        this.props.dispatch(getTestRev(this.props.match.params.id))
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

export default connect(mapStateToProps)(TestView)