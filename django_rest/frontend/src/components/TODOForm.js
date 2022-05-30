import React from 'react'

class TODOForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', project: 1, text: '', executor: 1, link: '', is_active: true, }
    }

    handleChange(event) {
        console.log('handleChange: ' + this.state.password)

        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );

    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createTODO(this.state.name, this.state.project, this.state.text, this.state.link, this.state.executor, this.state.is_active)
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="name" placeholder="name"
                       value={this.state.name} onChange={(event) => this.handleChange(event)}/>

                <select onChange={(event) => this.handleChange(event)}>
                    {this.props.projects.map((project) => <option value={project.id}>{project.name}</option>)}
                </select>

                <input type="text" name="text" placeholder="text"
                       value={this.state.text} onChange={(event) => this.handleChange(event)}/>

                <input type="text" name="link" placeholder="link"
                       value={this.state.link} onChange={(event) => this.handleChange(event)}/>

                <select onChange={(event) => this.handleChange(event)}>
                    {this.props.users.map((user) => <option value={user.id}>{user.username}</option>)}
                </select>

                <input type="checkbox" checked="true" name="is_active"
                       value={this.state.is_active} onChange={(event) => this.handleChange(event)}/>

                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default TODOForm