import { useState } from 'react';
import LOGO from '../assets/images/burgerLogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </div>
            {
                isLoggedIn ?
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button> :
                    <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
            }
        </div>
    );
}

export default Header;