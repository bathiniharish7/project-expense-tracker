import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart  } from "chart.js/auto";

function PieChart() {
  const pieChartData = useSelector(state => state.expenseSlice);
  console.log("pieChartData",pieChartData.All.length);

  const foodTotal = pieChartData.Food.reduce((accumulator, current) => {
    return accumulator + current.Amount;
  }, 0);

  const TravelTotal = pieChartData.Travel.reduce((accumulator, current) => {
    return accumulator + current.Amount;
  }, 0);

  const MoviesTotal = pieChartData.Movies.reduce((accumulator, current) => {
    return accumulator + current.Amount;
  }, 0);

  const HealthTotal = pieChartData.Health.reduce((accumulator, current) => {
    return accumulator + current.Amount;
  }, 0);

  const ShoppingTotal = pieChartData.Shopping.reduce((accumulator, current) => {
    return accumulator + current.Amount;
  }, 0);

  const data = {
    labels: ['Food', 'Travel', 'Movies', 'Health', 'Shopping'],
    datasets: [
      {
        data: [foodTotal, TravelTotal, MoviesTotal, HealthTotal, ShoppingTotal],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57'],
      },
    ],
  };
 
  const chartTitle ='Expenses Distribution by Category';
  return (
    <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Pie data={data} />
      
      
    </div>
  );
}

export default PieChart;
