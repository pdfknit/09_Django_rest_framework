import React from 'react'
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    return (
        <tr>
            <td><Link to={`/users/projects/${user.id}`}>{user.firstname}</Link></td>
            <td><Link to={`/users/projects/${user.id}`}>{user.lastname}</Link></td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
            { users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList