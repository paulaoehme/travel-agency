import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    // When menu is click, change click state
    const handleClick = () => setClick(!click);
    // When logo or any nav-item is clicked, close menu
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        WTA<i class="fas fa-plane" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* Handle nav-menu to appear/disappear on mobile devices when it is clicked */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/destinations' className='nav-links' onClick={closeMobileMenu}>
                                Destinations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/offers' className='nav-links' onClick={closeMobileMenu}>
                                Offers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
