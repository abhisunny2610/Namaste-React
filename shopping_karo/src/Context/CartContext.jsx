import { createContext, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";

const CartContext =  createContext()

const InitialState = {

}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, InitialState)

    return <CartContext.Provider value={{...state}}></CartContext.Provider>
}

export default CartProvider