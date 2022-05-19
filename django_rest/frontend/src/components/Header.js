import React from "react";
import {
    HeaderBox,
    Container,
    Heading, Nav, Element,
} from "./HeaderFooterStyles.js";
import {Link} from "react-router-dom";


const Header = () => {
    function logout(){
        return ''
    }
    return (
        <HeaderBox>
            <Container>
                <Heading>#TODO:</Heading>
                <Nav>
                    <Element><Link to="/">Main</Link></Element>
                    <Element><Link to="/users">Users</Link></Element>
                    <Element><Link to="/projects">Projects</Link></Element>
                    <Element><Link to="/todos">TODOs</Link></Element>
                    <Element><Link to="/user_data">Graph user data</Link></Element>
                    {/*<Element>*/}
                    {/*    /!*{ this.isAuth() ? <button onClick={()=>logout()}>Logout</button> : <Link to='/login'>Login</Link> }*!/*/}
                    {/*    {this.isAuth() ? <button>Logout</button> : <Link to='/login'>Login</Link>}*/}
                    {/*</Element>*/}
                </Nav>
            </Container>
        </HeaderBox>
    )
        ;
};
export default Header;