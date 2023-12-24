import './ExpenseItem.css';
function ExpenseItem(){
   const expenseDate=new Date(2023/12/24);
    const expenseTitle='Bike petrol';
    const expenseAmount=200;
    const LocationOfExpenditure='Koundampalayam';


    return( <div className="expense-item">
        <h1>Expense Item</h1>
    <div>{expenseDate.toISOString()}</div>
        <div className="expense-item-description">
            <h3>{expenseTitle}</h3>
        <div className="expense-item-price">Rs {expenseAmount}</div>
        <div className="location">{LocationOfExpenditure}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;