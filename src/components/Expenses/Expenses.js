import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const addFilterHandler = (chosenFilter) => {
    setFilterYear(chosenFilter);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={addFilterHandler} />
      {props.expenses
        .filter(
          (expense) => expense.date.getFullYear() === parseInt(filterYear)
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
