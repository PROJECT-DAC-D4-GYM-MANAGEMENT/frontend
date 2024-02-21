import { createSlice } from "@reduxjs/toolkit";

export const productSlice=createSlice({
     name:"product",
    initialState:{productDetails:{}},
    reducers:{
        addProductDetails:(store,action)=>{
            console.log("pay",action.payload)
          store.productDetails=action.payload;
        }
    }
})
export const{addProductDetails} =productSlice.actions;