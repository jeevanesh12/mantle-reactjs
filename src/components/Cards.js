import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet our Team!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <Carditem src='images/img-9.jpg' text='See the work that went into developing the ML for this' label='Team' path='/MLTeam'/>
                <Carditem src='images/img-9.jpg' text='See the work that went into developing the frontend for this' label='Team' path='/FrontendTeam'/>
            </ul>
        </div>  
      </div>
    </div>
  )
}

export default Cards
