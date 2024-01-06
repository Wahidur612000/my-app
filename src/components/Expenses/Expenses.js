import React ,{ useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseDate from './ExpenseDate';
import ExpensesChart from './ExpensesChart';


function Expenses(props){

  const [filteredYear,setFilteredYear]=useState('2020');
  function filteredHandler(selectedYear){
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear}
           changeFilter={filteredHandler} />
          <ExpensesChart expenses={filteredExpenses}/>
     
     {filteredExpenses.length===1  && <p>Only single Expense here. Please add more...</p>}
     {filteredExpenses.length===0 ? (
     <p>No Expenses Found</p>):(
      
        filteredExpenses.map((val)=>
        <ExpenseItem 
        key={val.id}
        title={val.title} 
        amount={val.amount} 
        date={val.date } 
        ></ExpenseItem>
      )
     )
    } 
     
        </Card>
    );
}
export default Expenses;