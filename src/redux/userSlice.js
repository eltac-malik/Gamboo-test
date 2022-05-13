import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name:"currentUser",
    initialState:{
        user:{},
        auth:"",
    },
    reducers:{
        setUser:(state,action)=>
        {
            state.user = action.payload
        },
        setAuth:(state,action)=>
        {
            state.user = action.payload
        },
    }
})

export const {setUser,setAuth} =  userSlice.actions
export default userSlice.reducer;