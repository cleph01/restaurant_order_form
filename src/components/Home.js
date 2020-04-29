import React from "react";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import Message from "./Message";
import Products from "./Products";
import Footer from "./Footer";

import styled from "styled-components";

const Container = styled.div`
    background: #ededed;
`;

const Home = (props) => {
    return (
        <Container>
            <Header />
            <ShoppingCart />
            <Message />
            <Products />
            <Footer />
        </Container>
    );
};

export default Home;
