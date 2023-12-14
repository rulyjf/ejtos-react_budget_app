import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    if (event.target.value >= totalExpenses) {
      updateBudget(event.target.value);
      setNewBudget(event.target.value);
    } else {
      alert("You can't reduce your budget value lower than the spending !");
    }
  };

  const updateBudget = async (budg) => {
    await dispatch({
      type: "SET_BUDGET",
      payload: budg,
    });
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ paddingBottom: "20px", paddingTop: "20px" }}
    >
      <span>Budget:{currency.value}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
