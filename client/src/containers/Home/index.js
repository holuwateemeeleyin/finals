import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourses } from '../../action'
import CoursesItems from '../../WidgetsUI/courses'
import HomeHeader from './homeHeader'
import HomeFooter from './footer'
import axios from 'axios'

// class HomeContainer extends Component {

//     componentWillMount (){
//         axios.get('api/course/getcourse?id=5f082cdb5bb047149885c06b')
//             .then (response=>{
//                 console.log(response.data);
//             })
            
//     }
//     render (){
//         return (
//             <div>
//                 Home container
//             </div>
//         )
//     }
// }
// export default HomeContainer
class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getCourses(4,0,'asc'))
    }

    renderCourses = (courses)=> (
        courses.list ? 
            courses.list.map( course => (
                <CoursesItems {...course} key={course._id} />
            ))
        : null
    )

    render(){
        // console.log(this.props);
        let courses = this.props.courses
        return (
            <div>
                <HomeHeader/>
                {/* <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', padding:'10px'}}> */}
                <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center" >
                    {this.renderCourses(courses)}
                </div>
                <HomeFooter/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses:state.courses
    }
}
export default connect(mapStateToProps)(HomeContainer)