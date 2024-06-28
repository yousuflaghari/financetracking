import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import Sidebar from "../components/Sidebar";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  width: 100%;
  box-sizing: border-box;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 200px;
  width: 85%;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  justify-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const LargeSection = styled(Section)`
  grid-column: span 2;
`;

const SmallSection = styled(Section)`
  grid-column: span 1;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
`;

const Dashboard = () => {
  const transactions = useSelector((state) => state.finance.transaction);
  console.log(transactions, "lllll");

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + Number(transaction.value), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + Number(transaction.value), 0);

  const availableBalance = totalIncome - totalExpense;

  const transactionArray = Object.values(transactions);
  const weeklyTransactions = [[], [], [], []];
  const weeklyIncomeTransactions = [[], [], [], []];

  transactionArray.forEach((transaction) => {
    const transactionValue = Number(transaction.value);
    const transactionDate = new Date(transaction.date);
    const day = transactionDate.getDate();
    let weekindex;
    if (day <= 7) {
      weekindex = 0;
    } else if (day <= 15) {
      weekindex = 1;
    } else if (day <= 22) {
      weekindex = 2;
    } else {
      weekindex = 3;
    }

    if (transaction.type === "expense") {
      weeklyTransactions[weekindex].push(transactionValue);
    } else if (transaction.type === "income") {
      weeklyIncomeTransactions[weekindex].push(transactionValue);
    }
  });

  const weeklyExpenseSums = weeklyTransactions.map((week) =>
    week.reduce((sum, value) => sum + value, 0)
  );

  const weeklyIncomeSums = weeklyIncomeTransactions.map((week) =>
    week.reduce((sum, value) => sum + value, 0)
  );

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Income",
        data: weeklyIncomeSums,
        backgroundColor: "rgba(54, 162, 235, 0.4)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: weeklyExpenseSums,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Sidebar />
      <MainContentContainer>
        <MainContent>
          <LargeSection>
            <SectionTitle>Available Balance</SectionTitle>
            <div>Name: Muhammad Yousuf</div>
            <div>Balance: {availableBalance}</div>
          </LargeSection>

          <SmallSection>
            <SectionTitle>Total Income</SectionTitle>
            <div>Total: ${totalIncome}</div>
          </SmallSection>
          <SmallSection>
            <SectionTitle>Total Expense</SectionTitle>
            <div>Total: ${totalExpense}</div>
          </SmallSection>
          <div>
            <Doughnut
              data={data}
              width={400}
              height={400}
              options={{
                maintainAspectRatio: false,
                responsive: false,
              }}
            />
          </div>
          <div>
            <Bar
              data={data}
              width={400}
              height={400}
              options={{
                maintainAspectRatio: false,
                responsive: false,
              }}
            />
          </div>
        </MainContent>
      </MainContentContainer>
    </Container>
  );
};

export default Dashboard;
