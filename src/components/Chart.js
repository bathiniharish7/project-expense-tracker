import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
function Chart() {

    const pieChartData = useSelector(state => state.expenseSlice);
    // console.log("pieChartData",pieChartData);

    const resultObject = {};

   
    pieChartData.All.forEach(item => {
        if (resultObject[item.Category]) {
            resultObject[item.Category] += item.Amount;
        } else {
            resultObject[item.Category] = item.Amount;
        }
    });
    
    // console.log(resultObject);
    // console.log(Object.keys(resultObject).map((category)=>{
    //     return {value: resultObject[category] ,name:category}
    // }));

    


    const option1= {
        tooltip: {
            trigger: 'item'
          },
        
        series: [
            {
                name: 'Expense Details',
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
                    formatter: '{b}:{c}'
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
                data:  Object.keys(resultObject).map((category)=>{
                    return {value: resultObject[category] ,name:category}
                })
            }
        ],
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'middle',
            style: {
                text: '',
                textAlign: 'center',
                fill: '#333',
                fontSize: 10
            }
        }]
    };


    const option3 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '0%',
        left: 'center'
      },
      series: [
        {
          name: 'Expense Details',
          type: 'pie',
          radius: ['30%', '60%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            // show: false,
            // position: 'center'
            show: true,
            position: 'outside',
            formatter: 'Rs.{c}',
            fontSize:10
          },
        
          emphasis: {
            // scale: false,
            // label: {
            //   show: true,
            //   fontSize: 40,
            //   fontWeight: 'bold'
            // }
          },
          labelLine: {
            show: true,
            length:10
          },
          data: Object.keys(resultObject).map((category)=>{
            return {value: resultObject[category] ,name:category}
        })
        }
      ],
     
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
        option={option3}
    />
          
       
    );
}

export default Chart;
