import { click } from '@testing-library/user-event/dist/click';
import React,{Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = ()  => setClick(false)

  return (
    <>
      <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                  MANTLE <i class="fa-solid fa-robot"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                      Home 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                      About Us
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/demo' className='nav-links' onClick={closeMobileMenu}>
                      Demo 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up 
                    </Link>
                    </li>
                </ul>
            </div> 
        </nav>
    </>
  );
}

export default Navbar;
