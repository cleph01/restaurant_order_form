import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px 20px;
    border-radius: 5px;
`;

const Header = styled.div`
    padding: 20px;
    background-color:#445a82;
    color:#fff;
`;

const Cart = styled.div`
    padding:20px;    
    text-align:center;
    background-color:#fff;

`;


const ShoppingCart = () => {

    const [ items, setItems ] = useState([]);

    return (
        <Container>
            <Header>
                <div>Pick up</div>
                <div>Ready for pick up: 20 - 40m</div>
            </Header>
            <Cart>
                {items.length == 0 ? 'Your bag is empty' : 'Your bag is NOT empty'}
            </Cart>
        </Container>
    );
};

export default ShoppingCart;