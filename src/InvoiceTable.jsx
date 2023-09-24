import React from 'react'
import Table from 'react-bootstrap/Table';


function InvoiceTable() {
    let DashboardData=
    {
      InvoiceID:"#AHGA68",
      Date:"23/09/2022",
      Customer:"Jacob Marcus",
      PayableAmount:"$100",
      PaidAmount:"$000",
      Due:"$000"
  }

let data = Array(10).fill(DashboardData);
  return  <>
        <div className="mt-4">
          <Table  hover>
          <thead>
              <tr>
              <th><div className="form-check">
  <input className="form-check-input" type="checkbox" value="" />
  </div></th>
              <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Due</th>
              </tr>
          </thead>

          <tbody>{
            data.map((e,i)=>{
              return <tr key={i}>
                <td>
                  <div class="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
            </div></td>
            <td><label className='invoice-color'>{e.InvoiceID}</label></td>
            <td><label className='table-data'>{e.Date}</label></td>
            <td><label className='table-data'>{e.Customer}</label></td>
            <td><label className='table-data'>{e.PayableAmount}</label></td>
            <td><label className='table-data'>{e.PaidAmount}</label></td>
            <td><label className='table-data'>{e.Due}</label></td>
            
              </tr>
            })
            }
          
          </tbody>
          </Table>
  
        </div>
  


  </>
}

export default InvoiceTable