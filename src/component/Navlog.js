import React from 'react'
import {Link} from 'react-router-dom'

function Navlog() {
  return (
    <div>
        
        <nav className='navlog'>
        <p className='navlog-employee'>Employee manager</p>
            <div>
               
            <ul className='navlog-ul'>
               
               <li className='navlog-li'><Link to="login">Login</Link></li>
                <li className='navlog-li' ><Link to="Register">Register</Link></li>
    
            </ul>
            </div>
           
        </nav>
    </div>
  )
}

export default Navlog