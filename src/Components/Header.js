import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav className="header-links">
            <NavLink className="header-title"><h1 ><a href="#"><i class=" fa fa-paint-brush"></i></a>ArtsyWish</h1></NavLink>
            <NavLink className="header-navtabs header-navtabs-home" to='/'> HOME</NavLink>
            <NavLink className="header-navtabs" to='/paintings'>PAINTINGS</NavLink>
            <NavLink className="header-navtabs" to='/drawings'>DRAWINGS</NavLink>
            <NavLink className="header-navtabs" to='/artists'>ARTISTS</NavLink>
            <NavLink className="header-navtabs" to='/sellPaintings'>SELL PAINTINGS</NavLink>
            <NavLink className="header-navtabs-SP" to='/contactUs'>CONTACT US</NavLink>
            <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
            <Link to='/cart'><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>

        </nav>
    )
}

export default Header