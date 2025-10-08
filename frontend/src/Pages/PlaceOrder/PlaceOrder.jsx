import React, { useContext,  useEffect,  useState} from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {
  const { cartItems, food_list,token,url } = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const deliveryFee = 2;

  // Calculate subtotal
  const subTotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  const grandTotal = subTotal + deliveryFee;



  const placeOrder = async(event) =>{
    event.preventDefault();
    let orderItems = [];
   

    food_list.forEach((item) => {
      if (cartItems[item._id]) {
        // safe copy
        let itemInfo = {
          ...item, 
          quantity: cartItems[item._id]
        };
        orderItems.push(itemInfo);
      }
    });
    

    let orderData = {
      userId: localStorage.getItem("userId"),
      address:data,
      items:orderItems,
      amount:grandTotal
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      // window.location.replace(session_url);
      window.location.href = session_url;
    }
    else{
      alert("Error")
    }
  }

  const navigate = useNavigate();

  useEffect(() =>{
    if(!token){
      navigate('/cart');
    }
    else if(subTotal === 0){
      navigate('/cart')
    }
  },[token])
  

  return (
    <form className="place-order" onSubmit={placeOrder}>
      {/* -------- Left Side (Delivery Info Form) -------- */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onchangeHandler} value={data.firstName} type="text" placeholder="First name" />
          <input required name="lastName" onChange={onchangeHandler} value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input required name="email" onChange={onchangeHandler} value={data.email} type="email" placeholder="Email address" />
        <input required name="street" onChange={onchangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" onChange={onchangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onchangeHandler} value={data.state}  type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" onChange={onchangeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
          <input required name="country" onChange={onchangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        <input required name="phone" onChange={onchangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>

      {/* -------- Right Side (Cart Totals) -------- */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="line-item">
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div className="line-item">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>

          <div className="line-item total">
            <strong>Total</strong>
            <strong>${grandTotal.toFixed(2)}</strong>
          </div>

          <button className="pay-btn" type="submit">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;






