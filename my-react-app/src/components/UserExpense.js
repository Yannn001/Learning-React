import ExpenseForm from "./ExpenseForm";
import "./UserExpense.css";
import { useState } from "react";

const UserExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (onSaveExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...onSaveExpenseData,
    };
    // console.log(expenseData)
    props.onAddExpenses(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseData} />}
    </div>
  );
};

export default UserExpenses;
