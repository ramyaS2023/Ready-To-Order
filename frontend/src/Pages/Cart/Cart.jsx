
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, url } = useContext(StoreContext)

  const navigate = useNavigate()

  // 🔹 Calculate subtotal
  const getSubTotal = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id] > 0) {
        return total + item.price * cartItems[item._id]
      }
      return total
    }, 0)
  }

  const deliveryFee = 2
  const subTotal = getSubTotal()
  const grandTotal = subTotal + deliveryFee

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="cart-qty">
                    <img
                      onClick={() => removeFromCart(item._id)}
                      src={assets.remove_icon_red}
                      alt="remove"
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      onClick={() => addToCart(item._id)}
                      src={assets.add_icon_green}
                      alt="add"
                    />
                  </div>

                  {/* Total per item */}
                  <p>${item.price * cartItems[item._id]}</p>

                  {/* Remove whole item */}
                  <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            )
          }
          return null
        })}
      </div>

      {/* Bottom Totals */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${subTotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${grandTotal.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() =>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
        <div>
                <p className='cart-para'>If You have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder='Promocode'/>
                  <button>Submit</button>
                </div>
              </div>
        </div>
             
      </div>
    </div>
  )
}

export default Cart
