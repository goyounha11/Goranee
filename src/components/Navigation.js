import React from "react";
import Logo from "../image/logo.png";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
function Navigation(){
    return( 
    <nav className="top_container">
        <div className="logo">
        <a href="/"><img src={Logo} alt="Logo" height="100%"/></a>
        </div>
        <ul className="menu">
            <li className="menu_item"><Link activeClass="active" to="business_container" spy={true} smooth={true}>Business</Link></li>
            <li className="menu_item"><Link activeClass="active" to="teamMove" spy={true} smooth={true}>Team</Link></li>
            <li className="menu_item"><Link activeClass="active" to="partnerMove" spy={true} smooth={true}>Partner</Link></li>
            <li className="menu_item"><Link activeClass="active" to="c_container" spy={true} smooth={true}>Contact Us</Link></li>
        </ul>
        <div class="menu_icon">
            <FontAwesomeIcon icon={faBars} size="1.5x" className="btn"/>
        </div>
    </nav>
    );
}
export default Navigation;