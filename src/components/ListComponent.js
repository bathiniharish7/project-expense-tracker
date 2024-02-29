import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function ListComponent() {
  const list = useSelector(state => state.expenseSlice.All);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <table  style={{ width: '100%' }} className='table table-dark' >
        <thead className=''>
          <tr>
            <th>SL.NO</th>
            <th>Category</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.Category}</td>
              <td>{item.Title}</td>
              <td>{item.Amount}</td>
              <td>{item.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListComponent;
