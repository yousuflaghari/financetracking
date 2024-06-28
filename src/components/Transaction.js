import React from "react";
import styled from "styled-components";

const TransactionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  width: 300px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Label = styled.p`
  margin: 0;
  font-weight: bold;
  color: #333;
`;

const Value = styled.p`
  margin: 0;
  color: #555;
`;

const Transaction = ({ name, value, type, date }) => {
  return (
    <TransactionContainer>
      <InfoContainer>
        <Label>Name:</Label>
        <Value>{name}</Value>
      </InfoContainer>
      <InfoContainer>
        <Label>Value:</Label>
        <Value>Rs: {value}</Value>
      </InfoContainer>
      <InfoContainer>
        <Label>Type:</Label>
        <Value>{type}</Value>
      </InfoContainer>
      <InfoContainer>
        <Label>Date:</Label>
        <Value>{date}</Value>
      </InfoContainer>
    </TransactionContainer>
  );
};

export default Transaction;
