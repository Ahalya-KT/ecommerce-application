import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'
import { Edit, Trash2 } from 'react-feather'

function Desgination() {

    const[name,setname]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res);
            setname(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })


  return (
    <div>
        <Navbar/>
        <div className='desgination-list'>
           <div className='designation-heading'>
            <h2>Designation List</h2>
           </div>
           <div className='designation-inputs'>
           {/* <button>search</button>
           <button>add new class</button> */}
           </div>
        </div>

        <table className='desgination-table'>
            <tr>
            <th>Sl.No</th>
             <th>Name</th>
             <th>Action</th>
            </tr>
   
   {name &&
    name.map((post)=>(
    <tr key={post.id}>
        <td>{post.title}</td>
        <td>hello</td>

        <div className='buttons-btn'>
        <td><Edit/><Trash2/></td>
        </div>
        
    </tr>
   ))}
</table>




        
    </div>
  )
}

export default Desgination