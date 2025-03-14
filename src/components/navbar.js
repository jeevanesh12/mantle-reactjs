import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = ()  => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton()
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'> 
                  MANTLE <i class="fa-solid fa-robot"> </i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                      Services
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/demo' className='nav-links' onClick={closeMobileMenu}>
                      Products 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up 
                    </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div> 
        </nav>
    </>
  );
}

export default Navbar;
