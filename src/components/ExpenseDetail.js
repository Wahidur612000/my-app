import './ExpenseItem.css';
import React,{ useState } from 'react';

function ExpenseDetail(props){
    const [price,setPrice]=useState(props.amount);
    function priceHandler(){
        setPrice(100);
    }
    return(
        <div className="expense-item__description">
            <h3>{props.title}</h3>
            <div className="location">{props.location}</div>
        <div className="expense-item__price" >Rs {price}</div>
        {/* <button onClick={priceHandler}>Change Price</button> */}
        
        </div>
    );
}
export default ExpenseDetail;