import React from 'react'

function SalesInformation() {
  return <>

     {/* // <!-- Search bar--> */}
     <div className="row input-group">
                <div className="col-6">
                <div className="input-icons">
                  <i className="fa fa-solid fa-magnifying-glass icon"></i>
                  <input type="search" className="form-control1" placeholder='Search'/>
                </div>
                </div>
                <div className="col-6 d-flex justify-content-end"> 
                  <div className='bell-box'>
                    <i className="fa-regular fa-bell"></i>
                    <div className='notification-count-div'></div>
                  </div>
               </div>
                </div>

                {/* sales information form */}
                <div className='row sale-info-heading mb-4 mt-4'>
                  <span>Sales Information</span>
                </div>
                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-md-3">
                    <label  className="form-label table-data">Customer</label>
                    <input type="text" className="form-control" placeholder='Enter Customer Name'/>
                  </div>
                  <div className="col-md-3">
                    <label  className="form-label table-data">Invoice ID</label>
                    <input type="text" className="form-control" placeholder='Enter Invoice ID'/>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label table-data">Start Date</label>
                    <input type="text" className="form-control" placeholder='Start Date'/>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label table-data">End Date</label>
                    <input type="text" className="form-control" placeholder='End Date'/>
                  </div>
                </form>

  </>
    
  
}

export default SalesInformation