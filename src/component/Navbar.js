import React from 'react'


function Navbar() {
  return (
    <div>
        <nav className='navbar'>
        <p className='headings'>Admin Templete</p>
        
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Employee</a></li>
            <li><a href="#">Desgination</a></li>

           
           
        </ul>
        {/* <div className='username'>
              <p>muhammad shafi</p>

            </div> */}

        </nav> 
    </div>
  )
}

export default Navbar