import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 11, 17);
  const expenseTitle = "JBL Box";
  const expenseAmount = 149.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
