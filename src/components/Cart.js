import { useSelector } from "react-redux";
import FoodItem from "./foodItem";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
    const cart = useSelector(store => store.cart);

    if (!cart.items.length) return(
        <div className="container">
            <div className="empty-cart-text">Your cart is empty</div>
        </div>
    );

    return (
        <div className="container">
            <div className="cart-resto-container">
                <button className="cart-resto-btn">
                    <span className="cart-resto-image">
                        <img height="50" width="50" alt="" src={CDN_URL + cart?.restImage} />
                    </span>
                    <span className="cart-resto-name-loc">
                        <div className="cart-resto-name">{cart?.restName}</div>
                        <div className="cart-resto-location">{cart?.restLocation}</div>
                    </span>
                </button>
                <div className="food-resto-conatiner">
                    {
                        cart?.items?.map((item) => {
                            return <FoodItem key={item?.id} Item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;