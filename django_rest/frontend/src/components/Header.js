import React from "react";
import {
    HeaderBox,
    Container,
    Heading, Nav, Element,
} from "./HeaderFooterStyles.js";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <HeaderBox>
            <Container>
                <Heading>#TODO:</Heading>
                <Nav>
                    <Element><Link to="/">Main</Link></Element>
                    <Element><Link to="/users">Users</Link></Element>
                    <Element><Link to="/projects">Projects</Link></Element>
                    <Element><Link to="/todos">TODOs</Link></Element>
                </Nav>
        </Container>
</HeaderBox>
)
    ;
};
export default Header;