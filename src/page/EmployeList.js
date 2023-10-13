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
           </div>

           <div className='employee-inputs'>
           
           {/* <button>search</button>
           <button>add new class</button> */}
           </div>
           </div>


            <table className='employe-table'>
                <tr>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                </tr>
                {employe && employe.map((post)=>(
                    <tr key={post.id}>
                        <td>post.title</td>
                        <td>hello</td>
                        <td>hgfd</td>
                        <td>yuii</td>
                        <td>yuio</td>
                    </tr>
                ))}
            </table>



       
    </div>
  )
}

export default EmployeList