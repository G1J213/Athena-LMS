import React from 'react'
import './Section5.css'
import image3 from './image3.png'
import vector1 from './vector1.png'

function Section5() {
  return (
    <div className='section5'>
      <div className='content2'>
        <header className='header3'>We can custom for you!</header>
          <img src={image3} alt="Image3" className='imagem-box'/>
        <p className='body3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
         occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
         mollit anim id est laborum
        </p>
        <div className='checklist'>
            <div className='checklist1'>
                <div className='check-item'> <img src={vector1} alt="Vector1" className='vector1'/> Lorem Ipsum</div>
                <div className='check-item'> <img src={vector1} alt="Vector1" className='vector1'/> Lorem Ipsum</div>
                <div className='check-item'> <img src={vector1} alt="Vector1" className='vector1'/> Lorem Ipsum</div>
            </div>
            <div className='checklist2'>
                <div className='check-item'> <img src={vector1} alt="Vector1" className='vector1'/> Lorem Ipsum</div>
                <div className='check-item'> <img src={vector1} alt="Vector1" className='vector1'/> Lorem Ipsum</div>
                <div className='check-item'> <img src={vector1} alt="Vector1" className='vector1'/> Lorem Ipsum</div>
            </div>
        </div>
      </div>
        <img src={image3} alt="Image3" className='image3-box'/>
    </div>
  )
}

export default Section5
