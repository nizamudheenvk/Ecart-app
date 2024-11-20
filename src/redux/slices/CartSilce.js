import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"CartItems",
    initialState:[],
    reducers:{
        addToCArt :(state,actionByComponent)=>{
            const exisitingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(exisitingProduct){
                exisitingProduct .quantity++
                exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
                const remainingProducts = state.filter(item=>item.id!=exisitingProduct.id)
                state = [...remainingProducts,exisitingProduct]

            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }

        },
    incrementQuantity : (state,actionByCart)=>{
        const exisitingProduct = state.find(item=>item.id==actionByCart.payload)
        exisitingProduct.quantity++
        exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
        const remainingProducts = state.filter(item=>item.id!=exisitingProduct.id)
        state = [...remainingProducts, exisitingProduct]
    },
    removeCartItem : (state,actionByCart)=>{
        return state.filter(item=>item.id!=actionByCart.payload)
    },
    decrementQuantity : (state,actionByCart)=>{
        const exisitingProduct = state.find(item=>item.id==actionByCart.payload)
        exisitingProduct.quantity--
        exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
        const remainingProducts = state.filter(item=>item.id!=exisitingProduct.id)
        state = [...remainingProducts, exisitingProduct]
    },
    emptyCart : (state)=>{
        return state = []
    }

    }
})
export const {addToCArt,incrementQuantity,removeCartItem,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer