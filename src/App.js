import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expenses) => {
    console.log("added expense!");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
