import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'name': '',
            'users': [],
            'link': '',
        }

    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createProject(this.state.name, this.state.users, this.state.link)

    }

    handleChange(event) {
        console.log('handleChange: ' + this.state.password)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleUsersChange(event) {
        if (!event.target.selectedOptions) {
            return
        }

        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(parseInt(event.target.selectedOptions.item(i).value))
        }
        this.setState({
            "users": users
        })
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="name" placeholder="name"
                       value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                <select multiple onChange={(event) => this.handleUsersChange(event)}>
                    {this.props.users.map((user) => <option value={user.id}>{user.username}</option>)}
                </select>
                <input type="text" name="link" placeholder="link"
                       value={this.state.link} onChange={(event) => this.handleChange(event)}/>
                <input class="logout" type="submit" value="Create"/>
            </form>
        );
    }
}

export default ProjectForm