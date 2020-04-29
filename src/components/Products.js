import React, { useState } from "react";
import arrow from "./img/Arrow.png";
import { connect } from "react-redux";

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

// const Products = (props) => {
//     console.log(props.products, "Products");

//     //MOVED TO REDUCER
//     // const visibleCategories = props.products.map(
//     //     (item) => (item.visible = false)
//     // );

//     // console.log(visibleCategories, "visible categories - Product.js");
// const[flip ,setFlip] = useState(false)
//     const showProducts = (item, index) => {
//         console.log(item, "Drop Arrow");

//         return (
//             <>
//                 <div
//                     key={index}
//                     style={{ display: "flex", flexDirection: "row" ,justifyContent:"center",alignItems:"center",position:"relative"}}
//                 >
//                     <ArrowDropDownIcon   onClick={()=>{  setFlip(false)}} color="action" fontSize="large" />
//                     <div  key={index} style={{ fontSize: "24px" ,margin:"2rem" }}>
//                         {item.category.toUpperCase()}
//                     </div>
//                     <div  style={{ padding:"4rem" ,margin:"2rem", position:"relative",    top: "7rem",
//     left: "-12rem"}}>
//                         {item.content.map((product, index) => {
//                             return (
//                                 <div  key={index} style={{  margin:"1rem",display:"flex", justifyContent:"space-evenly",alignItems:"flex-start"}}>

//                                     <div>{product.name}</div>
//                                     <div>{product.description}</div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </>
//         );
//     };

//     const noShowProducts = (item, index) => {
//         console.log(item, "Drop Arrow");

//         return (
//             <>
//                 <div
//                     key={index}
//                     style={{ display: "flex", flexDirection: "row" }}
//                 >
//                     <ArrowRightIcon onClick={()=> setFlip(true)} color="action" fontSize="large" />
//                     <div key={item.category} style={{ fontSize: "24px" }}>
//                         {item.category.toUpperCase()}
//                     </div>
//                 </div>
//             </>
//         );
//     };

//     return (
//         <div>
//             {props.products.map((item, index) => (
//                 <div key={index}>
//                     {flip
//                         ? showProducts(item, index)
//                         : noShowProducts(item, index)}
//                 </div>
//             ))}
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//     };
// };

// export default connect(mapStateToProps)(Products);
/// if item catory eqaul item cataogory in map toggle

const Products = (props) => {
  console.log(props,"ll")
  return (
  <div className="nav">


   <div class="multi-level">
   
{ props.products.map(info => <div className="item">
<input type="checkbox" style={{color:"black !important"}} id={info.category}/>
<img src={arrow} class="arrow"/>
<label htmlFor={info.category} >{info.category}</label>
<ul>
                    <li><a href="#">{info.content.map((data)=><div><h3>{data.name}</h3><h5>{data.description}</h5></div> )}</a></li>
                    
                </ul>
</div> ) 
}
   </div>     
  </div>
  );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(Products);