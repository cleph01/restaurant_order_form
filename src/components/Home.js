import React from "react";

//Start Components
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import Message from "./Message";
import Products from "./Products";
import Footer from "./Footer";
//End Components

import styled from "styled-components";

const Container = styled.div`
    background: #ededed;
`;

const Home = (props) => {
    //Save menuItems from Props to Variable
    let menuItems = props.businessData.menuItems;
    //Removes Menu Items from Props Business Data
    delete props.businessData.menuItems;
    //Saves Business Data only to variable
    const businessData = props.businessData;
    //Array to Hold Category List
    let category_array = [];
    //Array to Hold Product Object List
    let productObj_array = [];

    // Loops Menu Items and adds category to array
    for (let i = 0; i < menuItems.length; i++) {
        if (!category_array.includes(menuItems[i].category)) {
            category_array.push(menuItems[i].category);
        }
    }

    //Outter Loop - Loops Category Array
    for (let i = 0; i < category_array.length; i++) {
        let temp_object = {};
        let temp_array = [];

        const category = category_array[i];

        //Inner Loop - Loops  Menu Items according to category
        for (let x = 0; x < menuItems.length; x++) {
            if (category === menuItems[x].category) {
                temp_array.push({
                    name: menuItems[x].itemName,
                    description: menuItems[x].description,
                    price: menuItems[x].price,
                });
            }
            //Sets Category and Content Keys and Values for Product Item
            temp_object.category = category;
            temp_object.content = temp_array;
        }
        productObj_array.push(temp_object);
    }

    console.log(productObj_array, "Product Object Array");

    return (
        <>
            <Container>
                <Header businessData={businessData} />
                <ShoppingCart />
                <Message />
                <Products productData={productObj_array} />
                <Footer businessData={businessData} />
            </Container>
        </>
    );
};

export default Home;
