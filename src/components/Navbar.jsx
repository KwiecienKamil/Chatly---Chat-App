import React from 'react'

const Navbar = ({handleLogout}) => {
  return (
    <div className='h-[66px] bg-messBlue flex items-center justify-between px-[5%] text-white ]'>
        <h1 className='font-bold text-[22px] font-logo'>Chatly</h1>
          <button onClick={handleLogout} className="bg-red-500 p-2 rounded-full hover:bg-red-700">
          Logout
          </button>
        </div>
  )
}

export default Navbar
