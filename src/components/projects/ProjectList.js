import React from 'react'
import { Link } from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {

    const list = projects.map((project) => {
        return (
            <Link to={`project/${project.id}`}>
                <ProjectSummary project={project} />
            </Link>
        )
    })
    return (
        <div className="project-list">
            {list}
        </div>
    )
}

export default ProjectList;