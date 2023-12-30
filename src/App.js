//import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense'


const App=() =>{
 const expenses=[
  { title:'Bike petrol',amount:200,date:new Date(2023,12,24),location:'koundampalayam'},
  { title:'groceries',amount:700,date:new Date(2023,11,13),location:'koundampalayam'},
  { title:'Snacks',amount:300,date:new Date(2023,8,19),location:'saibaba kovil'},
  { title:'others',amount:400,date:new Date(2023,7,7),location:'somewhere'}
 ]
 
  const addExpenseHandler=(expense)=>{
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
