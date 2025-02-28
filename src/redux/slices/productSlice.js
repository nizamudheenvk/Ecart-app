import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts",async ()=>{
   const result =  await axios.get("https://dummyjson.com/products")
//    console.log(result.data.products);
sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
   return result.data.products
})
const productSlice = createSlice ({
    name:'products',
    initialState:{
        allProducts:[],
        dummyALlProducts :[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        searchProducts : (state,actionbyHeader)=>{
            state.allProducts = state.dummyALlProducts.filter(item=>item.title.toLowerCase().includes(actionbyHeader.payload))
        }
        

    },extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload
            state.dummyALlProducts = apiResult.payload
            state.loading = false
            state.errorMsg = ""

        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts = []
            state.dummyALlProducts = []
            state.loading = false
            state.errorMsg = ""
    
    })
    builder.addCase(fetchProducts.rejected,(state)=>{
        state.allProducts = []
        state.dummyALlProducts = []
        state.loading = true
        state.errorMsg = "API call failed"

   })
  }
 })
 export const {searchProducts} = productSlice.actions
 export default productSlice.reducer