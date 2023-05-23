import "./NewExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredExpenses = props.items.filter((expense) => {
    // console.log(expense.date.getFullYear().toString() === selectedYear)
    return expense.date.getFullYear().toString() === selectedYear;
  });
  const selectYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
      {/* <span>{"year: " + console.log(filteredExpenses)}</span> */}
    </div>
  );
}

export default NewExpenses;
