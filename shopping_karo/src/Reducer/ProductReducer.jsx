const ProductReducer = (state, action) => {

    switch (action.type) {
        case "ALL_PRODUCTS":
            return {
                ...state,
                products : action.payload,
                isError: false
            }

        case "ERROR":
            return {
                ...state,
                isError: action.payload
            }
        
        case "SINGLE_PRODUCT":
            return {
                ...state,
                isError: false,
                singleProduct: action.payload
            }

        case "SINGLE_ERROR":
            return{
                ...state,
                singleError: action.payload,
            }

        default:
            return state
    }

}

export default ProductReducer