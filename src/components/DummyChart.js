import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
function DummyChart() {

    const pieChartData = useSelector(state => state.expenseSlice);
    console.log("pieChartData",pieChartData);

    const resultObject = {};

   
    pieChartData.All.forEach(item => {
        if (resultObject[item.Category]) {
            resultObject[item.Category] += item.Amount;
        } else {
            resultObject[item.Category] = item.Amount;
        }
    });
    
    console.log(resultObject);
    console.log(Object.keys(resultObject).map((category)=>{
        return {value: resultObject[category] ,name:category}
    }));

    


    const option1= {
        
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}:'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true,
                    length: 10
                },
                data: [
                    { value: 1, name: 'Shopping' },
                    { value: 1, name: 'Health' },
                    { value: 1, name: 'Movies' },
                    { value: 1, name: 'Travel' },
                    { value: 1, name: 'Food' }
                ]
            }
        ],
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'middle',
            style: {
                text: 'Add Data To Display Chart',
                textAlign: 'center',
                fill: '#333',
                fontSize: 10
            }
        }]
    };

 
    return (
      
        <ReactECharts
        option={option1}
    />
          
       
    );
}

export default DummyChart;
