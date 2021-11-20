import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const MOCH_DATA = [
  {
    id: "e1",
    title: "JBL Box",
    amount: 149.99,
    date: new Date(2021, 11, 17),
  },
  {
    id: "e2",
    title: "Bananas",
    amount: 2.17,
    date: new Date(2021, 11, 18),
  },
  {
    id: "e3",
    title: "Peach",
    amount: 1.51,
    date: new Date(2021, 10, 1),
  },
  {
    id: "e4",
    title: "Chocolate",
    amount: 5.99,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expensesList, setExpensesList] = useState(MOCH_DATA);

  const addExpenseHandler = (newExpense) => {
    setExpensesList((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesList} />
    </div>
  );
};

export default App;
