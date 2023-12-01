import { LoginType } from '@/types/loginTypes';
import { UserType } from '@/types/userTypes';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk('get/posts', async() => {
    const response = await axios.get('https://jsonplaceholder.org/posts')
    
    console.log('redux getPosts >> ', response);
    
    return response.data
})

export const login = createAsyncThunk('login', async(payload: LoginType) => {
    const response = await axios.post('https://jsonplaceholder.org/login', payload)
    
    console.log('redux getPosts >> ', response);
    
    return response.data
})

export const appPostsSlice = createSlice({
    name: 'getPosts',
    initialState: {
        data: [] as Array<UserType>,
        loginResponseData : {} as UserType,
        loading: false
    },
    reducers: {
        testReducer: (state: any, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.loading = true
        }
    },
    extraReducers: builder => {
        builder.addCase(getPosts.pending, (state: any) => {
            state.loading = true
        })
        builder.addCase(getPosts.fulfilled, (state: any, action: any) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(getPosts.rejected, (state: any, action: any) => {
            state.loading = false
        })
    }
})

export const { testReducer } = appPostsSlice.actions
export default appPostsSlice.reducer