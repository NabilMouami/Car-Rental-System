import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getTotals,addToCart,clearCart,decreaseCart,removeFromCart} from '../../../../redux/carSlice';
import Navbar from '../navbar/Navbar'
import { Link } from "react-router-dom";
import './Cart.css'
import StripeCheckout from "react-stripe-checkout";
function Cart() {
    const car = useSelector((state) => state.car);

    const [product, setProduct] = useState({
        name: "React from FB",
        price: 10,
        productBy: "cars"
      });
      const makePayment = token => {
        const body ={
          token,
          product
        }
        const headers ={
          "Content-Type": "application/json"
        }
        return fetch(`http://localhost:8282/payment`, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        }).then(response => {
          console.log("RESPONSE ", response)
          const {status} = response;
          console.log("STATUS ", status)
        }).catch(error => console.log(error))
      };


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
      }, [car, dispatch]);
      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
      const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
      };
      const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
      };
      const handleClearCart = () => {
        dispatch(clearCart());
      };
      
    return (
        <div>
            <Navbar />
            <div className="cart-container">
                    <h2>Rental Car</h2>
                    {car.cartItems.length === 0 ? (
                        <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Start Shopping</span>
                            </Link>
                        </div>
                        </div>
                    ) : (
                        <div>
                        <div className="titles">
                            <h3 className="product-title">Product</h3>
                            <h3 className="price">Price</h3>
                            <h3 className="quantity">Quantity</h3>
                            <h3 className="total">Total</h3>
                        </div>
                        <div className="cart-items">
                            {car.cartItems &&
                            car.cartItems.map((cartItem) => (
                                <div className="cart-item" key={cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.desc}</p>
                                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                                        Remove
                                    </button>
                                    </div>
                                </div>
                                <div className="cart-product-price">${cartItem.prix}</div>
                                <div className="cart-product-quantity">
                                    <button onClick={() => handleDecreaseCart(cartItem)}>
                                    -
                                    </button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                </div>
                                <div className="cart-product-total-price">
                                    ${cartItem.prix * cartItem.cartQuantity}
                                </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <button className="clear-btn" onClick={() => handleClearCart()}>
                            Clear Cart
                            </button>
                            <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className="amount">${car.cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>

                                 <StripeCheckout stripeKey='pk_test_51K6YxnLDcLVLx47gxCr5r254tDfJ0UAVqaRNrzUUnsJpLeeFGJazbyQJNzB5tzMKrrdcdsbtRGirgiubdwOu8Oyu002u72d11G'
                                            token={makePayment}
                                            name="Buy Auto"
                                            amount={car.cartTotalAmount * 100}

                                             > 
                               <button>Check out</button>
                            </StripeCheckout>
                            <div className="continue-shopping">
                                <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Continue Shopping</span>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>

        </div>
    )
}

export default Cart;
