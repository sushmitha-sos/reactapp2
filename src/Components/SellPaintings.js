import React from 'react'
import './SellPaintings.css'
import googleImg from '../Components/Images/art2.jpg'
import trustpilotImg from '../Components/Images/art3.jpg'
import facebookImg from '../Components/Images/art4.jpg'
import { Link, Outlet } from 'react-router-dom'

function SellPaintings() {
    return (
        <div>
            <br />
            <br />
            <br />
            <nav>
                <Link to='contactUs'>Contact Us</Link>
            </nav>
            <br />
            <br />
            <br />
            <h1 className='heading-SellPainting'>Sell Paintings Online with ArtsyWish.in</h1>
            <br />
            <br />
            <div className="flex-container-SP">
                <div><img src={googleImg} className="googleImg "></img></div>
                <div><img src={trustpilotImg} className="trustpilotImg"></img></div>
                <div><img src={facebookImg} className="facebookImg"></img></div>
            </div>
            <br />

            <h2 style={{ textAlign: 'center', fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>Get paid within 15 days | 3,000+ Artworks Sold | Sell your Paintings, Drawings</h2>

            <div className='flex-container-sellArt'>

                <div className='register-div'>
                    <h2 style={{ paddingTop: '100px' }}>Sell Your Art</h2>
                    <a href='#'><button style={{ fontSize: '30px', padding: '10px 90px 10px 90px', borderRadius: '10px' }}>Register Now</button></a>
                    <br />
                    <br />
                    <span style={{ textAlign: 'left' }}>* Terms and Conditions</span>
                    <br />
                    <span>* Registration fee, Valid for 2 Years - Rs. 799 (Including Taxes)</span>
                </div>

                <span className='divider'></span>

                <div className='procedure-div'>
                    <h2 style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize: '25px' }}>How to sell Paintings, Drawings and Handicrafts Online?</h2>
                    <br />

                    <div style={{ backgroundColor: 'rgb(186, 179, 179)', borderRadius: '10px' }}>
                        <button style={{ borderRadius: '20px', fontSize: '40px', margin: '10px 10px 10px 10px', color: 'gray' }}>1</button>
                        <h2 style={{ display: 'inline' }}>Register with us</h2>
                        <br />
                    </div>
                    <br />
                    <span style={{ padding: '0px 0px 0px 0px', fontSize: '20px', color: 'gray' }}>Register with us by filling the basic information.</span>
                    <br />
                    <br />


                    <div style={{ backgroundColor: 'rgb(186, 179, 179)', borderRadius: '10px' }}>
                        <button style={{ borderRadius: '20px', fontSize: '40px', margin: '10px 10px 10px 10px', color: 'gray' }}>2</button>
                        <h2 style={{ display: 'inline' }}>Upload Your Artworks</h2>
                        <br />
                    </div>
                    <br />
                    <span style={{ padding: '0px 0px 0px 0px', fontSize: '20px', color: 'gray' }}>Once you register and pay registration fee, click on 'Upload Product'. Upload all our artworks one by one, with filling up the necessary information. Our commission of 25% is inclusive of price you quote for each artwork.</span>
                    <br />
                    <br />


                    <div style={{ backgroundColor: 'rgb(186, 179, 179)', borderRadius: '10px' }}>
                        <button style={{ borderRadius: '20px', fontSize: '40px', margin: '10px 10px 10px 10px', color: 'gray' }}>3</button>
                        <h2 style={{ display: 'inline' }}>Order placed by Buyer</h2>
                        <br />
                    </div>
                    <br />
                    <span style={{ padding: '0px 0px 0px 0px', fontSize: '20px', color: 'gray' }}>Once you receive an order, you just need to pack the painting & courier to us. After quality verification, we will courier painting to the buyer.</span>
                    <br />
                    <br />


                    <div style={{ backgroundColor: 'rgb(186, 179, 179)', borderRadius: '10px' }}>
                        <button style={{ borderRadius: '20px', fontSize: '40px', margin: '10px 10px 10px 10px', color: 'gray' }}>4</button>
                        <h2 style={{ display: 'inline' }}>Payment to Artist</h2>
                        <br />
                    </div>
                    <br />
                    <span style={{ padding: '0px 0px 0px 0px', fontSize: '20px', color: 'gray' }}>Once we confirm delivery to buer, you will receive your payment within 10 to 15 days, in the bank account mentioned by you in your profile. We charge 25% + GST over & above the price you quote.</span>

                    <br />
                    <hr></hr>
                    <br />
                    <span><a href='#'><i class="fa fa-telegram fa-2x" aria-hidden="true" ></i></a></span>
                    <span style={{ padding: '0px 0px 0px 20px', fontSize: '20px', color: 'gray' }}>Join our Telegram group for Tips, Tricks on how to Sell your Artwork fast on our Website.</span>
                </div>
            </div>
            <br />
            <br />


            <div style={{ margin: '0px 80px 0px 80px', fontSize: '20px', color: 'gray' }}>Start with registration and get ready to sell your paintings online. An artist can sell <b>Paintings, Drawings and Handicrafts</b> with the freedom of putting up the price he/she wants. Artist can upload 1 to as many artworks.
                <br />
                <br />
                We support Artists to sell art online by various promotional methods like social media, Google search marketing, ads etc. We wish to create the best online place for Artists to sell & equally best place for Art lovers to buy.
            </div>
            <br />
            <br />
            <br />
            <Outlet />

        </div>
    )
}

export default SellPaintings
