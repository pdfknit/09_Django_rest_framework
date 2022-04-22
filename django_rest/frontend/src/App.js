import React from 'react';
import './App.css';
import UserList from "./components/Users_list";
import ProjectList from "./components/Project_list";
import UsersProjectList from "./components/UsersProject_list";
import ProjectsTODOList from "./components/ProjectsTODO_list";
import TODOList from "./components/TODO_list";
import axios from 'axios'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./components/404";
import {Route, Routes, BrowserRouter} from "react-router-dom"


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/basic-user/')
            .then(response => {
                const users = response.data
                this.setState({
                    'users': users
                })
            })
            .catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/basic-project/')
            .then(response => {
                const projects = response.data
                this.setState({
                    'projects': projects
                })
            })
            .catch(error => console.log(error))
        axios.get('http://localhost:8000/api/basic-todo/')
            .then(response => {
                const todos = response.data
                this.setState({
                    'todos': todos
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path='/' element={
                            <div>
                                <UserList users={this.state.users}/>
                                <ProjectList projects={this.state.projects}/>
                                <TODOList todos={this.state.todos}/>
                            </div>
                        }/>
                        <Route exact path='/users' element={
                            <div> <UserList users={this.state.users}/> </div>
                        }/>
                        <Route exact path='/projects' element={
                            <div> <ProjectList projects={this.state.projects}/></div>
                        }/>
                        <Route exact path='/users/projects/:id' element={
                            <div> <UsersProjectList projects={this.state.projects}/></div>
                        }/>
                        <Route exact path='/todos' element={
                            <div><TODOList todos={this.state.todos}/></div>
                        }/>
                        <Route exact path='/projects/todos/:id' element={
                            <div> <ProjectsTODOList todos={this.state.todos}/></div>
                        }/>
                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;


