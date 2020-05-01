import React from "react";
import GoogleMap from "./GoogleMap";
import styled from "styled-components";


import "../components/googleMap.css";

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

const Footer = (props) => {
    return (
        <Container className="map">
            <GoogleMap />

            <div>
                <h3>{props.businessData.businessName}</h3>
                <h5>
                    {props.businessData.address} |{" "}
                    {props.businessData.phoneNumber}
                </h5>
                <h5>{props.businessData.website}</h5>
            </div>
        </Container>
    );
};

export default Footer;
