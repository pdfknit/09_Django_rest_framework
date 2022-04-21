import React from 'react'
import {useParams} from "react-router-dom"

const ProjectsTODOItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.name}</td>
            <td>{todo.created}</td>
            <td>{todo.text}</td>
            <td>{todo.project}</td>
        </tr>
    )
}

const ProjectsTODOList = ({todos}) => {
    const {id} = useParams()
    const filteredTODOs = todos.filter((todo) => todo.project == parseInt(id))

    return (
        <table>
            <th>Name</th>
            <th>Created</th>
            <th>Text</th>
            <th>Project</th>
            { filteredTODOs.map((todo) => <ProjectsTODOItem todo={todo} />)}
        </table>
    )
}

export default ProjectsTODOList