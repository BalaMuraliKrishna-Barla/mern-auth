import React from 'react'

const Footer = () => {
  return (
    <div style={foot} className='bg-slate-800'>
      <div className='text-white mx-auto p-5'></div>
    </div>
  )
}
const foot = {
  position : 'fixed',
  bottom : 0,
  width : '100%'
}
export default Footer
