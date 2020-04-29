import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;

`;

const LeftColumn = styled.div`
    display:flex;
    flex-direction:row

`;


const RightColumn = styled.div`
    display:flex;
    justify-content:flex-end
`;

const Image = styled.img`
    width:100px;
    height:auto;
`;


const Item = (props) => {
    return (
        <Container>
            <LeftColumn>
                <h4>{props.item.name}</h4>
                <span>{props.item.description}</span>
            </LeftColumn>
            <RightColumn>
                <Image src="https://res-5.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414094/rmdhofy8pr1mpvxm4qw1.jpg" />
            </RightColumn>
        </Container>
    );
};

export default Item;