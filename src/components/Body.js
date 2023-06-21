import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { API_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        const respData = await fetch(API_URL).then(res => res.json());
        const restList = respData?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurants(restList);
        setFilteredRestaurants(restList);
    }

    const status = useOnline();
    if (!status) {
        return (
            <div className='body'>
                <div className="container">
                    <div className="empty-cart-text">You seems offline, Please check your internet connection...</div>
                </div>
            </div>
        )
    }

    const handleClick = () => {
        const filteredList = allRestaurants.filter((rest) => rest?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredList);
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleClearSearch = () => {
        setSearchText("");
        setFilteredRestaurants(allRestaurants);
    }

    // if (!allRestaurants) return (<div className='container'><div className="empty-cart-text">Something went wrong, Please try again later !!!</div></div>);

    if (!allRestaurants) return null;

    return allRestaurants.length == 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='search-container'>
                <div className='search-box'>
                    <input type="text" data-testid='search-input' className='search-input' placeholder='Search' value={searchText} onChange={handleSearch} />
                    {searchText && <button className='clear-search-btn' onClick={handleClearSearch} >X</button>}
                </div>
                <button data-testid='search-btn' className='search-btn' onClick={handleClick} >Search</button>
            </div>
            <div data-testid='rest-list' className={`res-container ${filteredRestaurants.length == 0 ? 'justify-content-center' : 'justify-content-start'}`}>
                {
                    filteredRestaurants.length == 0 ?
                        <h2>No restaurants match your search !!!</h2> :
                        filteredRestaurants.map((restaurant) =>
                            <Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id}>
                                <RestaurantCard resObj={restaurant} />
                            </Link>
                        )
                }
            </div>
        </div>
    );
}

export default Body;