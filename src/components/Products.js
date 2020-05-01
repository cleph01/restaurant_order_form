import React, { useState } from "react";
import arrow from "./img/Arrow.png";

import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./color.css";

const Container = styled.div`
    margin: 20px 20px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`;

const MenuItem = styled.div`
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 5px;
    background: #e1e1e1;
`;

const ItemName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`;

const ItemDescription = styled.p`
    font-size: 14px;
    margin: 0;
`;

const ItemPrice = styled.p`
    font-size: 12px;
    margin: 0;
`;

const Products = (props) => {
    console.log(props.productData, "product");

    const productData = props.productData;

    return (
        <div className="nav">
            <div className="multi-level">
                {productData.map((info, index) => (
                    <div key={index} className="item">
                        <input
                            type="checkbox"
                            style={{ color: "black !important" }}
                            id={info.category}
                        />
                        <img src={arrow} alt="arrow" className="arrow" />
                        <label htmlFor={info.category}>
                            {info.category.toUpperCase()}
                        </label>
                        <ul>
                            <li>
                                <a href="#">
                                    {info.content.map((data, index) => (
                                        <MenuItem key={index}>
                                            <ItemName>{data.name}</ItemName>
                                            <ItemDescription>
                                                {data.description}
                                            </ItemDescription>
                                            <ItemPrice>{data.price}</ItemPrice>
                                        </MenuItem>
                                    ))}
                                </a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//     };
// };

// export default connect(mapStateToProps)(Products);

export default Products;
