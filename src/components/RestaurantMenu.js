import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CDN_URL } from '../utils/constants'
import { BIKE_ICON_URL } from '../utils/constants';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';
import { BiFoodTag } from 'react-icons/bi';
import { MdLocationPin } from 'react-icons/md';


const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [detailsShown, setDetailsShown] = useState([]);
    const [licenceInfo, setLicenceInfo] = useState({});
    const [addressInfo, setAddressInfo] = useState({});

    const toggleShown = category => {
        const shownState = detailsShown.slice();
        const index = shownState.indexOf(category);
        if (index >= 0) {
            shownState.splice(index, 1);
            setDetailsShown(shownState);
        } else {
            shownState.push(category);
            setDetailsShown(shownState);
        }
    };

    useEffect(() => {
        getRestaurnantInfo();
    }, []);

    const getRestaurnantInfo = async () => {
        const restaurantInfo = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4878505&lng=74.0234138&restaurantId=" + id);
        const jsonResp = await restaurantInfo.json();

        const restInfo = jsonResp?.data?.cards[0]?.card?.card?.info;
        setRestaurant(restInfo);

        const restMenuInfo = jsonResp?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card.card['@type'].includes('ItemCategory')).map(c => c.card.card);
        setRestaurantMenu(restMenuInfo);

        const titleCategory = restMenuInfo.map(rest => rest.title);
        setDetailsShown(titleCategory);

        const licenceInfo = jsonResp?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card.card['@type'].includes('RestaurantLicenseInfo')).map(c => c.card.card)[0];
        setLicenceInfo(licenceInfo);
        console.log(licenceInfo);

        const addressInfo = jsonResp?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card.card['@type'].includes('RestaurantAddress')).map(c => c.card.card)[0];
        setAddressInfo(addressInfo);
    }

    return (
        <div className='rest-container'>
            <div className='restHeader-container'>
                <div className='restHeader-wrapper restHeader-marginBottom'>
                    <div className='restNameAddress-wrapper'>
                        <div>
                            <p className='restNameAddress-name'>{restaurant?.name}</p>
                            <p className='restNameAddress-cuisines'>{restaurant?.cuisines?.join(', ')}</p>
                        </div>
                        <div className='restNameAddress-areaWrapper'>
                            <p className='restNameAddress-area'>{restaurant?.areaName}</p>
                            <p className='restNameAddress-lastMile'>{restaurant?.sla?.lastMileTravelString}</p>
                        </div>
                    </div>
                </div>
                <ul>
                    <li className='restMessage-wrapper'>
                        <img className='restMessage-icon' src={BIKE_ICON_URL} />
                        <span className='restMessage-text'>{restaurant?.expectationNotifiers?.at(0)?.text}</span>
                    </li>
                </ul>
                <hr className='restHeader-dottedSeparator restHeader-marginBottom'></hr>
            </div>
            <div className='restMenu'>
                <div className='position-relative'>
                    {
                        restaurantMenu.map(rest =>
                            <>
                                <div key={'Category:' + rest?.title} className='main-menu-container'>
                                    <button onClick={() => toggleShown(rest.title)} className="group-menu-header-main group-menu-header">
                                        <h3 className="group-headerNestedTitle">
                                            <span>{rest.title} ({rest.itemCards.length})</span>
                                        </h3>
                                        {
                                            detailsShown.includes(rest?.title) ?
                                                <TfiAngleUp className='mx' /> :
                                                <TfiAngleDown className='mx' />
                                        }
                                    </button>
                                    <div className={detailsShown.includes(rest?.title) ? 'group-menu-show' : 'group-menu-hide'}>
                                        {
                                            rest?.itemCards?.map(itemCard => <>
                                                <div className='dish-container' key={itemCard?.card?.info?.id}>
                                                    <div className='details-container'>
                                                        <div>
                                                            <BiFoodTag className={`item-icon ${itemCard?.card?.info?.isVeg ? 'icon-veg' : 'icon-non-veg'}`} />
                                                        </div>
                                                        <div className='item-name-container'>
                                                            <h3 className='item-name-text'>{itemCard?.card?.info?.name}</h3>
                                                        </div>
                                                        <div className='item-portion-container'>
                                                            <span className='item-price'>
                                                                <span>&#8377; {(itemCard?.card?.info?.price) / 100}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={`items-image-container ${itemCard?.card?.info?.imageId ? '' : 'no-item-image'}`}>
                                                        {
                                                            itemCard?.card?.info?.imageId ?
                                                                (<div>
                                                                    <button className='image-item'>
                                                                        <img className='image-item' src={CDN_URL + itemCard?.card?.info?.imageId} />
                                                                    </button>
                                                                </div>) : null
                                                        }
                                                        <div className='item-add-button item-add-button-inner'>
                                                            <div className='add-button-text'>ADD</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='dish-divider'></div>
                                                <div></div>
                                            </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='main-menu-border'></div>
                            </>
                        )
                    }
                </div>
                <div className='restLicence-wrapper'>
                    <div className='restLicence-licence'>
                        <img className='restLicence-image' src={CDN_URL + licenceInfo?.imageId} />
                        <p className='restLicence-licence-text'>{licenceInfo?.text?.at(0)}</p>
                    </div>
                </div>
                <div className='restFooterAddress_wrapper'>
                    <div className='restFooterAddress_name'>
                        <p>{addressInfo?.name}</p>
                        <p className='font-weight-300'>(Outlet : {addressInfo?.area})</p>
                    </div>
                    <div className='restFooterAddress_address'>
                        <div className='restaurantFooterAddress_icon'><MdLocationPin /></div>
                        <p>{addressInfo?.completeAddress}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;