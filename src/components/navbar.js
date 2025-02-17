import React,{Fragment, useState} from 'react'

function navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                      MANTLE <i class="fa-solid fa-robot"></i>
                </Link>
            </div> 
        </nav>
    </>
  )
}

export default navbar
