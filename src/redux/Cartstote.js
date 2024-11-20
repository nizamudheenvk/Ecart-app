import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/CartSilce'

const CartStore = configureStore({
    reducer :{
        productReducer : productSlice,
        wislistReducer : wishlistSlice,
        cartReducer : cartSlice


    }
})
export default CartStore