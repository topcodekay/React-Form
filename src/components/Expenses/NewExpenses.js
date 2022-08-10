import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function NewExpenses(props) {
  const [pickedYear, selectYear] = useState("2021");
  const filterSelector = (yearPicked) => {
    selectYear(yearPicked);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter select={pickedYear} onChangeFilter={filterSelector} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default NewExpenses;
