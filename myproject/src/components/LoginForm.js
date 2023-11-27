import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function LoginForm() {

const [password, setpassword]  = useState();
const [Email, setEmail]  = useState()
const navigate = useNavigate()


const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{Email,password})
    .then(result=>{console.log(result)
            navigate('/')
    })
    .catch((err)=>console.log(err))
}

  return (
    <div className="w-[100%] bg-slate-500 h-screen flex m-auto">
        <div className='md:w-[60%] sm:w-[80%] flex m-auto rounded-md justify-center bg-white p-4 shadow-1'>
            <div className='p-4  bg-slate-300'>
                <h1 className='text-3xl text-black'>Login</h1>
                <form onSubmit={handleSubmit} className='p-3 rounded-md mt-4'>
                    <label for="Email" >Enter E-mail address : </label>
                    <br/>
                    <input type='email' id='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <label for="password">Enter password :</label> <br/>
                    <input type='password' id='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <p>Forgot password</p>
                    <button className='bg-blue-500 hover:shadow-xl  my-3 mx-auto flex rounded-lg px-3 py-1 text-white text-2xl hover:cursor-pointer hover:bg-blue-700' type='submit'>Login</button>
                    <p>Not a member yet? <a href="/register" >Sign up</a></p>
                </form>
            </div>
        </div>
    
    
    </div>
  )
}

export default LoginForm