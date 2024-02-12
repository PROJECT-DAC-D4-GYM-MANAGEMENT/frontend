import { createSlice } from "@reduxjs/toolkit";


 export const  userSlice=createSlice({
    name:"user",
    initialState:{user:"user"},
    reducers:{
       addUser:(state,action)=>{
         // console.log("avv",action.payload)
          state.user=action.payload;
       } ,
       removeUser:(state,action)=>{
              state={};
       }
    }
})
export const { addUser} = userSlice.actions;

