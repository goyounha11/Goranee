import React from "react";
import {Link} from "react-router-dom";
import Logo from "../image/logo.png";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation(){
  
    return( 
    <nav className="top_container">
        <div className="logo">
            <Link to="/"><img src={Logo} alt="Logo" width="150px" height="70px"/></Link>
        </div>
        <ul className="menu">
            <li><Link to="/business" className="menu_item">Business</Link></li>
            <li><Link to="/team" className="menu_item">Team</Link></li>
            <li><Link to="/partner" className="menu_item">Partner</Link></li>
            <li><Link to="/contact" className="menu_item">Contact Us</Link></li>
        </ul>
        <div class="menu_icon">
            <FontAwesomeIcon icon={faBars} size="2x" className="btn"/>
        </div>
    </nav>
    );
}
export default Navigation;