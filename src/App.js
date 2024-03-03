import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';

import PieChart from './components/PieChart';
import ListComponent from './components/ListComponent';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import Chart from './components/Chart';

function App() {
  const pieChartData = useSelector(state => state.expenseSlice);


  return (
    <>
    <h1 className='text-center bg-dark text-light w-100 p-3 '>EXPENSES TRACKER USING REDUX-TOOLKIT</h1>
    <div className="container ">
      {/* <div style={{height:"400px",width:"100%"}}>
        <Chart/>
      </div> */}
      
    


      <div className='row mt-3'>
        <div className='col-12 col-md-6'>
          <FormComponent/>
        </div>
        <div className='col-12 mt-5 col-md-6 mt-md-0' id='right'>
          <h4 className='text-center m-0 '>Expenses Distribution by Category</h4>
          <div className='chart' >
        
          {/* {pieChartData.All.length >0 ?<PieChart /> : <div className='circle'>
            <h1>Add Expenses</h1>
            <h1>To Show Graph</h1>
          </div>} */}
          <Chart/>
          
         
          </div>
         
         
        
        </div>
      </div>



      <div className='row m-3'>
        <div className='col-12 text-center'>
          <h1>EXPENSES HISTORY</h1>
        </div>
        <div className='col-12 justify-content-center'>
        
         <ListComponent/>
        </div>
      </div>
      
      
    
    </div>
    </>
   
  );
}

export default App;
