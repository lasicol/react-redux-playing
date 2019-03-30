import React from 'react'
import { connect } from 'react-redux'

import { deleteProjectAction } from '../../store/actions/projectActions'

const ProjectDetails = ( {project, deleteProject} ) => {
    console.log("in project details: " + project) 
    console.log("deletePrject func: " + deleteProject) 
    
    const handleClick = (e) => {
        deleteProject(project.id);
    } 

    if(project) {
        return (
            <div className="project-details container section">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{project.title}</span>
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className="center">
                    <button className="btn red" onClick={handleClick}>Delete</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="project-details container section">
                <p>Not found</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    
    const project = state.projects.find(project => {
        return project.id === id
    });
    return {
        project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => { dispatch(deleteProjectAction(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);