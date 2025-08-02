import React from 'react'
import './Paintings.css'
import twentythreeImg from '../Components/Images/art23.jpg'
import twentyfourImg from '../Components/Images/art24.jpg'
import twentyfiveImg from '../Components/Images/art25.jpg'
import twentysixImg from '../Components/Images/art26.jpg'
import twentysevenImg from '../Components/Images/art27.jpg'

import twentyeightImg from '../Components/Images/art28.jpg'
import twentynineImg from '../Components/Images/art29.jpg'
import thirtyImg from '../Components/Images/art30.jpg'
import thirtyoneImg from '../Components/Images/art31.jpg'
import thirtytwoImg from '../Components/Images/art32.jpg'

import thirtythreeImg from '../Components/Images/art33.jpg'
import thirtyfourImg from '../Components/Images/art34.jpg'
import thirtyfiveImg from '../Components/Images/art35.jpg'
import thirtysixImg from '../Components/Images/art36.jpg'
import thirtysevenImg from '../Components/Images/art37.jpg'

import thirtyeightImg from '../Components/Images/art38.jpg'
import thirtynineImg from '../Components/Images/art39.jpg'
import fortyImg from '../Components/Images/art40.jpg'
import fortyoneImg from '../Components/Images/art41.jpg'
import fortytwoImg from '../Components/Images/art42.jpg'

function Paintings() {
    return (
        <div>

            <div className='flex-container-paintings'>
                <div><img src={twentythreeImg} className='twentythreeImg'></img><b>BEDHUND</b> <br></br> Rs. 2,700.00</div>
                <div><img src={twentyfourImg} className='twentyfourImg'></img><b>BANARAS GHAT</b><br></br> Rs. 2,250.00</div>
                <div><img src={twentyfiveImg} className='twentyfiveImg'></img><b>REFLECTION</b><br></br> Rs. 2,812.00</div>
                <div><img src={twentysixImg} className='twentysixImg'></img><b>BLOOM</b><br></br> Rs. 6,499.00</div>
                <div><img src={twentysevenImg} className='twentysevenImg'></img><b>VILLAGE</b><br></br> Rs. 1,000.00</div>
            </div>

            <div className='flex-container-paintingsS'>
                <div><img src={twentyeightImg} className='twentyeightImg'></img><b>VILLAGE</b> <br></br> Rs. 1,000.00</div>
                <div><img src={twentynineImg} className='twentynineImg'></img><b>VILLAGE</b> <br></br> Rs. 1000.00</div>
                <div><img src={thirtyImg} className='thirtyImg'></img><b>VILLAGE</b> <br></br> Rs. 1,500.00</div>
                <div><img src={thirtyoneImg} className='thirtyoneImg'></img><b>PERIWINKLE FLOWERS</b> <br></br> Rs. 6,500.00</div>
                <div><img src={thirtytwoImg} className='thirtytwoImg'></img><b>THE CANDLE</b> <br></br> Rs. 300.00</div>
            </div>

            <div className='flex-container-paintingsS'>
                <div><img src={thirtythreeImg} className='thirtythreeImg'></img><b>EYE</b> <br></br> Rs. 4,375.00</div>
                <div><img src={thirtyfourImg} className='thirtyfourImg'></img><b>UNTITLED</b> <br></br> Rs. 20,000.00</div>
                <div><img src={thirtyfiveImg} className='thirtyfiveImg'></img><b>LADY WITH VIOLIN</b> <br></br> Rs. 5,000.00</div>
                <div><img src={thirtysixImg} className='thirtysixImg'></img><b>ABSTRACT PAINTING</b> <br></br> Rs. 11,248.00</div>
                <div><img src={thirtysevenImg} className='thirtysevenImg'></img><b>CHURCH BEFORE STORM</b> <br></br> Rs. 3,750.00</div>
            </div>

            <div className='flex-container-paintingsS'>
                <div><img src={thirtyeightImg} className='thirtyeightImg'></img><b>ELEPHATH WITH GRACE</b> <br></br> Rs. 5,625.00</div>
                <div><img src={thirtynineImg} className='thirtynineImg'></img><b>CUDDLE</b> <br></br> Rs. 10,000.00</div>
                <div><img src={fortyImg} className='fortyImg'></img><b>MODERN ART FIGURES</b> <br></br> Rs. 7,875.00</div>
                <div><img src={fortyoneImg} className='fortyoneImg'></img><b>FAMILY OF ZEBRA</b> <br></br> Rs. 15,500.00</div>
                <div><img src={fortytwoImg} className='fortytwoImg'></img><b>ABSTRACT ART</b> <br></br> Rs. 7,000.00</div>
            </div>


        </div>
    )
}

export default Paintings
