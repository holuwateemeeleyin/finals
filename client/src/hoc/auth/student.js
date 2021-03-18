import React, { Component } from 'react'
import { connect } from 'react-redux'
import { studentAuth } from '../../action'


export default function (ComposedClass,reload){
    class StudentAuthenticationCheck extends Component {
        state = {
            loading: true
        }
        componentWillMount (){
            this.props.dispatch(studentAuth())
        }
        componentWillReceiveProps(nextProps){
            // loading will be false when the user has logged in or the component has recieved props
            this.setState({loading:false})
            if(!nextProps.student.signin.isAuth){
                if(reload){
                    this.props.history.push('/home')
                }
            }
            else {
                if (reload===false){
                    this.props.history.push('/questions') 
                }
                // this.props.history.push('/questions')
            }
        }
        render (){
            /// When its loading, it will show loading...
            if (this.state.loading){
               return <div>loading...</div>
            }
            return (
                <ComposedClass {...this.props} student={this.props.student} />
            )
        }
    }

    function mapStateToProps (state){
        return {
            student:state.student
        }
    }
    return connect (mapStateToProps)(StudentAuthenticationCheck)
}