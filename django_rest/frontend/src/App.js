import React from 'react';
import './App.css';
import UserList from "./components/Users_list";
import ProjectList from "./components/Project_list";
import UsersProjectList from "./components/UsersProject_list";
import ProjectsTODOList from "./components/ProjectsTODO_list";
import TODOList from "./components/TODO_list";
import GraphList from "./components/Graph_list";
import axios from 'axios'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./components/404";
import {Route, Routes, BrowserRouter, Link} from "react-router-dom"
import LoginForm from "./components/LoginForm";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token': '',
        }
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-auth-token/', {
            username: username,
            password: password
        })
            .then(response => {
                console.log(response.data)
            }).catch(error => alert('Неверный логин или пароль'))
    }

    obtainAuthToken(login, password) {
        // console.log('obtainAuthToken: ' + login)
        axios.post('http://127.0.0.1:8000/api-auth-token/', {username: login, password: password})
            .then(response => {
                const token = response.data.token
                console.log('Token: ' + token)
                localStorage.setItem('token', token)
                this.setState({
                    'token': token
                }, this.getData)
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.setState({
            'token': token
        }, this.getData)
    }

    isAuth() {
        return !!this.state.token
    }


    logout() {
        localStorage.setItem('token', '')
        this.setState({
            'token': ''
        }, this.getData)
    }

    getHeaders() {
        if (this.isAuth()) {
            return {
                'Authorization': 'Token ' + this.state.token
            }
        }
        return {}
    }

    // getGraphHeaders() {
    //     if (this.isAuth()) {
    //         return {
    //             'Authorization': 'Token ' + this.state.token,
    //             'query': 'usersById(pk:1){firstname, lastname, projectSet {name, todoSet {name}}}'
    //         }
    //     }
    //     return {}
    // }

    getData() {
        let headers = this.getHeaders()
        let graph_headers = this.getGraphHeaders()

        // axios.post('http://127.0.0.1:8000/graphene/', {graph_headers})
        //     .then(response => {
        //         const users_data = response.data
        //         this.setState({
        //             'users_data': users_data
        //         })
        //         console.log(this.state.users_data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         this.setState({
        //             'users_data': []
        //         })
        //     })

        axios.get('http://127.0.0.1:8000/api/basic-user/', {headers})
            .then(response => {
                const users = response.data
                this.setState({
                    'users': users
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    'users': []
                })
            })
        axios.get('http://127.0.0.1:8000/api/basic-project/', {headers})
            .then(response => {
                const projects = response.data
                this.setState({
                    'projects': projects
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    'projects': []
                })
            })
        axios.get('http://localhost:8000/api/basic-todo/', {headers})
            .then(response => {
                const todos = response.data
                this.setState({
                    'todos': todos
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    'todos': []
                })
            })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <div> {this.isAuth() ? <button class="logout" onClick={() => this.logout()}>Logout</button> :
                        <Link to='/login' class="logout">Login</Link>}</div>
                    <Routes>
                        <Route exact path='/login' element={<LoginForm
                            obtainAuthToken={(login, password) => this.obtainAuthToken(login, password)}/>}/>
                        <Route exact path='/' element={
                            <div>
                                <UserList users={this.state.users}/>
                                <ProjectList projects={this.state.projects}/>
                                <TODOList todos={this.state.todos}/>
                                {/*<GraphList graph={this.state.users_data}/>*/}
                            </div>
                        }/>
                        <Route exact path='/users' element={
                            <div><UserList users={this.state.users}/></div>
                        }/>

                        {/*<Route exact path='/user_data' element={*/}
                        {/*    <div><GraphList graphs={this.state.users_data}/></div>*/}
                        {/*}/>*/}

                        <Route exact path='/projects' element={
                            <div><ProjectList projects={this.state.projects}/></div>
                        }/>
                        <Route exact path='/users/projects/:id' element={
                            <div><UsersProjectList projects={this.state.projects}/></div>
                        }/>
                        <Route exact path='/todos' element={
                            <div><TODOList todos={this.state.todos}/></div>
                        }/>
                        <Route exact path='/projects/todos/:id' element={
                            <div><ProjectsTODOList todos={this.state.todos}/></div>
                        }/>
                        <Route path='*' element={<Page404/>}/>
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;


