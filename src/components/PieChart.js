import React from 'react'

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from 'react-redux';


function PieChart() {
    console.log("Componend");
    const pieChartData = useSelector(state => state.expenseSlice);
    console.log(pieChartData);

    const foodTotal = pieChartData.Food.reduce((accumulator,current)=>{
        return accumulator + current.Amount;
    },0)
   
    const TravelTotal = pieChartData.Travel.reduce((accumulator,current)=>{
        return accumulator + current.Amount;
    },0)

    const MoviesTotal = pieChartData.Movies.reduce((accumulator,current)=>{
        return accumulator + current.Amount;
    },0)

    const HealthTotal = pieChartData.Health.reduce((accumulator,current)=>{
        return accumulator + current.Amount;
    },0)

    const ShoppingTotal = pieChartData.Shopping.reduce((accumulator,current)=>{
        return accumulator + current.Amount;
    },0)


    console.log(foodTotal);
    const data = {
        labels: ['Food', 'Travel', 'Movies','Health','Shopping'],
        datasets: [
          {
            data: [foodTotal, TravelTotal, MoviesTotal,HealthTotal,ShoppingTotal],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };

  return (
    <div style={{height:'60vh'}} >
      <Pie data={data} />
    </div>
  )
}

export default PieChart