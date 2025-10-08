import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({})
    const url = import.meta.env.VITE_BACKEND_URL
    const [token,setToken] = useState("")
    const [food_list, setFoodList] = useState([]) 

    const addToCart = async (itemId) => {
        // 1. update local state
        if (!cartItems[itemId]) {
          setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

        
        // 2. update backend also
        try {
          await axios.post(url + "/api/cart/add", 
            { itemId }, 
            { headers: { token } } 
          );
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
      };
      

    const removeFromCart = async(itemId)=>{
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId] - 1}))

        try {
          await axios.post(url + "/api/cart/remove", 
            { itemId }, 
            { headers: { token } } 
          );
        } catch (error) {
          console.error("Error remove from the cart:", error);
        }

    }


    const fetchFoodList = async() =>{
        const response = await axios.get(url+"/api/food/list")
        console.log(response.data) 
        setFoodList(response.data.data)
    }


    const loadCartData = async (token) => {
      try {
          const response = await axios.post(
              url + "/api/cart/get", 
              {}, 
              { headers: { token } }
          );
          setCartItems(response.data.cartData);
      } catch (error) {
          console.error("Error loading cart data:", error);
      }
  };
  


    useEffect(() => {
      async function loadData() {
          await fetchFoodList();
          const storedToken = localStorage.getItem("token");
          if (storedToken) {
              setToken(storedToken);
              await loadCartData(storedToken);
          }
      }
      loadData();
  }, []);
  



    const contextValue = {
        food_list,
        cartItems, 
        setCartItems, 
        addToCart,
        removeFromCart,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
                {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;





