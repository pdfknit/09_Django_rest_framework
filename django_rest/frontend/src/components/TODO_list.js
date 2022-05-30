import React from 'react'
import {Link} from "react-router-dom";

const TODOItem = ({todo, users, projects, deleteTODO}) => {
    return (
        <tr>
            <td>{todo.name}</td>
            <td>{todo.created}</td>
            <td>{todo.text}</td>
            <td>{users.find(us => us.id === todo.executor).username}</td>
            <td>{projects.find(proj => proj.id === todo.project).name}</td>
            <td>
                <button onClick={() => deleteTODO(todo.id)}>delete</button>
            </td>
        </tr>
    )
}

const TODOList = ({todos, users, projects, deleteTODO}) => {
    return (
        <div>
            <table>
                <th>Name</th>
                <th>Created</th>
                <th>Text</th>
                <th>Executor</th>
                <th>Project</th>
                {todos.map((todo) => <TODOItem todo={todo} users={users} projects={projects} deleteTODO={deleteTODO}/>)}
            </table>
            <Link class="create" to='/todo/create'>create</Link>
        </div>
    )
}

export default TODOList