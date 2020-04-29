import React, { useState } from "react";

import { connect } from "react-redux";

import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Container = styled.div`
    margin: 20px 20px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`;

const Products = (props) => {
    console.log(props.products, "Products");

    //MOVED TO REDUCER
    // const visibleCategories = props.products.map(
    //     (item) => (item.visible = false)
    // );

    // console.log(visibleCategories, "visible categories - Product.js");

    const showProducts = (item, index) => {
        console.log(item, "Drop Arrow");

        return (
            <>
                <div
                    key={index}
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <ArrowDropDownIcon color="action" fontSize="large" />
                    <div style={{ fontSize: "24px" }}>
                        {item.category.toUpperCase()}
                    </div>
                    <div>
                        {item.content.map((product, index) => {
                            return (
                                <>
                                    <div>{product.name}</div>
                                    <div>{product.description}</div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    };

    const noShowProducts = (item, index) => {
        console.log(item, "Drop Arrow");

        return (
            <>
                <div
                    key={index}
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <ArrowRightIcon color="action" fontSize="large" />
                    <div style={{ fontSize: "24px" }}>
                        {item.category.toUpperCase()}
                    </div>
                </div>
            </>
        );
    };

    return (
        <div>
            {props.products.map((item, index) => (
                <div key={index}>
                    {item.visible
                        ? showProducts(item, index)
                        : noShowProducts(item, index)}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(Products);
