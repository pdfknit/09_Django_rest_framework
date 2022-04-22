import React from 'react'
import {Link, useParams} from "react-router-dom";

const UsersProjectItem = ({project}) => {
    return (
        <tr>
            <td><Link to={`/projects/todos/${project.id}`}>{project.name}</Link></td>
            <td>{project.link}</td>
            <td>{project.users}</td>
        </tr>
    )
}

const UsersProjectList = ({projects}) => {
    var {id} = useParams()
    var filteredProjects = projects.filter((project) => project.users.includes(parseInt(id)))

    return (
        <table>
            <th>Name</th>
            <th>Link</th>
            <th>Users</th>

            {filteredProjects.map((project) => <UsersProjectItem project={project}/>)}
        </table>
    )
}

export default UsersProjectList