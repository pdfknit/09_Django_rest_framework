import React from 'react'
import {Link} from "react-router-dom";

const ProjectItem = ({project, users, deleteProject}) => {
    return (
        <tr>
            <td><Link to={`/projects/todos/${project.id}`}>{project.name}</Link></td>
            <td>{project.link}</td>
            <td>{project.users.map(userId => users.find(us => us.id === userId).username )}</td>
            <td>
                <button onClick={() => deleteProject(project.id)}>delete</button>
            </td>
        </tr>
    )
}

const ProjectList = ({projects, users, deleteProject}) => {
    return (
        <div>
            <table>
                <th>Name</th>
                <th>Link</th>
                <th> Users</th>
                {projects.map((project) => <ProjectItem project={project} users={users}
                                                        deleteProject={deleteProject}/>)}
            </table>
            <div><Link class="create" to='/project/create'>create</Link></div>

        </div>
    )
}

export default ProjectList