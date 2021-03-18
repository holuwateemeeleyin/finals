// import React from 'react'
// import { connect } from 'react-redux'
// import { getAdmins } from '../../action'
// import axios from 'axios'


// const { useState, useEffect } = React;
// const $ = require("jquery");
// $.Datatable = require("datatables.net");

// const Admin = () => {
// 	const [admins, setAdmins] = useState([]);

// 	useEffect(() => {
// 		setTimeout(() => {
// 			$('#dataTable').DataTable().destroy();
// 			axios.get(`/api/admin/all`)
// 				.then(response => {
// 					setAdmins(response.data)
// 				})
// 		}, 2000)

// 	}, [])

// 	useEffect(() => {
// 		$('#dataTable').DataTable();
// 	}, [admins]);

// 	return (
// 		<div className="page-content">
// 			<div className="page-bar">
// 				<div className="page-title-breadcrumb">
// 					<div className=" pull-left">
// 						<div className="page-title">Professors List</div>
// 					</div>
// 					<ol className="breadcrumb page-breadcrumb pull-right">
// 						<li><i className="fa fa-home"></i>&nbsp;<a className="parent-item"
// 							href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
// 						</li>
// 						<li><a className="parent-item" href="#">Admin</a>&nbsp;<i className="fa fa-angle-right"></i>
// 						</li>
// 						<li className="active">Admin List</li>
// 					</ol>
// 				</div>
// 			</div>

// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tabbable-line">
// 						{/* <!-- <ul className="nav nav-tabs">
//                                     <li className="active">
//                                         <a href="#tab1" data-toggle="tab"> List View </a>
//                                     </li>
//                                     <li>
//                                         <a href="#tab2" data-toggle="tab"> Grid View </a>
//                                     </li>
//                                 </ul> --> */}
// 						<ul className="nav customtab nav-tabs" role="tablist">
// 							<li className="nav-item"><a href="#tab1" className="nav-link active" data-toggle="tab">List
// 											View</a></li>
// 							<li className="nav-item"><a href="#tab2" className="nav-link" data-toggle="tab">Grid
// 											View</a></li>
// 						</ul>
// 						<div className="tab-content">
// 							<div className="tab-pane active fontawesome-demo" id="tab1">
// 								<div className="row">
// 									<div className="col-md-12">
// 										<div className="card card-box">
// 											<div className="card-head">
// 												<header>All Professors</header>
// 												<div className="tools">
// 													<a className="fa fa-repeat btn-color box-refresh"
// 														href="javascript:;"></a>
// 													<a className="t-collapse btn-color fa fa-chevron-down"
// 														href="javascript:;"></a>
// 													<a className="t-close btn-color fa fa-times"
// 														href="javascript:;"></a>
// 												</div>
// 											</div>
// 											<div className="card-body ">
// 												<div className="row">
// 													<div className="col-md-6 col-sm-6 col-6">
// 														<div className="btn-group">
// 															<a href="add_professor.html" id="addRow"
// 																className="btn btn-info">
// 																Add New <i className="fa fa-plus"></i>
// 															</a>
// 														</div>
// 													</div>
// 													<div className="col-md-6 col-sm-6 col-6">
// 														<div className="btn-group pull-right">
// 															<a className="btn deepPink-bgcolor  btn-outline dropdown-toggle"
// 																data-toggle="dropdown">Tools
// 																		<i className="fa fa-angle-down"></i>
// 															</a>
// 															<ul className="dropdown-menu pull-right">
// 																<li>
// 																	<a href="javascript:;">
// 																		<i className="fa fa-print"></i> Print </a>
// 																</li>
// 																<li>
// 																	<a href="javascript:;">
// 																		<i className="fa fa-file-pdf-o"></i> Save as
// 																				PDF </a>
// 																</li>
// 																<li>
// 																	<a href="javascript:;">
// 																		<i className="fa fa-file-excel-o"></i>
// 																				Export to Excel </a>
// 																</li>
// 															</ul>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="table-scrollable">
// 													<table
// 														className="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
// 														id="example4">
// 														<thead>
// 															<tr>
// 																<th></th>
// 																<th> Name </th>
// 																<th> Department </th>
// 															</tr>
// 														</thead>
// 														<tbody>
// 															{/* {
// 																admins.map(item => (
// 																	<tr key={item._id}>
// 																		<td> {item.name} </td>
// 																		<td> {item.lastname} </td>
// 																		<td> {item.adminID} </td>

// 																	</tr>
// 																))
// 															} */}

// 															{/* {this.adminList()} */}
// 															{/* {this.showAdmins(admin)} */}
// 														</tbody>
// 													</table>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 						</div>
// 					</div>
// 				</div>
// 			</div>


// 		</div>
// 	)
// }

// function mapStateToProps(state) {
// 	return {
// 		admin: state.admin
// 	}
// }
// export default connect(mapStateToProps)(Admin)




