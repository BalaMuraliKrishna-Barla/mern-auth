import React from 'react'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './signup.css';

const Signup = () => {
  const [formData, setFormData]= useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    e.preventDefault;
    setFormData({...formData, [e.target.id] : e.target.value});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const res = await fetch('/backend/auth/signup', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData),
      });
      
      
      const data = await res.json();
      console.log(data);
      setError(false);
      setLoading(false);
      if(data.message == "fields are incomplete" || data.message == "Email already exists!") 
        setMsg(data.message);
      else {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate('/login');
        },3000);
      }

        
      
    } catch (error) {
      setLoading(false);
      setError(true);
    }

    }
  return ( success? 
  (
  <div className="success-message">
    <h2 className='text-green-500 text-5xl'>Signup Successful!</h2>
    <p></p>
  </div>
  )  
  :
  (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 border-none h-auto w-[500px] '>
          
          <input 
          type="text" placeholder='Username' id='username' 
          className='bg-slate-200 p-2 rounded-xl ' 
          onChange={handleChange} />
          
          <input 
          type="email" placeholder='Email' id='email' 
          className='bg-slate-200 p-2 rounded-xl' 
          onChange={handleChange} />
          
          <input 
          type="password" placeholder='Password' id='password' 
          className='bg-slate-200 p-2 rounded-xl' 
          onChange={handleChange} />
          
          <input type="submit" value={loading? "Loading...": "Submit"} 
          className='bg-slate-700 text-white rounded-xl p-2 hover:opacity-90 disabled:opacity-70' />
        </form>

        <div className='flex gap-3 m-4'>
          <p>Have an account?</p>
          <Link to='/login'> <p>Login</p> </Link>
        </div>
        <p className='text-red-500'>{msg}</p>
    </div>
  )
  )
}

export default Signup
