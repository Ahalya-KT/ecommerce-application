import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'




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

        <table>
            <tr>
            <th>name</th>
             <th>name</th>
             <th>name</th>
            </tr>
   
   {name &&
    name.map((post)=>(
    <tr key={post.id}>
        <td>{post.title}</td>
        <td>hello</td>
        <td>asfsg</td>
    </tr>
   ))}
</table>




        
    </div>
  )
}

export default Desgination