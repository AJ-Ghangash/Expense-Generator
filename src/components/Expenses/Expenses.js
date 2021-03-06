import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2021')
  
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
