import {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = ()=>{

    const [filteredList, setFilteredList] = useState(resList);

    handleClick =()=>{
        const list = resList.filter((res)=>res?.data?.avgRating > 4);
        setFilteredList(list);
    }

    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={handleClick} >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {
                    filteredList.map((restaurant)=><RestaurantCard key={restaurant.data.id} resObj={restaurant}/>)
                }
            </div>
        </div>
    );
}

export default Body;