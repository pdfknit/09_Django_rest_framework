import React from 'react'

const TODOItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.name}</td>
            <td>{todo.created}</td>
            <td>{todo.text}</td>
            <td>{todo.executor}</td>
            <td>{todo.project}</td>
        </tr>
    )
}

const TODOList = ({todos}) => {
    return (
        <table>
            <th>Name</th>
            <th>Created</th>
            <th>Text</th>
            <th>Executor</th>
            <th>Project</th>
            {todos.map((todo) => <TODOItem todo={todo}/>)}
        </table>
    )
}

export default TODOList