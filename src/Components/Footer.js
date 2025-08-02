import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div>

            <div className="flex-container-content">
                <div>
                    <b>About Us</b>
                    <br /><br />
                    ArtsyWish is a leading Online Art Gallery based in India
                    <br />& open to the world for connecting art and art admirers.
                    <br /> You can browse and buy artworks and paintings online in
                    <br />few defined steps. Gallerist.in is a platform for promoting
                    <br />quality artwork created by artists worldwide.
                    <br />
                    <br />

                    <i class="fa fa-facebook icons" aria-hidden="true"></i>
                    <i class="fa fa-twitter icons" aria-hidden="true"></i>
                    <i class="fa fa-instagram icons" aria-hidden="true"></i>
                    <i class="fa fa-pinterest icons" aria-hidden="true"></i>

                </div>

                <div >
                    <b> For Artists</b>
                    <br />
                    <br />
                    <a href="#"> Advertise</a>
                    <br>
                    </br>
                    <a href="#"> Artist Registration</a>
                    <br>
                    </br>
                    <a href="#"> Tips for Artist</a>
                </div>

                <div>
                    <b>Categories</b>
                    <br />
                    <br />
                    <a href="#">Abstract paintings</a>
                    <br />
                    <a href="#">Figurative paintings</a>
                    <br />
                    <a href="#">Landscape Paintings</a>
                    <br />
                    <a href="#">Nature Paintings|Scenery Paintings</a>
                    <br />
                    <a href="#">Religious Paintings</a>
                </div>

            </div>

            <div className='footer-style'>
                Copyright ©️ 2023 iCommerce Solutions. All rights reserved.
            </div>


        </div>
    )
}

export default Footer
