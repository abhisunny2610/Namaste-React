export const ALL_PRODUCT_API = "https://dummyjson.com/products?skip=0&limit=100"

export const SINGLE_PRODUCT_API = " https://dummyjson.com/products/"

export const randomNumberInRange = (min, max) => { 
    return Math.floor(Math.random()  
            * (max - min + 1)) + min; 
};