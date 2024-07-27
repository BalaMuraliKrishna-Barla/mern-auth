import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div  className='bg-slate-800'>
        <div className='text-white flex justify-between mx-auto p-5'>
            <Link to='/'>
                <h1 className='font-bold'>BMK</h1>
            </Link>

            <ul className='flex gap-4'>
                <Link to='/profile'> <li>Profile</li> </Link>
                <Link to='/home'> <li>Home</li> </Link>
                <Link to='/about'> <li>About</li> </Link>
                <Link to='/signup'><li>Signup</li></Link>
                <Link to='/login'> <li>Login</li> </Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Header
