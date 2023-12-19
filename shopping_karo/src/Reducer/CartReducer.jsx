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

        case "SUB_TOTAL":
            let totalprice = state.cart.reduce((initialValue, curElem) => {
                let {price, quantity} = curElem

                initialValue = initialValue + price * quantity

                return initialValue
            }, 0)  

            // console.log("total", totalprice)

            return{
                ...state,
                subtotal : totalprice
            }

        case "TOTAL_ITEM":

            let total_items = state.cart.reduce((inti, curElem)=> {
                let {quantity} = curElem
                inti = inti + quantity
                return inti
            }, 0 )

            return {
                ...state,
                total_items
            }

        case "CLEAR_CART":
            return{
                ...state,
                cart: []
            }

        default:
            return state
    }
}

export default CartReducer