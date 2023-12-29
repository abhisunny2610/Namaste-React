const FilterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_PRODUCT":
            return{
                ...state,
                all_products: [...action.payload],
                filter_products: action.payload
            }

        case "SORTING":
            const userSortValue = document.getElementById("sort")
            const sort_value = userSortValue[userSortValue.selectedIndex].value

            return{
                ...state,
                sorting_value: sort_value,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            let tempsortProduct = [...action.payload]

            if(state.sorting_value === "a-z"){ 
                newSortData = tempsortProduct.sort((a,b) =>  a.title.localeCompare(b.title)
                )
            }

            if(state.sorting_value === "z-a"){
                newSortData = tempsortProduct.sort((a,b) =>  b.title.localeCompare(a.title)
                )
            }

            if(state.sorting_value === "lowest"){
                newSortData = tempsortProduct.sort((a,b) =>  a.price - b.price
                )
            }

            if(state.sorting_value === "highest"){
                newSortData = tempsortProduct.sort((a,b) =>  b.price - a.price
                )
            }

            return {
                ...state,
                filter_products: newSortData,
            }
    
        default:
            return state
    }
}

export default FilterReducer