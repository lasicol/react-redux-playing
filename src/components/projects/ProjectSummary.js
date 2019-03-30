import React from 'react'

const ProjectSummary = ( {project} ) => {
    return (
        <div className="project-summary" key={`key-${project.id}`}>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{project.title}</span>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;