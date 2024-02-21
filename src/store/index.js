import { configureStore } from "@reduxjs/toolkit";
import {  userSlice } from "./slices/user";
import { cartSlice } from "./slices/cart";
import { productSlice } from "./slices/product";

const store=configureStore({
    reducer:{
        user:userSlice?.reducer,
        cart:cartSlice?.reducer,
        details:productSlice?.reducer,
        
    }
})
export default store;