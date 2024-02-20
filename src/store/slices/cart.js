import { createSlice } from "@reduxjs/toolkit";
export const  cartSlice=createSlice({
    name:"cart",
    initialState:{products:{

    }},
    reducers:{
       addProduct:(state,action)=>{
        console.log(action.payload)
        state.products=action.payload
       } ,
       removeProduct:(state,action)=>{
              state={};
       }
    }
})
export const { addProduct,removeProduct} = cartSlice.actions;