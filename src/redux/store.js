import {configureStore} from '@reduxjs/toolkit'
import  userSlice  from './userSlice';
import dataSlice from './dataSlice'


export const store = configureStore(
    {
        reducer:{
            user:userSlice,
            data:dataSlice
        }
    }
)
