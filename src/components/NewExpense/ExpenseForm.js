import React from 'react';
import './ExpenseForm.css';

function ExpenseForm(){

    const titleChangeHandler=(event)=>{
        console.log(event.target.value);
    };
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>amount</label>
                <input type='number' min="1"  step="1" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2023-01-01" max="2024-01-01" />
            </div>
        </div>
        <div className='new-expenses__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};
export default ExpenseForm;