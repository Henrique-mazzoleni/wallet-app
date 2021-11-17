import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>November, 17th 2021</div>
      <div className="expense-item__description">
        <h2>JBL Box</h2>
        <div className="expense-item__price">$149,00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
