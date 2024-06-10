import React from 'react'
import './exp.css';
import experience from '../../images/Experience.png'
import experience1 from '../../images/Experience1.png'
import experience2 from '../../images/Experience2.png'
import experience3 from '../../images/Experience3.png'

const Exp = () => {
  return (
    <div className='exp-parent'>
      <div>
        <h1>Work Experience</h1>
      </div> 
      <div  className='exp-container'>
        <div>
          <img src={experience2} width={500} wid alt="unsplashage" />
          <img src={experience3} width={500}  alt="unsplashage" />

        </div>
        <div>
          <img src={experience1} width={500} alt="unsplashage" />
          <img src={experience} width={500}  alt="unsplashage" />

        </div>
      </div>
    </div>
  )
}

export default Exp