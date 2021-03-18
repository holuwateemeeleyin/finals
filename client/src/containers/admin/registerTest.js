import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class RegisterAdminTest extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        admin:state.admin
    }
}

export default connect(mapStateToProps)(RegisterAdminTest)