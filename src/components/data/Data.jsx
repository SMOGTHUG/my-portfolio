import React from 'react'
import './data.css';
import Me from '../../images/Me.png'
import Arrow from '../../images/Arrow.png'
import Eclipse from '../../images/Ellipse.png'

const Data = () => {
  return (
    <div>
        <div className='data-parent'>
            <div className='data-pic'>
               <div className='pic1'>
                  <img src={Me} alt="unsplashage" />
               </div>
              
            </div>
            <div>
                <div className='data-title'>
                  <img src={Arrow} alt="unsplashage" />
                  <h3>Hello!, i am <span>Abiola Ogunleye</span></h3>
                </div>
                <div className='data-data'>
                  <h6>A designer who</h6>
                  <h1>Judges a book <br/>by its <span>cover <img src={Eclipse} width={130} height={800} alt="unsplashage" /></span>...</h1>
                  <p>Because if the cover does not impress you what else can?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data