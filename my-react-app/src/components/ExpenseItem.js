import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle("Updated");
  }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>click me!</button>
    </Card>
  );
}
 
export default ExpenseItem;
