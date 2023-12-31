//import logo from "./logo.svg";

import React,{ useState } from 'react';
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
//import ExpensesFilter from './components/Expenses/ExpensesFilter';

const dummyExpenses=[
  {id:1, title:'Bike petrol',amount:200,date:new Date(2023,12,24),location:'koundampalayam'},
  {id:2, title:'groceries',amount:700,date:new Date(2023,11,13),location:'koundampalayam'},
  {id:3, title:'Snacks',amount:300,date:new Date(2023,8,19),location:'saibaba kovil'},
  {id:4, title:'others',amount:400,date:new Date(2023,7,7),location:'somewhere'}
 ]
 

const App=() =>{
  const [expenses,setExpenses]=useState(dummyExpenses);
 
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses) => [expense,...prevExpenses]);
  };

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
