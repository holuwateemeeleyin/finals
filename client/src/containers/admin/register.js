import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerAdmin } from '../../action'

class RegisterAdmin extends Component {
    state = {
        adminID:'',
        name:'',
        lastname:'',
        password:'',
        error:''
    }

    handleInputAdminID=(event)=> {
        this.setState({adminID:event.target.value})
    }
    handleInputName =(event) => {
        this.setState({name:event.target.value})
    }
    handleInputLastname = (event) => {
        this.setState({lastname:event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.admin.register===false){
            this.setState({error:'error, try again'})
        }
        else {
            this.setState ({
                adminID:'',
                name:'',
                lastname:'',
                password:''
            })
        }
    }
    submitForm=(e)=>{
        e.preventDefault()
        this.setState({error:''})
        this.props.dispatch(registerAdmin ({
            adminID:this.state.adminID,
            name:this.state.name,
            lastname:this.state.lastname,
            password:this.state.password
        }, this.props.admin.admins))
    }
    render (){
        console.log(this.props);
        return (
            <div className="page-content-wrapper">
				<div className="page-content">
					<div className="page-bar">
						<div className="page-title-breadcrumb">
							<div className=" pull-left">
								<div className="page-title">Add Admin</div>
							</div>
							<ol className="breadcrumb page-breadcrumb pull-right">
								<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
										to="./dashboard">Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li><Link className="parent-item" to="#">Admin</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li className="active">Add Admin</li>
							</ol>
						</div>
                    </div>
                    <div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="card card-box">
								<div className="card-head">
									<header>Admin Information</header>
								</div>
								<div className="card-body" id="bar-parent">
									<form id="form_sample_1" className="form-horizontal" onSubmit={this.submitForm} >
										<div className="form-body">
											<div className="form-group row">
												<label className="control-label col-md-3">
                                                    First Name
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input 
                                                        type="text" 
                                                        placeholder="enter first name"
                                                        className="form-control input-height"
                                                        value={this.state.name}
                                                        onChange={this.handleInputName}
                                                        required
                                                    />
												</div>
											</div>
											<div className="form-group row">
												<label className="control-label col-md-3">Last Name
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input 
                                                        type="text" 
                                                        placeholder="enter last name"
                                                        className="form-control input-height"
                                                        value={this.state.lastname}
                                                        onChange={this.handleInputLastname}
                                                        required 
                                                    />
												</div>
											</div>
											<div className="form-group row">
												<label className="control-label col-md-3">Admin ID
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input 
                                                        type="text" 
                                                        placeholder="enter AdminID"
                                                        className="form-control input-height"
                                                        value={this.state.adminID}
                                                        onChange={this.handleInputAdminID}
                                                        required 
                                                    /> 
                                                </div>
											</div>
											
											<div className="form-group row">
												<label className="control-label col-md-3">Password
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input type="password" 
                                                        placeholder="enter password"
                                                        className="form-control input-height" 
                                                        value={this.state.password}
                                                        onChange={this.handleInputPassword}
                                                        required
                                                    />
												</div>
											</div>
											<div className="form-actions">
												<div className="row">
													<div className="offset-md-3 col-md-9">
														<button type="submit"
															className="btn btn-info m-r-20">Submit</button>
														<button type="button" className="btn btn-default">Cancel</button>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
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
export default connect(mapStateToProps)(RegisterAdmin)