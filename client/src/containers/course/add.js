import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCourse, clearNewCourse } from '../../action'

class AddCourse extends Component {
    state={
        formdata:{
            courseCode:'',
            courseTitle:'',
            courseUnit:''
        }
    }

    handleInput =(event,name)=>{
        const newFormdata= {
            ...this.state.formdata
        }
        newFormdata[name]= event.target.value
        this.setState ({
            formdata:newFormdata
        })
    }
    
    submitForm =(e)=>{
        e.preventDefault()
        this.props.dispatch(addCourse({
            ...this.state.formdata,
            ownerId:this.props.admin.signin.id
        }))   
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewCourse())
    }


    render(){
        return (
            <div className="page-content-wrapper">
				<div className="page-content">
					<div className="page-bar">
						<div className="page-title-breadcrumb">
							<div className=" pull-left">
								<div className="page-title">Add Course</div>
							</div>
							<ol className="breadcrumb page-breadcrumb pull-right">
								<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
										to="./dashboard">Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li><Link className="parent-item" to="#">Course</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li className="active">Add Course</li>
							</ol>
						</div>
                    </div>
                    <div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="card card-box">
								<div className="card-head">
									<header>Course Details</header>
								</div>
								<div className="card-body" id="bar-parent">
									<form id="form_sample_1" className="form-horizontal" onSubmit={this.submitForm} >
										<div className="form-body">
											<div className="form-group row">
												<label className="control-label col-md-3">
                                                    Course Code
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input 
                                                        type="text" 
                                                        placeholder="enter course code"
                                                        className="form-control input-height"
                                                        value={this.state.formdata.courseCode}
                                                        onChange={(event)=>this.handleInput(event, 'courseCode')}
                                                        required
                                                    />
												</div>
											</div>
											<div className="form-group row">
												<label className="control-label col-md-3">Course Title
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input 
                                                        type="text" 
                                                        placeholder="enter course title"
                                                        className="form-control input-height"
                                                        value={this.state.formdata.courseTitle}
                                                        onChange={(event)=>this.handleInput(event, 'courseTitle')}
                                                        required 
                                                    />
												</div>
											</div>
											<div className="form-group row">
												<label className="control-label col-md-3">Course Unit
													<span className="required"> * </span>
												</label>
												<div className="col-md-5">
                                                    <input 
                                                        type="number" 
                                                        placeholder="enter course unit"
                                                        className="form-control input-height"
                                                        value={this.state.formdata.courseUnit}
                                                        onChange={(event)=>this.handleInput(event, 'courseUnit')}
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

function mapStateToProps(state){
    return {
        courses:state.courses

    }
}
export default connect(mapStateToProps)(AddCourse)