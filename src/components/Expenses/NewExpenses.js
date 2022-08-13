import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function NewExpenses(props) {
  const [pickedYear, selectYear] = useState("2019");
  const filterSelector = (yearPicked) => {
    selectYear(yearPicked);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter select={pickedYear} onChangeFilter={filterSelector} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default NewExpenses;
