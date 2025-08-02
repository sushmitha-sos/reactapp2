import React from "react"
import './Home.css'
import googleImg from '../Components/Images/art2.jpg'
import trustpilotImg from '../Components/Images/art3.jpg'
import facebookImg from '../Components/Images/art4.jpg'
import fifthImg from '../Components/Images/art5.jpg'
import sixthImg from '../Components/Images/art6.jpg'
import seventhImg from '../Components/Images/art7.jpg'
import eighthImg from '../Components/Images/art8.jpg'
import ninethImg from '../Components/Images/art9.jpg'
import tenthImg from '../Components/Images/art10.jpg'

import buddhaOneImg from '../Components/Images/buddha1.jpg'
import buddhaTwoImg from '../Components/Images/buddha2.jpg'
import buddhaThreeImg from '../Components/Images/buddha3.jpg'
import buddhaFourImg from '../Components/Images/buddha4.jpg'
import buddhaFiveImg from '../Components/Images/buddha5.jpg'

import qualityImg from '../Components/Images/art43.jpg'

import serenityBannerImg from '../Components/Images/art44.jpg'

import priceOneImg from '../Components/Images/price1.jpg'
import priceTwoImg from '../Components/Images/price2.jpg'
import priceThreeImg from '../Components/Images/price3.jpg'
import priceFourImg from '../Components/Images/price4.jpg'


const Home = () => {
    return <div>
        <img src="https://cdn.shopify.com/s/files/1/0615/3814/0311/files/Banner-5_bd4caeb8-718c-45c1-84b5-85e2363e1999_1950x.jpg?v=1658468028.jpg" alt="could not be loaded"></img>
        <div className="flex-container">
            <div><img src={googleImg} className="googleImg "></img></div>
            <div><img src={trustpilotImg} className="trustpilotImg"></img></div>
            <div><img src={facebookImg} className="facebookImg"></img></div>
        </div>

        <h2 className="headingClass "><b>----------BUY ORIGINAL PAINTINGS----------</b></h2>

        <div className="flex-containerP">

            <div className="img-container"><img src={fifthImg} className="fifthImg"></img></div>

            <div className="img-container"><img src={sixthImg} className="sixthImg"></img></div>

            <div className="img-container"><img src={seventhImg} className="seventhImg"></img></div>
        </div>
        <div className="flex-containerP">
            <div className="img-container"><img src={eighthImg} className="eighthImg"></img></div>
            <div className="img-container"><img src={ninethImg} className="ninethImg"></img></div>
            <div className="img-container"><img src={tenthImg} className="tenthImg"></img></div>
        </div>

        <h2 className="headingClass "><b>----------BUDDHA PAINTINGS----------</b></h2>

        <div className='flex-container-buddha'>
            <div><img src={buddhaOneImg} className='buddhaOneImg'></img><b>BUDDHA</b> <br></br> Rs. 27,500.00</div>
            <div><img src={buddhaTwoImg} className='buddhaTwoImg'></img><b>BUDDHA PAINTING</b><br></br> Rs. 12,500.00</div>
            <div><img src={buddhaThreeImg} className='buddhaThreeImg'></img><b>BUDDHA WITH PIGEON</b><br></br> Rs. 30,000.00</div>
            <div><img src={buddhaFourImg} className='buddhaFourImg'></img><b>BUDDHA</b><br></br> Rs. 27,000.00</div>
            <div><img src={buddhaFiveImg} className='buddhaFiveImg'></img><b>BUDDHA AND MONK</b><br></br> Rs. 60,000.00</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div><img src={qualityImg} className="qualityImg"></img></div>
        <br />
        <br />
        <br />

        <h2 className="headingClass "><b>----------WHERE SILENCE MEETS SERENITY----------</b></h2>
        <br />
        <div><img src={serenityBannerImg} className="serenityBannerImg"></img></div>
        <br />
        <br />
        <br />

        <h2 className="headingClass "><b>----------BROWSE ARTWORK BY PRICE----------</b></h2>
        <div className="flex-container-price">
            <div><a href="#"><img src={priceOneImg} className="priceOneImg"></img></a></div>
            <div><a href="#"><img src={priceTwoImg} className="priceTwoImg"></img></a></div>
            <div><a href="#"><img src={priceThreeImg} className="priceThreeImg"></img></a></div>
            <div><a href="#"><img src={priceFourImg} className="priceFourImg"></img></a></div>
        </div>

    </div>
}

export default Home