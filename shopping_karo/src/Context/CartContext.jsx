import { createContext, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";

const CartContext =  createContext()

const InitialState = {
    cart: [],
    total_items: '',
    subtotal : '',
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, InitialState)

    const addToCart = (product, quantity, id) => {
        dispatch({type: "ADD_TO_CART", payload: {id, product, quantity}})
    }

    return <CartContext.Provider value={{...state, addToCart}}>{children}</CartContext.Provider>
}

export {CartContext, CartProvider}