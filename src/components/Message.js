import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 20px 20px;
    padding: 20px;
    border-radius: 5px;
    background:#fff;
`;

const Message = () => {
    return (
        <Container>
            Take away is NOT IDEAL for pho or ramen. Please follow the instructions 
            below for proper reheating. Reheating Instructions: • Place noodles and 
            toppings in a bowl. (If the noodles are cold & clumped, reheat in 
            microwave for 45-90seconds) • Reboil broth in a sauce pan, then pour into 
            the bowl with noodles and toppings. ENJOY! (SLURPING ENCOURAGED!)
        </Container>
    );
};

export default Message;