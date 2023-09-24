import { useState } from 'react'
import './App.css'

import Sidebar from './Sidebar';
import SalesInformation from './SalesInformation';
import InvoiceTable from './InvoiceTable';



function App() {
  


  return <>
         <div className='row'>
            <div className='col-2'>
                <Sidebar/>
            </div>
          <div className="col-10 container-fluid mb-4 p-4 container-bg">
       
          <SalesInformation/>
           <InvoiceTable/>
          </div>
          </div>
  
</>



}

export default App
