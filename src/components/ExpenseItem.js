import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';
function ExpenseItem(props){
//    const expenseDate=new Date(2023/12/24);
//     const expenseTitle='Bike petrol';
//     const expenseAmount=200;
//     const LocationOfExpenditure='Koundampalayam';
 

    return( 
    <div className="expense-item">
         <ExpenseDate date={props.date}/> 
        <ExpenseDetail amount= {props.amount}  location={props.location}   title={props.title}  />
    </div>
    );
}
export default ExpenseItem;