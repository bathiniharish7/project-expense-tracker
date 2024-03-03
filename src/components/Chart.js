import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
function Chart() {

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
                    { value: 1, name: 'Search Engine' },
                    { value: 1, name: 'Direct' },
                    { value: 1, name: 'Email' },
                    { value: 1, name: 'Union Ads' },
                    { value: 1, name: 'Video Ads' }
                ]
            }
        ],
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'middle',
            style: {
                text: 'Add Data To Display',
                textAlign: 'center',
                fill: '#333',
                fontSize: 10
            }
        }]
    };

    const option2 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10
            },
            label: {
                show: true,
                position: 'outside',
                formatter: '{b}: {c}'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: Object.keys(resultObject).map((category)=>{
                return {value: resultObject[category] ,name:category}
            })
          }
        ]
      };
   

    return (
      
        <ReactECharts
        option={pieChartData.All.length > 0 ? option2 : option1}
    />
          
       
    );
}

export default Chart;
