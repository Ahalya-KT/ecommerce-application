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

        <div className='table-box'>
            <div className='table-row'>
                <div className='table-cell'>
                    <p>Sl.NO</p>
                </div>
                
                <div className='table-cell'>
                    <p>Name</p>
                </div>
                
                <div className='table-cell'>
                    <p>Action</p>
                </div>   
            </div>

            <div className='table-col'>
                <div className='table-cell'>
                    <p>likes</p>
                </div>
                
                <div className='table-cell'>
                    <p>likes</p>
                </div>
                
                <div className='table-cell'>
                    <p>likes</p>
                </div>  
            </div>

            <div className='table-col'>
                <div className='table-cell'>
                    {
                        name && name.map((post)=><div className='table-cell' key={post.id}>{post.title}</div>)
                    }
                </div>
                
                <div className='table-cell'>
                    <p>likes</p>
                </div>
                
                <div className='table-cell'>
                    <p>likes</p>
                </div>  
            </div>
        </div>

        
    </div>
  )
}

export default Desgination