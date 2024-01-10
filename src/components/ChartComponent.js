import React from 'react'

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";


function ChartComponent() {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };

  return (
    <div style={{height:'100vh'}}>
      <Pie data={data} />
    </div>
  )
}

export default ChartComponent