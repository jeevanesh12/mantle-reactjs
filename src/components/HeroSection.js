import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='public/videos/video-2.mp4' autoPlay loop muted/>
        <h1>The Future of Sports Officiating</h1>
        <p>Mistakes that will no longer haunt the game</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>ENTER</Button>

            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH DEMO <i class="fa-solid fa-circle-play"></i></Button>
        </div>
      </div>  
    )
}

export default HeroSection