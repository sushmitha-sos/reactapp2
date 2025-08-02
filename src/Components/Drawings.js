import React from 'react'
import './Drawings.css'

import oneImg from '../Components/Images/drawing1.jpg'
import twoImg from '../Components/Images/drawing2.jpg'
import threeImg from '../Components/Images/drawing3.jpg'
import fourImg from '../Components/Images/drawing4.jpg'
import fiveImg from '../Components/Images/drawing5.jpg'

import sixImg from '../Components/Images/drawing6.jpg'
import sevenImg from '../Components/Images/drawing7.jpg'
import eightImg from '../Components/Images/drawing8.jpg'
import nineImg from '../Components/Images/drawing9.jpg'
import tenImg from '../Components/Images/drawing10.jpg'

import elevenImg from '../Components/Images/drawing11.jpg'
import twelveImg from '../Components/Images/drawing12.jpg'
import thirteenImg from '../Components/Images/drawing13.jpg'
import fourteenImg from '../Components/Images/drawing14.jpg'
import fifteenImg from '../Components/Images/drawing15.jpg'

function Drawings() {
    return (
        <div>
            <div className='flex-container-drawings'>
                <div><img src={oneImg} className='oneImg'></img><b>SHRADDHA KAPOOR</b> <br></br> Rs. 2,500.00</div>
                <div><img src={twoImg} className='twoImg'></img><b>EYE</b><br></br> Rs. 1,250.00</div>
                <div><img src={threeImg} className='threeImg'></img><b>HARRY POTTER</b><br></br> Rs. 4,500.00</div>
                <div><img src={fourImg} className='fourImg'></img><b>THE OLD GUARD</b><br></br> Rs. 5,499.00</div>
                <div><img src={fiveImg} className='fiveImg'></img><b>DENARYS</b><br></br> Rs. 5,000.00</div>
            </div>

            <div className='flex-container-drawingsS'>
                <div><img src={sixImg} className='sixImg'></img><b>KHAL DROGO</b> <br></br> Rs. 5,500.00</div>
                <div><img src={sevenImg} className='sevenImg'></img><b>JACOB</b><br></br> Rs. 1,250.00</div>
                <div><img src={eightImg} className='eightImg'></img><b>RENESMEE</b><br></br> Rs. 1,200.00</div>
                <div><img src={nineImg} className='nineImg'></img><b>EDWARD CULLEN</b><br></br> Rs. 2,499.00</div>
                <div><img src={tenImg} className='tenImg'></img><b>BELLA SWAN</b><br></br> Rs. 1,500.00</div>
            </div>

            <div className='flex-container-drawingsS'>
                <div><img src={elevenImg} className='elevenImg'></img><b>GIRL WITH HAT</b> <br></br> Rs. 1,500.00</div>
                <div><img src={twelveImg} className='twelveImg'></img><b>GIRL WITH HAT</b><br></br> Rs. 1,250.00</div>
                <div><img src={thirteenImg} className='thirteenImg'></img><b>GIRL WITH A FLUTE</b><br></br> Rs. 1,499.00</div>
                <div><img src={fourteenImg} className='fourteenImg'></img><b>EYE</b><br></br> Rs. 1,000.00</div>
                <div><img src={fifteenImg} className='fifteenImg'></img><b>MADHURI DIXIT</b><br></br> Rs. 1,600.00</div>
            </div>

        </div>
    )
}

export default Drawings
