import React, { useState } from "react";
import "./header.scss";
import { useRef } from "react";
const Header = () => {

  const about = useRef

const[Toggle, showMenu] = useState(false);
const [activeNav, setActiveNav] = useState("#home")
return(
<header className="header">
<nav className="nav container">
<a href="index.html" className="nav__logo">Ya</a>

<div className="nav__menu">
    <ul className="nav__list grid">
        <li className="nav__item">
            <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === "#home" ? 
            "nav__link active-link" : "nav__link " }  >
              <i className="uil uil-estate nav__icon"></i> Home
            </a>
        </li>
        <li className="nav__item">
            <a href="#about"  onClick={() => setActiveNav ('#about')} className={activeNav === "#about" ? 
            "nav__link active-link" : "nav__link " }  >
              <i className="uil uil-user nav__icon"></i> About
            </a>
        </li>

        <li className="nav__item">
            <a href="#skills"  onClick={() => setActiveNav ('#skills')} className={activeNav === "#skills" ? 
            "nav__link active-link" : "nav__link " } >
              <i className="uil uil-file-alt nav__icon"></i> Skills
            </a>
        </li>

       

        <li className="nav__item">
            <a href="#porfolio" onClick={() => setActiveNav ('#porfolio')} className={activeNav === "#porfolio" ? 
            "nav__link active-link" : "nav__link " }>
              <i className="uil uil-scenery nav__icon"></i> Portfolio
            </a>
        </li>

        <li className="nav__item">
            <a href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === "#contact" ? 
            "nav__link active-link" : "nav__link " }>
              <i className="uil uil-message nav__icon"></i> Contact Me
            </a>
        </li>
    </ul>

    <i className="uil uil-times nav__close"></i>
</div>

<div className="nav__toggle">
<i className="uil uil-apps"></i>
</div>
</nav>

</header>

)

}
export default Header