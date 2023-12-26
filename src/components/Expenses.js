import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
function Expenses(props){
    return(
        <Card className='expenses'>
     {
        props.item.map((val)=><ExpenseItem title={val.title} amount={val.amount} date={val.date } location={val.location}></ExpenseItem>)
      }
        </Card>
    )
}
export default Expenses;