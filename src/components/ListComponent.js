
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function ListComponent() {

    const list = useSelector(state=>state.expenseSlice.All);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>SL.NO</th>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {/* {items.map((item, index) => (
          <tr key={1}>
            <td></td>
          </tr>
        ))}
       */}
       {
        list.map((item,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.Category}</td>
                <td>{item.Title}</td>
                <td>{item.Amount}</td>
                <td>{item.Date}</td>
            </tr>

        ))
       }
      </tbody>
    </Table>
  );
}

export default ListComponent;
