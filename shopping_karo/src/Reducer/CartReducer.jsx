const CartReducer = (state, action) => {
    switch (action.type) {
        case ("ADD_TO_CART"):
            let {id, quantity, product} = action.payload
            
        default:
            return state
    }
}

export default CartReducer