import {createSlice} from '@reduxjs/toolkit'

const main = createSlice({
    name:"main",
    initialState:{
        email:"",
    },
    reducers:{
        changeEmail(state,action){
        state.email=action.payload
        },
    }
})

const {actions,reducer} = main;
export const {changeEmail,changeUser} = actions;
export default reducer;