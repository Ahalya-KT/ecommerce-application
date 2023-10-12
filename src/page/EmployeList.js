import React from 'react'
import Navbar from '../component/Navbar'

function EmployeList() {
  
  return (
    <div>
        <Navbar/>

        <div className='employee-list'>

           <div className='employe-heading'>
            <h2>Employees List</h2>
           </div>

           <div className='employee-inputs'>
           
           {/* <button>search</button>
           <button>add new class</button> */}
           </div>



        </div>
    </div>
  )
}

export default EmployeList