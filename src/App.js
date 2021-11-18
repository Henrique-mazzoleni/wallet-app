import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started</h2>
      <p>This is also visible!</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
