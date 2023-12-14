import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div
      className="alert alert-primary"
      style={{ paddingBottom: "23px", paddingTop: "23px" }}
    >
      <span>
        Spent so far: {currency.value}
        {totalExpenses}
      </span>
    </div>
  );
};
export default ExpenseTotal;