import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdmins } from '../../action'

import axios from 'axios'
import { MDBDataTable } from 'mdbreact';


const Admin = props => (
	<tr>
		<td>{props.admin.adminID}</td>
	  	<td>{props.admin.name}</td>
	  	<td>{props.admin.lastname}</td>
	</tr>
  )

class AllAdmin extends Component {
	state = {
		rash:[]
	}

	// componentWillMount (){
	// 	this.setState({rash:this.props.dispatch(getAdmins())})
	// 	// this.props.dispatch(getAdmins())
	// }

	componentDidMount(){
		axios.get(`/api/admin/all`)
		.then(response => {
			this.setState({rash:response.data})
		})
	}

	adminList() {
		return this.state.rash.map(currentAdmins=> {
			return <Admin admin={currentAdmins} key={currentAdmins._id} />
		})
	}
	// showAdmins = (admin) =>(
    //     admin.admins ?
    //         admin.admins.map(item => (
    //             <tr key={item._id}>
    //                 <td>{item.name}</td>
    //                 <td>{item.lastname}</td>
    //                 <td>{item.adminID}</td>
    //             </tr>
    //         ))
    //     :null
    // )
	render(){
		// let admin = this.props.admin
		console.log(this.state.rash);


		return (
			<div className="page-content">
            <div className="page-bar">
                <div className="page-title-breadcrumb">
                    <div className=" pull-left">
                        <div className="page-title">Admins List</div>
                    </div>
                    <ol className="breadcrumb page-breadcrumb pull-right">
                        <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item"
                                href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
                        </li>
                        <li><a className="parent-item" href="#">Admin</a>&nbsp;<i className="fa fa-angle-right"></i>
                        </li>
                        <li className="active">Admin List</li>
                    </ol>
                </div>
            </div>

            <div className="row">
						<div className="col-md-12">
							<div className="tabbable-line">
								{/* <!-- <ul className="nav nav-tabs">
                                    <li className="active">
                                        <a href="#tab1" data-toggle="tab"> List View </a>
                                    </li>
                                    <li>
                                        <a href="#tab2" data-toggle="tab"> Grid View </a>
                                    </li>
                                </ul> --> */}
								<ul className="nav customtab nav-tabs" role="tablist">
									<li className="nav-item"><a href="#tab1" className="nav-link active" data-toggle="tab">List
											View</a></li>
									<li className="nav-item"><a href="#tab2" className="nav-link" data-toggle="tab">Grid
											View</a></li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane active fontawesome-demo" id="tab1">
										<div className="row">
											<div className="col-md-12">
												<div className="card card-box">
													<div className="card-head">
														<header>All Professors</header>
														<div className="tools">
															<a className="fa fa-repeat btn-color box-refresh"
																href="javascript:;"></a>
															<a className="t-collapse btn-color fa fa-chevron-down"
																href="javascript:;"></a>
															<a className="t-close btn-color fa fa-times"
																href="javascript:;"></a>
														</div>
													</div>
													<div className="card-body ">
														<div className="row">
															<div className="col-md-6 col-sm-6 col-6">
																<div className="btn-group">
																	<a href="add_professor.html" id="addRow"
																		className="btn btn-info">
																		Add New <i className="fa fa-plus"></i>
																	</a>
																</div>
															</div>
															<div className="col-md-6 col-sm-6 col-6">
																<div className="btn-group pull-right">
																	<a className="btn deepPink-bgcolor  btn-outline dropdown-toggle"
																		data-toggle="dropdown">Tools
																		<i className="fa fa-angle-down"></i>
																	</a>
																	<ul className="dropdown-menu pull-right">
																		<li>
																			<a href="javascript:;">
																				<i className="fa fa-print"></i> Print </a>
																		</li>
																		<li>
																			<a href="javascript:;">
																				<i className="fa fa-file-pdf-o"></i> Save as
																				PDF </a>
																		</li>
																		<li>
																			<a href="javascript:;">
																				<i className="fa fa-file-excel-o"></i>
																				Export to Excel </a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="table-scrollable">
															<table
																className="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
																id="example4">
																<thead>
																	<tr>
																		<th>Admin ID</th>
																		<th> Name </th>
																		<th> Last Name </th>
																	</tr>
																</thead>
																<tbody>
																	{this.adminList()}
																	{/* {this.showAdmins(admin)} */}
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>


        </div>
		)

	}
}

function mapStateToProps (state) {

    return {
        admin:state.admin
    }
}

export default connect (mapStateToProps)(AllAdmin)




