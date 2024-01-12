import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/expenseSlice';

function FormComponent({addUserData}) {
     

    const dispatch = useDispatch();
    
    const [date,setDate] = useState('');
    const [category, setCategory] = useState('Category');
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState();

    const [dateError,setDateError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [titleError,setTitleError] = useState('')
    const [amountError,setAmountError] = useState('');

    function handleSubmit(){
        console.log("OnClicked");
        //Title Validation
        if(title === ""){
            setTitleError("Please enter a title")
        }
        else{
           setTitleError("")
        }
        // Category Validation
        if(category === "Category"){
           
            setCategoryError("Please select a Category")
        }
        else{
           setCategoryError("")
        }
        //Amount Validation
        if (isNaN(amount) || amount <= 0){
            setAmountError("Please add some amount")
        }
        else{
            setAmountError("")
        }
        //Date Validation
        if(date === ""){
            setDateError("Please select a date")
        }
        else{
           setDateError("")
        }
       //calling dispatch only if all fields are filled
        if(title && category!='Category' && amount >0 && date)
        {
            console.log("Calling dispatch");
           
               const obj = {
                Title:title,
                Date:date,
                Category:category,
                Amount:amount,
               }

               dispatch(add(obj));
               console.log('Object added in Redux Store :');
               console.log(obj);
        }
     
      
    }

    const handleSelectChange = (event) => {
      setCategory(event.target.innerText); // Use innerText to get the text content of the clicked item
    };
  
  const error_color='red'
  return (
    <div className='border  mt-3 p-3 ' style={{backgroundColor:'pink'}} id='form'>
         <div className='mt-3'>
            <label>Title</label>
            <input type='text' className='form-control' placeholder='Enter Title'  value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
             {titleError&& <span style={{color:error_color}}>{titleError}</span>}
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
           {categoryError&& <span style={{color:error_color}}>{categoryError}</span>}
           
        </div>


        <div className='mt-3'>
            <label>Amount</label>
            <input type='number' placeholder='E.g : 100/-'  className='form-control' value={amount} onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
            {amountError && <span style={{color:error_color}}>{amountError}</span>}
        </div>

        <div className='mt-3'>
            <label>Date</label>
            <input type='date' className='form-control' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            {dateError && <span style={{color:error_color}}>{dateError}</span>}
        
        </div>

        <div className='mt-3'>
            <button className='btn btn-primary w-100' onClick={()=>{
               handleSubmit();
 
            }}>Submit</button>
        </div>

    </div>
  )
}

export default FormComponent