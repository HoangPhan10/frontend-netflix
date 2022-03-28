import {createSlice} from '@reduxjs/toolkit'
const main = createSlice({
    name:"main",
    initialState:{
        email:"",
        password:"",
        noti:[],
    },
    reducers:{
        changeEmail(state,action){
        state.email=action.payload
        },
        changePassword(state,action){
        state.password=action.payload
        },
        getNotis(state,action){
            state.noti=action.payload
        }
       
    }
})

const {actions,reducer} = main;
export const {changeEmail,changePassword,getNotis} = actions;
export default reducer;