import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";

const CartContext =  createContext()

const InitialState = {
    cart: [],
    total_items: 0,
    subtotal : 0,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, InitialState)

    const addToCart = (product, quantity, id) => {
        dispatch({type: "ADD_TO_CART", payload: {id, product, quantity}})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload:id})
    }

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    useEffect(()=> {
        dispatch({type:"SUB_TOTAL"})
        dispatch({type:"TOTAL_ITEM"})
    }, [state.cart])

    return <CartContext.Provider value={{...state,removeItem, addToCart, clearCart}}>{children}</CartContext.Provider>
}

export {CartContext, CartProvider}