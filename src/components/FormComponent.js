import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/expenseSlice';

function FormComponent({addUserData}) {


    const dispatch = useDispatch();
    const [date,setDate] = useState('');
    const [category, setCategory] = useState('Category');
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0);

    const handleSelectChange = (event) => {
      setCategory(event.target.innerText); // Use innerText to get the text content of the clicked item
    };
  

  return (
    <div className='border  mt-3 p-3 ' style={{backgroundColor:'pink'}} id='form'>
         <div className='mt-3'>
            <label>Titel</label>
            <input type='text' className='form-control' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>

        <div className='mt-3'>
            <label>Select Category</label>
            <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"

        >
          {category}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li>
            <a
              className={`dropdown-item${category === 'Food' ? ' active' : ''}`}
              href="#"
              onClick={handleSelectChange}
            >
              Food
            </a>
          </li>
          <li>
            <a
              className={`dropdown-item${category === 'Travel' ? ' active' : ''}`}
              href="#"
              onClick={handleSelectChange}
            >
             Travel
            </a>
          </li>
          <li>
            <a
              className={`dropdown-item${category === 'Movies' ? ' active' : ''}`}
              href="#"
              onClick={handleSelectChange}
            >
              Movies
            </a>
          </li>
          <li>
            <a
              className={`dropdown-item${category === 'Health' ? ' active' : ''}`}
              href="#"
              onClick={handleSelectChange}
            >
              Health
            </a>
          </li>
          <li>
            <a
              className={`dropdown-item${category === 'Shopping' ? ' active' : ''}`}
              href="#"
              onClick={handleSelectChange}
            >
              Shopping
            </a>
          </li>
 
        </ul>
           </div>
        </div>


        <div className='mt-3'>
            <label>Amount</label>
            <input type='number' className='form-control' value={amount} onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
        </div>

        <div className='mt-3'>
            <label>Date</label>
            <input type='date' className='form-control' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
        </div>

        <div className='mt-3'>
            <button className='btn btn-primary w-100' onClick={()=>{
                const obj = {
                    Title:title,
                    Date:date,
                    Category:category,
                    Amount:amount,
                }



                dispatch(add(obj))
                console.log(obj);

               
               
            }}>Submit</button>
        </div>

    </div>
  )
}

export default FormComponent