import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from './UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props){

    const [title,setTitle]=useState(props.title);

     
    const clickHander=()=>{
        setTitle('Updated');
        console.log(setTitle);
    }; 

    return( 
    <Card className='expense-item'>
         <ExpenseDate date={props.date}/> 
        <ExpenseDetail amount= {props.amount}  location={props.location}   title={title}  />
       {/* <button onClick={clickHander}>Change title</button> */}
    </Card>
    );
}
export default ExpenseItem;