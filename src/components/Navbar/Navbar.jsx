import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import CloseIcon from '@material-ui/icons/Close';
import AppsIcon from '@material-ui/icons/Apps';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

    return (
       <>
        <nav className={scroll ? "navbar-active" : "navbar"}>
            <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src={logo} width="50" className="nav-logo" />
                LOTUS BETA ANALYTICS
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                { click ?  <CloseIcon fontSize="large" />  :  <AppsIcon fontSize="large"  /> }
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                   ABOUT US
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/solutions' className='nav-links' onClick={closeMobileMenu}>
                   OUR SOLUTIONS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                   OUR SERVICES
                </Link>
            </li>
 
            <li className="nav-item">
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   CONTACT US
                </Link>
            </li>
            </ul>
            </div>
        </nav>
       </>
    )
}

export default Navbar
