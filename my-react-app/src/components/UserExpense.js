import ExpenseForm from "./ExpenseForm";
import "./UserExpense.css";

const UserExpenses = (props) => {
    const saveExpenseData = (onSaveExpenseData) => {
        const expenseData = {
            ...onSaveExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpenses(expenseData)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  );
};

export default UserExpenses;
