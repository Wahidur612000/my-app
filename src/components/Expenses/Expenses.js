import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props){
    return(
        <Card className='expenses'>
          <ExpensesFilter />
     {
        props.item.map((val, index)=>
        <ExpenseItem 
        key={val.id}
        title={val.title} 
        amount={val.amount} 
        date={val.date } 
        location={val.location}></ExpenseItem>)
      }
        </Card>
    )
}
export default Expenses;