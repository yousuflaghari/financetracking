// Expense.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../reducer/reducer"; // Adjust the path accordingly
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Expense = () => {
  const dispatch = useDispatch();
  const [expenseValues, setExpenseValues] = useState({
    rent: "",
    utilities: "",
    groceries: "",
    transportation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    // Convert values to numbers before dispatching
    const expense = Object.fromEntries(
      Object.entries(expenseValues).map(([key, value]) => [
        key,
        parseFloat(value),
      ])
    );
    dispatch(addExpense(expense));
  };

  return (
    <Container>
      <Header />
      <Heading>Expenses</Heading>
      <ExpenseContainer>
        <Label>Rent:</Label>
        <Input
          type="number"
          name="rent"
          placeholder="Enter value of rent"
          value={expenseValues.rent}
          onChange={handleChange}
        />
        <Label>Utilities:</Label>
        <Input
          type="number"
          name="utilities"
          placeholder="Enter value of utilities"
          value={expenseValues.utilities}
          onChange={handleChange}
        />
        <Label>Groceries:</Label>
        <Input
          type="number"
          name="groceries"
          placeholder="Enter value of groceries"
          value={expenseValues.groceries}
          onChange={handleChange}
        />
        <Label>Transportation:</Label>
        <Input
          type="number"
          name="transportation"
          placeholder="Enter value of transportation"
          value={expenseValues.transportation}
          onChange={handleChange}
        />
        <AddButton onClick={handleAdd}>Add</AddButton>
      </ExpenseContainer>
    </Container>
  );
};

export default Expense;
