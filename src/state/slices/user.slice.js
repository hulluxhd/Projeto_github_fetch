import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        repos: [],
    },
    reducers: {
        fetchData: (state, action) => {
            state.repos = action.payload
        },
    }
})

export default userSlice.reducer

// ACTIONS

export const fetchDataAction = (payload) => {
    return {
        type: "user/fetchData",
        payload
    }
}

// REDUCERS

export const { fetchData } = userSlice.actions

// SELECTORS

export const reposSelector = (state) => state.repos

