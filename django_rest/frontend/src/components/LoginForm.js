import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {login: '', password: ''}

    }

    handleSubmit(event) {
        event.preventDefault()
        // console.log('handleSubmit: ' + this.state.login)
        this.props.obtainAuthToken(this.state.login, this.state.password)

    }

    handleChange(event) {
        console.log('handleChange: ' + this.state.password)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }



    render() {
        return (
            <form  onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="login" placeholder="login"
                       value={this.state.login} onChange={(event) => this.handleChange(event)}/>
                <input type="password" name="password" placeholder="password"
                       value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}

export default LoginForm