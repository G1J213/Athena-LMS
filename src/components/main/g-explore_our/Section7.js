import React from 'react'
import './Section7.css'
import arrow from './arrow.png'

function Section7() {
  return (
    <div className='section7'>
      <header className='header5'>Explore our other websites</header>
      <div className='panels'>
        <div className='panel1'>
                <div className='panel-text'>Athena School Of Labs
                    <img src={arrow} alt='Arrow' className='arrow1' />
                </div>
            </div>
        <div className='panel2'>
            <div className='panel-text'>Cloudswyft
                        <img src={arrow} alt='Arrow' className='arrow1' />
                    </div>
            </div>
        <div className='panel3'>
            <div className='panel-text'>CLMP
                        <img src={arrow} alt='Arrow' className='arrow1' />
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Section7
