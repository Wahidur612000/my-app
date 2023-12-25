function ExpenseDetail(props){
    return(
        <div className="expense-item__description">
            <h3>{props.title}</h3>
            <div className="location">{props.location}</div>
        <div className="expense-item__price">Rs {props.amount}</div>
        
        </div>
    );
}
export default ExpenseDetail;