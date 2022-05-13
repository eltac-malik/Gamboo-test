import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk("getData",async ()=>
{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
})