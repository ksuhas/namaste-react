import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from '../assets/images/burgerLogo.png';
import UserContext from '../utils/userContext';
import { BsFill4CircleFill } from "react-icons/bs";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
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
                        <Link to='/instamart'>InstaMart</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li style={{ position: 'relative' }}>
                        { cartItems.length > 0 &&
                            <div className='cart-counter'>{cartItems.length}</div>
                        }
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </div>
            <span style={{ margin: 'auto 0px', color: 'gray' }}>{user.name}</span>
            {
                isLoggedIn ?
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button> :
                    <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
            }
        </div>
    );
}

export default Header;