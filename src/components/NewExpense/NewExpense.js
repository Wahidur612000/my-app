import React from 'react';
import './NewExpense.css'; 
import ExpensesForm from './ExpenseForm';

const NewExpense=()=>{
    return ( <div className="new-expense">
     <ExpensesForm></ExpensesForm> 
    </div>
    );
};

export default NewExpense;