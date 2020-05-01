import React from "react";

import styled from "styled-components";

const Nav = styled.nav`
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const Header = (props) => {
    console.log(props.businessData, "header props");
    return (
        <>
            <Nav>
                <h3>{props.businessData.businessName}</h3>
                <h5>
                    {props.businessData.address} |{" "}
                    {props.businessData.phoneNumber}
                </h5>
                <h5>
                    {props.businessData.city}, {props.businessData.state}{" "}
                    {props.businessData.zipCode}
                </h5>
                <h5>{props.businessData.website}</h5>
            </Nav>
        </>
    );
};

export default Header;
