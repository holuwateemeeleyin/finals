import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourseView, signInStudent  } from '../../action'
class LoginView extends Component {
    state= {
        matric:'',
        password:'',
        eror:'',
        success:''
    }
    handleInputMatric =(event)=> {
        this.setState({matric: event.target.value})
    }
    
    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    componentWillMount () {
        this.props.dispatch (getCourseView(this.props.match.params.id))
    }
    renderCourse =(courses)=> (
        courses.course ?
        <div>
            <h6> Course Code: {courses.course.courseCode} </h6>
            <h6> Course Title: {courses.course.courseTitle}, <span>Time: {courses.course.examTime}mins </span> </h6> 
            <h5> Course Unit: {courses.course.courseUnit}, <span>Questions: {courses.course.noOfQuestions}</span> </h5>
        </div>
        :null
    )

    submitForm = (e)=> {
        e.preventDefault ()
        this.props.dispatch(signInStudent(this.state))
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.student.signin.isAuth){
            this.props.history.push('/questions')
        }
    }

    render (){
        // console.log(this.props);
        let student = this.props.student
        let courses = this.props.courses
        return (
            <div className="login-limiter">
                    <div className="login-container-login100">
                        <div className="login-wrap-login100">
                            <div className="login-login100-form-title" style={{ backgroundColor: "blue" }}>
                                <span className="login-login100-form-title-1">
                                    Sign In <br />
                                    {this.renderCourse(courses)}
                                </span>
                            </div>

                            <form className="login-login100-form login-validate-form" onSubmit={this.submitForm}>
                                <div className="login-wrap-input100 login-validate-input login-m-b-26" data-validate="Username is required">
                                    <span className="login-label-input100">Matic No</span>
                                    <input
                                        className="login-input100"
                                        type="text"
                                        value={this.state.matric}
                                        onChange={this.handleInputMatric}
                                        required
                                    />
                                    <span className="login-focus-input100"></span>
                                </div>

                                <div className="login-wrap-input100 login-validate-input login-m-b-18" data-validate="Password is required">
                                    <span className="login-label-input100">Password</span>
                                    <input
                                        className="login-input100"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputPassword}
                                        required
                                    />
                                    <span className="login-focus-input100"></span>
                                </div>
                                <div className="login-container-login100-form-btn" >
                                    <button className="login-login100-form-btn login-button" style={{ margin: "20px", marginLeft: "80px" }} >
                                        Login
			                        </button>
                                    <div>
                                        {
                                            student.signin ?
                                            <div>{student.signin.message}</div>
                                            : null
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

function mapStateToProps (state){
    return {
        courses:state.courses,
        student:state.student
    }
}
export default connect (mapStateToProps)(LoginView)
