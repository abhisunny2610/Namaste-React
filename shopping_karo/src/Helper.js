import img1 from './Images/maxresdefault.jpg'
import img2 from './Images/5594188.jpg'
import img3 from './Images/5092428.jpg'
import img4 from './Images/4810807.jpg'


export const ALL_PRODUCT_API = "https://dummyjson.com/products?skip=0&limit=100"

export const SINGLE_PRODUCT_API = " https://dummyjson.com/products/"

export const randomNumberInRange = (min, max) => { 
    return Math.floor(Math.random()  
            * (max - min + 1)) + min; 
};


export const imageList = [img1, img2, img3, img4]