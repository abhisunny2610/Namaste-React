import { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";
import { ProductContext } from "./ProductContext";



const FilterContext = createContext()

const Initialstate= {
    filter_products : [],
    all_products: [],
    sorting_value: "lowest",
    // filter: { 
    //     value
    // }
}

const FilterProvider = ({ children }) => {

    const {products} = useContext(ProductContext)

    const [state, dispatch] = useReducer(FilterReducer, Initialstate)

    const sorting = () => {
        dispatch({type: "SORTING"})
    }

    useEffect(()=> {
        dispatch({type: "SORTING_PRODUCTS", payload:products})
    }, [state.sorting_value])


    useEffect(()=> {
        dispatch({type: "FILTER_PRODUCT", payload:products})
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, sorting }}>{children}</FilterContext.Provider>
    )

}

export { FilterContext, FilterProvider }