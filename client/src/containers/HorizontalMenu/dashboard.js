import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard =()=> {
    return (
        <div className="page-content-wrapper">
			<div className="page-content">
				<div className="page-bar">
					<div className="page-title-breadcrumb">
						<div className=" pull-left">
							<div className="page-title">Dashboard</div>
						</div>
						<ol className="breadcrumb page-breadcrumb pull-right">
							<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
								to="./dashboard">Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
							</li>
							<li className="active">Dashboard</li>
						</ol>
					</div>
				</div>
                <div className="state-overview">
						<div className="row">
							<div className="col-xl-3 col-md-6 col-12">
								<div className="info-box bg-b-green">
									<span className="info-box-icon push-bottom"><i className="material-icons">group</i></span>
									<div className="info-box-content">
										<span className="info-box-text">Total Students</span>
										<span className="info-box-number">450</span>
										<div className="progress">
											<div className="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span className="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-12">
								<div className="info-box bg-b-yellow">
									<span className="info-box-icon push-bottom"><i className="material-icons">person</i></span>
									<div className="info-box-content">
										<span className="info-box-text">New Students</span>
										<span className="info-box-number">155</span>
										<div className="progress">
											<div className="progress-bar" style={{width: "40%"}}></div>
										</div>
										<span className="progress-description">
											40% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-12">
								<div className="info-box bg-b-blue">
									<span className="info-box-icon push-bottom"><i className="material-icons">school</i></span>
									<div className="info-box-content">
										<span className="info-box-text">Total Course</span>
										<span className="info-box-number">52</span>
										<div className="progress">
											<div className="progress-bar" style={{width: "85%"}}></div>
										</div>
										<span className="progress-description">
											85% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-12">
								<div className="info-box bg-b-pink">
									<span className="info-box-icon push-bottom"><i
											className="material-icons">person</i></span>
									<div className="info-box-content">
										<span className="info-box-text">Admins</span>
										<span className="info-box-number">15</span>
										<div className="progress">
											<div className="progress-bar" style={{width: "50%"}}></div>
										</div>
										<span className="progress-description">
											50% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>


            </div>
        </div>

    )
}

export default Dashboard