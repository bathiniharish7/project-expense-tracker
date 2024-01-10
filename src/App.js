import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import ChartComponent from './components/ChartComponent';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="container">

      <div className='row'>

        <div className='col-6'>
          <FormComponent/>
        </div>
        <div className='col-6 '>
          <PieChart/>

        </div>
       
      </div>
      
      
    
    </div>
  );
}

export default App;
