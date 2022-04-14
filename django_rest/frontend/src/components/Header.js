import React from "react";
import {
    HeaderBox,
    Container,
    Heading,
} from "./HeaderFooterStyles.js";

const Header = () => {
    return (
        <HeaderBox>
            <Container>
                <Heading>#TODO:</Heading>
            </Container>
        </HeaderBox>
    );
};
export default Header;