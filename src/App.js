import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';

import PieChart from './components/PieChart';
import ListComponent from './components/ListComponent';


function App() {
  return (
    <div className="container ">
      
      <div className='row mt-3 '>
        <div className='col-12 ' >
          <h1 className='text-center bg-dark text-light '>EXPENSES TRACKER USING REDUX-TOOLKIT</h1>
        </div>
      </div>


      <div className='row mt-3'>
        <div className='col-12 col-md-6'>
          <FormComponent/>
        </div>
        <div className='col-12 mt-5 col-md-6 mt-md-0'>
        <h4 className='text-center m-0 '>Expenses Distribution by Category</h4>
        <PieChart />
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
  );
}

export default App;
