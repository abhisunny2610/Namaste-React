const CartReducer = (state, action) => {
    switch (action.type) {
        case ("ADD_TO_CART"):
            let { id, quantity, product } = action.payload
            let cartProduct;

            cartProduct = {
                id: id,
                quantity,
                title: product.title,
                price: product.price,
                    stock: product.stock,
                image: product.thumbnail
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curItem) => curItem.id != action.payload)
            return {
                ...state,
                cart: updatedCart
            }

        default:
            return state
    }
}

export default CartReducer