import { configureStore } from "@reduxjs/toolkit";
import {  userSlice } from "./slices/user";
import { cartSlice } from "./slices/cart";

const store=configureStore({
    reducer:{
        user:userSlice?.reducer,
        cart:cartSlice?.reducer,
        
    }
})
export default store;