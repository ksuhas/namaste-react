import { BiFoodTag } from 'react-icons/bi';

const FoodItem = ({Item}) => {
    return (
        <div className="food-item-container">
            <div className="d-flex-align-center">
                <div className="d-flex">
                    <BiFoodTag className={`item-icon ${Item?.isVeg ? 'icon-veg' : 'icon-non-veg'}`} />
                    <div className="food-item-text">{Item?.name}</div>
                </div>
                <div className="w-150">
                    <div className="d-flex-center-right">
                        <div className="add-btn">
                            <div className="add-btn-text">ADD</div>
                            <div className="add-btn-plus">+</div>
                            <div className="add-btn-minus">-</div>
                            <div className="add-btn-counter">1</div>
                        </div>
                        <div className="add-btn-price">
                            <span>&#8377; {(Item?.price) / 100}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
