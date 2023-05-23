import React from 'react'
import image1 from './image1.png'
import testimonial from './testimonial.png'
import './Main.css'

function Main() {
  return (
    <div className='main'>
    <div className='content1'>
      <h1 className='header1'>Lorem Ipsum Dolor Future Ready!</h1>
        <p className='context1'>Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium.
        </p>
        <div className='content1-btns'>
          <button className='content1-explore'>Explore</button>
          <img src={testimonial} alt="Testimonial" className='content1-testimonial'/>
        </div>
    </div>
    <img src={image1} alt="Image1" className='image1'/>
    <div className='contentm'>
      <p className='context-m'>Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium.
      </p>
      <div className='contentm-btns'>
            <button className='content1-explore'>Explore</button>
            <img src={testimonial} alt="Testimonial" className='content1-testimonial'/>
      </div>
    </div>
    </div>
  )
}

export default Main
