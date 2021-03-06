import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends React.Component{
    render(){
        console.log(this.props.projects)
        const {projects}= this.props
        return(

            <div className="dashboard container">
                <div className="row">
                <div className="col s12 m6">
                <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                <Notifications/>                
                </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps= (state)=>{
    return {
        //el primer state corresponde al root reducer (projectReducer esta project del root reducer, luego projects es el json con el estado inicial)
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)