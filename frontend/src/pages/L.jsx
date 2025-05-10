import React from 'react'
import './regi.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function L() {
    const [values,setvalues]=useState(
        {
            email :'',
            password :''
        }
    )
    const navigate = useNavigate()
    const handleChanges = (e) =>{
        setvalues({...values,[e.target.name]:e.target.value})
    }
    const handleSubmet = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/auth/login',values)

           if (response.status === 201 ){
            localStorage.setItem('token',response.data.token)
             navigate('/')
           }
    }catch (err){
        console.log(err.message);
        
    }

    }
  return (
    <div className="box">
        <div>
            <h2>Login</h2>
            <form onSubmit = {handleSubmet}>
                <div className='bloc'>
                    <label htmlFor="email">Email</label>
                    <input type="email"placeholder='Enter Email' name='email' onChange={handleChanges}  />
                </div>
                <div className='bloc'>
                    <label htmlFor="password">Password</label>
                    <input type="password"placeholder='Enter Password'  name='password' onChange={handleChanges} />
                </div>
                <button>Submit</button>
            </form>
            <div>
                <span>You don't have acount ?</span>
                <Link to ='/register'>register</Link>
            </div>
        </div>
    </div>
  )
}

export default L