import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  flex-direction: column;
  background-color: blue;
  width: 15%;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: black;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 3px solid white;
  font-size: 12px;
  flex-direction: column;
  border-radius: 90px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 50px;
`;

const InfoText = styled.p`
  margin: 0px;
  font-size: large;
  color: aliceblue;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 20px;
  &:hover {
    color: lightgray;
    font-weight: bold;
  }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  margin-top: 20px;
  color: white;
  text-align: center;
  margin-top: 80px;
`;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Sidebar = () => {
  return (
    <Wrapper>
      <Side>
        <InfoBox>
          <InfoText>NET WORTH</InfoText>
          <InfoText>netWorth B</InfoText>
          <InfoText>USD</InfoText>
        </InfoBox>
        <NavigationLinks>
          <CustomLink to="/">Dashboard</CustomLink>
          <CustomLink to="/main">Main</CustomLink>
        </NavigationLinks>
        <MonthGrid>
          {months.map((month, index) => (
            <div key={index}>{month}</div>
          ))}
        </MonthGrid>
      </Side>
    </Wrapper>
  );
};

export default Sidebar;
