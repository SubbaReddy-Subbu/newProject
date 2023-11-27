import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function LoginForm() {

    const [password, setpassword]  = useState();
    const [Email, setEmail]  = useState();
    const [Name, setName] =useState();

    const Navigate = useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/register",{Email,password,Name})
        .then(result=>{console.log(result)
            if(result.status === 200){
                Navigate('/login')
            }
        
        })
        .catch((err)=>console.log(err))
    }
    

  return (
    <div className="w-[100%] bg-slate-500 h-screen flex m-auto shadow-xl">
        <div className='md:w-[60%] lg:w-[40%] sm:w-[80%] flex m-auto rounded-md justify-center bg-white p-4 shadow-1'>
            <div className='p-4  bg-slate-300 rounded-lg w-full justify-center'>
                <h1 className='text-3xl text-black text-center'>Register</h1>
                <form onSubmit={handleSubmit} className='p-3 text-center rounded-md mt-4 sm:w-[60%] mx-auto'>
                    <label for="Name">Enter your Name :</label><br/>
                    <input className='p-1 m-2 bg-slate border-0 border-b-2 bg-slate-300 w-full' type='text' id='Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
                    <br/>    
                    <label for="Email">Enter your Email :</label><br/>
                    <input className='p-1 m-2 bg-slate border-0 border-b-2 bg-slate-300 w-full' type='email' id='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <label for="Password">Password :</label> <br/>
                    <input className='p-1 m-2 bg-slate border-0 border-b-2 bg-slate-300 w-full' type='password' id='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <br/>
                    <button className='bg-blue-500 hover:shadow-xl  my-3 mx-auto flex rounded-lg px-3 py-1 text-white text-2xl hover:cursor-pointer hover:bg-blue-700' type='submit'>Register</button>
                    <p>already have an account? <a href="/Login">Login page</a></p>
                </form>
            </div>
        </div>
    
    
    </div>
  )
}

export default LoginForm