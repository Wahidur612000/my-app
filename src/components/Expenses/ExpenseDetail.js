import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseDetail(props) {
  // const [price,setPrice]=useState(props.amount);
  // function priceHandler(){
  //     setPrice(100);
  // }
  return (
   
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs{props.amount}</div>
      </div>
    
  );
}
export default ExpenseDetail;
