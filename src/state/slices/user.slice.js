import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        repos: [],
        isLoading: false
    },
    reducers: {
        fetchData: (state, action) => {
            state.repos = action.payload
        },
    }
})


// ACTIONS

export const fetchDataAction = (payload) => {
    return {
        type: "user/fetchData",
        payload
    }
}

export const isLoadingAction = (payload) => {
    return {
        type: "user/isLoading",
        payload
    }
}

// REDUCERS

export const { fetchData } = userSlice.actions

// SELECTORS

export const reposSelector = (state) => state.repos
export const isLoadingSelector = (state) => state.isLoading



export default userSlice.reducer