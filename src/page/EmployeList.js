import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'

function EmployeList() {

    const[employe,setEmploye]=useState([])

    useEffect(()=>{
        axios.get('http://training.pixbit.in/api/employees',{headers:{"Authorization": 'Bearer ' + "c5JpnSGhU4vB5kd6VwhPiie5nhkGZM9QzkqG8gSJOk1hzxXiUjSMvuj7QvzVQ48bzAbbJ53Yt0pGHf9A"}})
        .then(res=>{
            console.log(res.data.data);
            setEmploye(res.data.data)
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
                    <th>Join Date</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Designation</th>
                </tr>
                {employe && employe.map((post)=>(
                    <tr key={post.id}>
                        <td>post.first_name</td>
                        <td>post.last_name</td>
                        <td>post.join_date</td>
                        <td>post.date_of_birth</td>
                        <td>post.gender</td>
                        <td>post.mobile</td>
                        <td>yuio</td>
                    </tr>
                ))}
            </table>



       
    </div>
  )
}

export default EmployeList