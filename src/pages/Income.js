// Income.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../reducer/reducer"; // Adjust the path accordingly
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

const IncomeContainer = styled.div`
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

const Income = () => {
  const dispatch = useDispatch();
  const [incomeValues, setIncomeValues] = useState({
    salary: "",
    shop: "",
    agriculture: "",
    foreignIncome: "",
  });

  const handleChange = () => {};

  const handleAdd = () => {};

  return (
    <Container>
      <Header />
      <Heading>Income</Heading>
      <IncomeContainer>
        <Label>Salary:</Label>
        <Input
          type="number"
          name="salary"
          placeholder="Enter value of salary"
          onChange={handleChange}
        />
        <Label>Shop:</Label>
        <Input
          type="number"
          name="shop"
          placeholder="Enter value of shop"
          onChange={handleChange}
        />
        <Label>Agriculture:</Label>
        <Input
          type="number"
          name="agriculture"
          placeholder="Enter value of agriculture"
          onChange={handleChange}
        />
        <Label>Foreign Income:</Label>
        <Input
          type="number"
          name="foreignIncome"
          placeholder="Enter value of foreignIncome"
          onChange={handleChange}
        />
        <AddButton onClick={handleAdd}>Add</AddButton>
      </IncomeContainer>
    </Container>
  );
};

export default Income;
