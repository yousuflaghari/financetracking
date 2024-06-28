import React, { useState } from "react";
import styled from "styled-components";
import Transaction from "../components/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { addtransaction } from "../reducer/reducer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 90vh;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Input2 = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TransactionsList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const InputDate = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.finance.transaction);
  const [transaction, setTransaction] = useState({
    name: "",
    value: "",
    type: "income",
    date: "",
  });

  const handleChange = (key, value) => {
    setTransaction((transaction) => ({ ...transaction, [key]: value }));
  };

  const Addtransaction = () => {
    if (transaction.name && transaction.value && transaction.date) {
      dispatch(addtransaction(transaction));
      setTransaction({
        name: "",
        value: "",
        type: "income",
        date: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Container>
      <h1>All transactions</h1>
      <TransactionsList>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            name={transaction.name}
            value={transaction.value}
            type={transaction.type}
            date={transaction.date}
          />
        ))}
      </TransactionsList>
      <Form>
        <Input
          name="name"
          placeholder="Enter name"
          value={transaction.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input2
          name="value"
          type="number"
          placeholder="value"
          value={transaction.value}
          onChange={(e) => handleChange("value", e.target.value)}
        />
        <InputDate
          name="date"
          type="date"
          value={transaction.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
        <Select
          name="type"
          value={transaction.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <Button onClick={Addtransaction}>Add Transaction</Button>
      </Form>
    </Container>
  );
};

export default Main;
