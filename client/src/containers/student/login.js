import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInStudent } from '../../action'

class LoginView extends Component {

    state = {
        matric: '',
        password: '',
        success: '',
        error: ''
    }

    handleInputMatric = (event) => {
        this.setState({ matric: event.target.value })
    }
    handleInputPassword = (event) => {
        this.setState({ password: event.target.value })
    }

    
    componentWillReceiveProps (nextProps) {
        if(nextProps.student.signin.isAuth){
            this.props.history.push('/questions')
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.dispatch(signInStudent(this.state))
    }

    render() {
        let student = this.props.student

        return (
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
                        {/* {
                            admin.signin ?
                                <div>{admin.signin.message}</div>
                                : null
                        } */}
                    </div>
                </div>
            </form>
        )
    }
}


function mapStateToProps(state) {
    return {
        student: state.student
    }
}

export default connect(mapStateToProps)(LoginView)