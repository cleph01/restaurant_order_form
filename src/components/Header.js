import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Nav = styled.nav`
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const Header = (props) => {
    console.log(props, "Header-Props");

    return (
        <>
            <Nav>
                <h3>{props.businessInfo.businessName}</h3>
                <h5>
                    {props.businessInfo.address} | {props.businessInfo.tel}
                </h5>
                <h5>{props.businessInfo.website}</h5>
            </Nav>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        businessInfo: state.businessInfo,
    };
};

export default connect(mapStateToProps)(Header);
