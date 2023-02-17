import React from 'react';
import "./headerStyle.css";
import logo from "../../assets/imdb-logo.jpg";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
       <div className="headerLeft">
         <ul>
            <li><Link to="/">
                <img src={logo} alt="logo" className="logo"/>
            </Link></li>
            <li><Link to="/movies/popular">Popular</Link></li>
            <li><Link to="/movies/top_rated">Top Rated</Link></li>
            <li><Link to="/movies/upcoming">Upcoming</Link></li>
         </ul>
       </div>
        <div className="headerRight">
            <div className="account">

            </div>
        </div>
    </div>
  )
}

export default Header