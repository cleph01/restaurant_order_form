import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 20px;
  border-radius: 5px;
`;

const Header = styled.div`
  padding: 20px;
  background-color: #445a82;
  color: #fff;
`;

const Cart = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #fff;
`;

const ShoppingCart = (props) => {
  const maxChar = (str) => {
    let array = str.map((info) => info);
    let charMap = {};

    console.log(array, "kknnk");
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    let ster = [];
    for (const [key, value] of Object.entries(charMap)) {
      ster.push({ item: key, quantity: value });
    }
    return ster;
  };

  const cartData = props.cart.map((item) => item.name);

  const [filterCart, setFilterCart] = useState([]);

  useEffect(() => setFilterCart(maxChar(cartData)), []);
  const cartArray = maxChar(cartData);

  console.log(cartArray, "hhhee");
  const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  const [items, setItems] = useState([]);
  console.log(cartArray.map((i) => i.quantity), "shoppingcart");
  return (
    <Container>
      <Header>
        <div>Pick up</div>
        <div>Ready for pick up: 20 - 40m</div>
      </Header>
      <Cart>
        {props.cart.length == 0 ? (
          <h1>Your bag is empty</h1>
        ) : (
          <div>
            {cartArray.map((i, index) => (
              <div key={index}>
                <h1>item: {i.item}</h1> <h2>quantity: {i.quantity}</h2>{" "}
              </div>
            ))}
            <br />
            Total: {getCartTotal()}
          </div>
        )}
      </Cart>
    </Container>
  );
};

export default ShoppingCart;
