import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
 const expenses=[
  { title:'Bike petrol',amount:200,date:new Date(2023,12,24),location:'koundampalayam'},
  { title:'groceries',amount:700,date:new Date(2023,11,13),location:'koundampalayam'},
  { title:'Snacks',amount:300,date:new Date(2023,8,19),location:'saibaba kovil'},
  { title:'others',amount:400,date:new Date(2023,7,7),location:'somewhere'}
 ]
 

// for (let i = 0; i < 2; i++) {
//   const title = prompt("Enter expense title:");
//   const amount = parseFloat(prompt("Enter expense amount:"));
//   //const date = new Date(prompt("Enter expense date (YYYY/MM/DD):"));
//   const location = prompt("Enter expense location:");

//   expenses.push({ title, amount,  location });
// }




  return (
    <div>
      <h2>lets get started</h2>
      {/* <div> Expense Items</div>
      <div>Food Rs 10</div>
      <div>Petrol Rs 100 </div>
      <div> Movies Rs 200</div> */}
      
      {
        expenses.map((val)=><ExpenseItem title={val.title} amount={val.amount} date={val.date } location={val.location}></ExpenseItem>)
      }
      
      {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
       */}
      
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
