import React, { use, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../../Slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); //Get cart items
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
  const navigate = useNavigate();



  //calculate total items and price
  const totalItems = cartItems.reduce((sum, item)=> sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  //Checkout functionality
  const handleCheckout = ()=>{
    if(!isAuthenticated){
      navigate("/login");
    }else{
      dispatch(clearCart());
      toast.success(`Order placed Successfully!!!!!!!!`, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            progress: undefined
      })
      setTimeout(()=> navigate("/"), 2500)  
    }
  }


  useEffect(() => {
    console.log("crt items updated:", cartItems);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <ToastContainer/>
      <h2 className="cart-title">
        
        <CgShoppingCart /> Shopping Cart
      </h2>
      {/* empty cart Message */}
      <p className="empty-cart"> Your Cart is Empty </p>
      {/* Cart Content */}
      <div className="cart-content">
        {/* Cart Item List */}
        <div className="cart-items">
          {cartItems.map((item, index) => {
            return (
              <div key={index}>
                <div className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>£{item.price}</p>
                  </div>
                  {/* Quantity buttons */}
                  <div className="quantity-controls"> 
                    <button onClick={()=> dispatch(decreaseQuantity(item.id))}> ➖ </button> 
                    <span>{item.quantity}</span> 
                    <button onClick={()=> dispatch(increaseQuantity(item.id))}> ➕ </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                     ❌ Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Summary Section */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>
            {" "}
            Total Items: <strong>{totalItems}</strong>{" "}
          </p>
          <p>
            {" "}
            Total price: <strong>£{totalPrice}</strong>{" "}
          </p>
          <button className="clear-cart-button" onClick={()=> dispatch(clearCart())}> 🗑️  Clear Cart </button>
          <button className="checkout-button" onClick={handleCheckout}> ✅ Checkout </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
