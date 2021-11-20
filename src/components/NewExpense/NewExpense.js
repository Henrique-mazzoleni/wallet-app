import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(true);

  const showFormHandler = () => {
    setShowForm((prevState) => (prevState ? false : true));
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        formShow={showForm}
        onShowClick={showFormHandler}
        onSaveExpenseData={saveExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
