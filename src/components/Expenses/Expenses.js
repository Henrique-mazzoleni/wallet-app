import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const addFilterHandler = (chosenFilter) => {
    setFilterYear(chosenFilter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filterYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={addFilterHandler} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
