import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../action'
class Register extends Component {

	state = {
		matric: '',
		password: '',
		name: '',
		middlename: '',
		lastname: '',
		faculty: '',
		department: '',
		error: ''
	}

	handleInputName = (event) => {
		this.setState({ name: event.target.value })
	}
	handleInputMiddlename = (event) => {
		this.setState({ middlename: event.target.value })
	}
	handleInputLastname = (event) => {
		this.setState({ lastname: event.target.value })
	}
	handleInputMatric = (event) => {
		this.setState({ matric: event.target.value })
	}
	handleInputFaculty =(event) => {
		this.setState({faculty: event.target.value})
	}
	handleInputDepartment =(event)=> {
		this.setState({department: event.target.value})
	}
	handleInputPassword = (event) => {
		this.setState({ password: event.target.value })
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextprops);
	}

	submitForm = (e) => {
		e.preventDefault()
		this.setState({ error: 'errrrror' })
		this.props.dispatch(register({
			matric: this.state.matric,
			password: this.state.password,
			name: this.state.name,
			middlename: this.state.middlename,
			lastname: this.state.lastname,
			faculty: this.state.faculty,
			department: this.state.department,

		}, this.props.student.students))
	}

	render() {
		console.log(this.props);
		return (
			<div className="page-content-wrapper">
				<div className="page-content">
					<div className="page-bar">
						<div className="page-title-breadcrumb">
							<div className=" pull-left">
								<div className="page-title">Add Student</div>
							</div>
							<ol className="breadcrumb page-breadcrumb pull-right">
								<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
									to="./dashboard">Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li><Link className="parent-item" to="#">Student</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li className="active">Add Student</li>
							</ol>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="card card-box">
								<div className="card-head">
									<header>Basic Information</header>
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
														autoFocus
													/>
												</div>
											</div>

											<div className="form-group row">
												<label className="control-label col-md-3">
													Middle Name
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
													<input
														type="text"
														placeholder="enter middle name"
														className="form-control input-height"
														value={this.state.middlename}
														onChange={this.handleInputMiddlename}
														autoFocus
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
												<label className="control-label col-md-3">Matric No
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
													<input
														type="text"
														placeholder="enter matric no"
														className="form-control input-height"
														value={this.state.matric}
														onChange={this.handleInputMatric}
														required
													/>
												</div>
											</div>

											<div className="form-group row">
												<label className="control-label col-md-3">Faculty
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
													<select 
													className="form-control input-height" 
													value={this.state.faculty}
													onChange={this.handleInputFaculty}
													>
														<option value="">Select...</option>
														<option>Communication And Information Science</option>
														<option>Education</option>
														<option>Social Sciences</option>
														<option>Engineering</option>
														
													</select>
												</div>
											</div>

											<div className="form-group row">
												<label className="control-label col-md-3">Department
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
													<select  
													className="form-control input-height" 
													value={this.state.department}
													onChange={this.handleInputDepartment}
													>
														<option value="">Select...</option>
														<option>Computer Sciences</option>
														<option>Mechanical Engineering</option>
														<option>Mathematics Education</option>
														<option>Telecommunication Sciences</option>
													</select>
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
														{this.state.error}
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
		student: state.student
	}
}

export default connect(mapStateToProps)(Register);