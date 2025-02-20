import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the newsletter to receive updates on our advancements
        </p>
        <p className='footer-subscription-text'>
            You can unsubscribe any time.
        </p>
        <div className='input-areas'>
            <form>
                <input type='email' name='email' placeholder='Your Email' className='footer-input'/><Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-wrapper-item'>
            About us
            <Link to='/theteam'>Meet the team</Link>
            <Link to='/roadmap'>Roadmap</Link>
            <Link to='/mission'>Our Mission</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link className='social-logo'>
            MANTLE <i className="fa-solid fa-robot"></i>
            </Link>
          </div>
          <small className='website-rights'>MANTLE © 2025</small>
          <div className='social-icons'>
            <Link className='social-icon-link' to='/' target='_blank' aria-lable='Facebook'>
            <i class="fa-brands fa-facebook"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
