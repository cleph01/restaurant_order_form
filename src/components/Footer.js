import React from "react";
import GoogleMap from "./GoogleMap";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.footer`
    margin-top: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const MapWrapper = styled.div`
    display: flex;
`;

const Footer = (props) => {
    return (
        <Container>
            <GoogleMap />

            <div>
                <h3>{props.businessInfo.businessName}</h3>
                <h5>
                    {props.businessInfo.address} | {props.businessInfo.tel}
                </h5>
                <h5>{props.businessInfo.website}</h5>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        businessInfo: state.businessInfo,
    };
};

export default connect(mapStateToProps, {})(Footer);
