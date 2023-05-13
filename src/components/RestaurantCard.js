import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props)=>{
    const {resObj} = props;
    const {name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId} = resObj?.data;
    return(
        <div className='res-card'>
            <img className="res-logo" alt="res-logo" src={ CDN_URL + cloudinaryImageId }/>
            <div className='res-name'>{name}</div>
            <div className='res-cusine'>{cuisines.join(', ')}</div>
            <div className='res-rating-cost-deltime'>
                <div>{avgRating} stars</div>
                <div>{costForTwoString}</div>
                <div>{deliveryTime} Minutes</div>
            </div>
        </div>
    );
}

export default RestaurantCard;