{/* <tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof1.jpg"
																				alt=""/>
																		</td>
																		<td>Rajesh</td>
																		<td className="left">Computer</td>
																		<td className="left">Male</td>
																		<td className="left">M.Com, B.Ed</td>
																		<td><a href="tel:4444565756">
																				4444565756 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				rajesh@gmail.com </a></td>
																		<td className="left">22 Feb 2000</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof10.jpg"
																				alt=""/>
																		</td>
																		<td>Pooja Patel</td>
																		<td className="left">Mechanical</td>
																		<td className="left">Female</td>
																		<td className="left">M.E.</td>
																		<td><a href="tel:444786876">
																				444786876 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				pooja@gmail.com </a></td>
																		<td className="left">27 Aug 2005</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof2.jpg"
																				alt=""/>
																		</td>
																		<td>Sarah Smith</td>
																		<td className="left">Science</td>
																		<td className="left">Female</td>
																		<td className="left">B.Sc., M.Sc.</td>
																		<td><a href="tel:44455546456">
																				44455546456 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				sarah@gmail.com </a></td>
																		<td className="left">05 Jun 2011</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof3.jpg"
																				alt=""/>
																		</td>
																		<td>John Deo</td>
																		<td className="left">Music</td>
																		<td className="left">Male</td>
																		<td className="left">B.A.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				john@gmail.com </a></td>
																		<td className="left">15 Feb 2012</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof4.jpg"
																				alt=""/>
																		</td>
																		<td>Jay Soni</td>
																		<td className="left">Mathematics</td>
																		<td className="left">10</td>
																		<td className="left">B.B.A., P.H.D.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				kenh@gmail.com </a></td>
																		<td className="left">12 Nov 2012</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof5.jpg"
																				alt=""/>
																		</td>
																		<td>Jacob Ryan</td>
																		<td className="left">Computer</td>
																		<td className="left">Male</td>
																		<td className="left">B.E., M.E.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				johnson@gmail.com </a></td>
																		<td className="left">03 Dec 2001</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof6.jpg"
																				alt=""/>
																		</td>
																		<td>Megha Trivedi</td>
																		<td className="left">Mathematics</td>
																		<td className="left">Female</td>
																		<td className="left">M.COM, M.Ed.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				megha@gmail.com </a></td>
																		<td className="left">17 Mar 2013</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof1.jpg"
																				alt=""/>
																		</td>
																		<td>Rajesh</td>
																		<td className="left">Computer</td>
																		<td className="left">Male</td>
																		<td className="left">M.Com, B.Ed</td>
																		<td><a href="tel:4444565756">
																				4444565756 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				rajesh@gmail.com </a></td>
																		<td className="left">22 Feb 2000</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof10.jpg"
																				alt=""/>
																		</td>
																		<td>Pooja Patel</td>
																		<td className="left">Mechanical</td>
																		<td className="left">Female</td>
																		<td className="left">M.E.</td>
																		<td><a href="tel:444786876">
																				444786876 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				pooja@gmail.com </a></td>
																		<td className="left">27 Aug 2005</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof2.jpg"
																				alt=""/>
																		</td>
																		<td>Sarah Smith</td>
																		<td className="left">Science</td>
																		<td className="left">Female</td>
																		<td className="left">B.Sc., M.Sc.</td>
																		<td><a href="tel:44455546456">
																				44455546456 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				sarah@gmail.com </a></td>
																		<td className="left">05 Jun 2011</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof3.jpg"
																				alt=""/>
																		</td>
																		<td>John Deo</td>
																		<td className="left">Music</td>
																		<td className="left">Male</td>
																		<td className="left">B.A.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				john@gmail.com </a></td>
																		<td className="left">15 Feb 2012</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof4.jpg"
																				alt=""/>
																		</td>
																		<td>Jay Soni</td>
																		<td className="left">Mathematics</td>
																		<td className="left">10</td>
																		<td className="left">B.B.A., P.H.D.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				kenh@gmail.com </a></td>
																		<td className="left">12 Nov 2012</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof5.jpg"
																				alt=""/>
																		</td>
																		<td>Jacob Ryan</td>
																		<td className="left">Computer</td>
																		<td className="left">Male</td>
																		<td className="left">B.E., M.E.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				johnson@gmail.com </a></td>
																		<td className="left">03 Dec 2001</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr>
																	<tr className="odd gradeX">
																		<td className="patient-img">
																			<img src="assets/img/prof/prof6.jpg"
																				alt=""/>
																		</td>
																		<td>Megha Trivedi</td>
																		<td className="left">Mathematics</td>
																		<td className="left">Female</td>
																		<td className="left">M.COM, M.Ed.</td>
																		<td><a href="tel:444543564">
																				444543564 </a></td>
																		<td><a href="mailto:shuxer@gmail.com">
																				megha@gmail.com </a></td>
																		<td className="left">17 Mar 2013</td>
																		<td>
																			<a href="edit_professor.html"
																				className="btn btn-primary btn-xs">
																				<i className="fa fa-pencil"></i>
																			</a>
																			<button className="btn btn-danger btn-xs">
																				<i className="fa fa-trash-o "></i>
																			</button>
																		</td>
																	</tr> */}