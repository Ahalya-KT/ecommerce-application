import React from 'react'
import Navlog from '../component/Navlog'
import { Button } from '@mui/material'

function Register() {
  return (
    <div>
        <Navlog/>


        <div className='registerpage'>
        <h5 className="register-heading">Register</h5>
        <div className='register-section'>
            <div className='register-textarea'>
              <p className="register-label">Name</p>
              <p className="register-label">email address</p>
              <p className="register-label">password</p>
              <p className="register-label"> Confrim password</p>
            </div>

            <div className='register-textarea'>
                <input className='inputarea'></input>
                <input className='inputarea'></input>
                <input className='inputarea'></input>
                <input className='inputarea'></input>
                <div className='register-btn'>
                <Button variant="contained">Register</Button>
                </div>
            </div>

        </div>


        </div>
    </div>
  )
}

export default Register