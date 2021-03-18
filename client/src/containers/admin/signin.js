import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInAdmin } from '../../action'

class SignIn extends Component {
    state={
        adminID:'',
        password:'',
        success:'',
        error:''
    }
    handleInputAdminID=(event)=> {
        this.setState({adminID:event.target.value})
    }
    handleInputPassword=(event)=>{
        this.setState({password:event.target.value})
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.admin.signin.isAuth){
            this.props.history.push('/dashboard')
        }
        
    }

    submitForm = (e)=> {
        e.preventDefault()
        this.props.dispatch(signInAdmin(this.state))
    }
    

    render(){
        let admin = this.props.admin
        return (
            <div className="limiter">
                <div className="container-login100 page-background">
			        <div className="wrap-login100">
				        <form className="login100-form validate-form" onSubmit={this.submitForm}>
                            <span className="login100-form-logo">
                                <img alt="" src="assets/img/logo-2.png"/>
                            </span>
                            <span className="login100-form-title p-b-34 p-t-27">
						        Log in
					        </span>
                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    placeholder="AdminID"
                                    value={this.state.adminID}
                                    onChange={this.handleInputAdminID}
                                    required
                                    autoFocus
                                />
						        <span className="focus-input100" data-placeholder="&#xf207;"></span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input 
                                    className="input100" 
                                    type="password" 
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleInputPassword}
                                    required
                                />
						        <span className="focus-input100" data-placeholder="&#xf191;"></span>
					        </div>
                            <div className="contact100-form-checkbox">
						        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						        <label className="label-checkbox100" for="ckb1">
							        Remember me
                                </label>
                            </div>
                            <div className="container-login100-form-btn">
						        <button className="login100-form-btn">
							        Login
						        </button>
                                <div>
                                    {
                                        admin.signin ? 
                                            <div>{admin.signin.message}</div>
                                        :null
                                    }
                                </div>
					        </div>
                            <div className="text-center p-t-30">
                                <a className="txt1" href="forgot_password.html">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        admin:state.admin
    }
    
}
export default connect(mapStateToProps)(SignIn);
