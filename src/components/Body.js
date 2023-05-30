import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { API_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


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

    if(!allRestaurants) return null;

    return allRestaurants.length == 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='search-container'>
                <div className='search-box'>
                    <input type="text" className='search-input' placeholder='Search' value={searchText} onChange={handleSearch} />
                    {searchText && <button className='clear-search-btn' onClick={handleClearSearch} >X</button>}
                </div>
                <button className='search-btn' onClick={handleClick} >Search</button>
            </div>
            <div className={`res-container ${filteredRestaurants.length == 0 ? 'justify-content-center' : 'justify-content-start'}`}>
                {
                    filteredRestaurants.length == 0  ? 
                    <h2>No restaurants match your search !!!</h2> :
                    filteredRestaurants.map((restaurant) => 
                        <Link to={'/restaurant/'+ restaurant.data.id} key={restaurant.data.id}>
                             <RestaurantCard resObj={restaurant} />
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Body;