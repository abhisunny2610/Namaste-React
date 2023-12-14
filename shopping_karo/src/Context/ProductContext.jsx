import { createContext, useState, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";
import { ALL_PRODUCT_API } from "../Helper";

const ProductContext = createContext()

const initialState = {
    products: [],
    isError: null,
    singleProduct: {},
    singleError : null,
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    async function getProducts() {

        try {
            const response = await fetch(ALL_PRODUCT_API)
            const json = await response.json()
            const data = json?.products
            dispatch({ type: "ALL_PRODUCTS", payload: data })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
        }
    }

    async function getSingleProduct(url) {

        try {
            const response = await fetch(url)
            const json = await response.json()
            const data = json
            dispatch({ type: "SINGLE_PRODUCT", payload: data })
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR", payload: error.message })
        }
    }

    

    useEffect(() => {
        getProducts()
        // getSingleProducts()
    }, [])

    return <ProductContext.Provider value={{ ...state, getSingleProduct}}>{children}</ProductContext.Provider>
}

export { ProductProvider, ProductContext }