import {createSlice} from '@reduxjs/toolkit'
import {fetchData} from '../services/request'


export const dataSlice = createSlice({
    name:"data",
    initialState:{
        userData:[]
    },
    reducers:{},
    extraReducers:{
        [fetchData.fulfilled]:(state,action)=>
        {
            state.userData = action.payload
        }
    }
})

export default dataSlice.reducer