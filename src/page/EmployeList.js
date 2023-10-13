import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'

function EmployeList() {

    const[employe,setEmploye]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res);
            setEmploye(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    })
  
  return (
    <div>
        <Navbar/>

        <div className='employee-list'>

           <div className='employe-heading'>
            <h2>Employees List</h2>
            <button>add New Record</button>
           </div>

           <div className='employee-inputs'>
           <input placeholder="Search"></input>
           </div>
          
           </div>


            <table className='employe-table'>
                <tr>
                    <th>Sl.No</th>
                    <th> First Name</th>
                    <th> Last Name</th>
                    <th>Jion Date</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Designation</th>
                </tr>
                {employe && employe.map((post)=>(
                    <tr key={post.id}>
                        <td>post.title</td>
                        <td>hello</td>
                        <td>hgfd</td>
                        <td>yuii</td>
                        <td>yuio</td>
                        <td>yuio</td>
                        <td>yuio</td>
                    </tr>
                ))}
            </table>



       
    </div>
  )
}

export default EmployeList