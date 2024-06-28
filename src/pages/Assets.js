import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { addAssets, updateAsset } from "../reducer/reducer";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
`;

const AssetsContainer = styled.div`
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

const Assets = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.finance.assets);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addAssets({ name, value: parseFloat(value) }));
  };

  return (
    <Container>
      <Header />
      <Heading>Assets</Heading>
      <AssetsContainer>
        <Label>Warehouse:</Label>
        <Input
          type="number"
          name="warehouse"
          placeholder="Enter value of warehouse"
          value={assets.warehouse}
          onChange={handleChange}
        />
        <Label>Stock:</Label>
        <Input
          type="number"
          name="stock"
          placeholder="Enter value of stock"
          value={assets.stock}
          onChange={handleChange}
        />
        <Label>Land:</Label>
        <Input
          type="number"
          name="land"
          placeholder="Enter value of land"
          value={assets.land}
          onChange={handleChange}
        />
        <Label>Gold:</Label>
        <Input
          type="number"
          name="gold"
          placeholder="Enter value of gold"
          value={assets.gold}
          onChange={handleChange}
        />
      </AssetsContainer>
    </Container>
  );
};

export default Assets;
