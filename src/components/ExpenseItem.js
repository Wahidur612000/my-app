import './ExpenseItem.css';
function ExpenseItem(props){
//    const expenseDate=new Date(2023/12/24);
//     const expenseTitle='Bike petrol';
//     const expenseAmount=200;
//     const LocationOfExpenditure='Koundampalayam';


    return( 
    <div className="expense-item">
         <div>{props.date.toISOString()}</div> 
        <div className="expense-item__description">
            <h3>{props.title}</h3>
        <div className="expense-item__price">Rs {props.amount}</div>
        <div className="location">{props.location}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;