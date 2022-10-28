import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        repos: [],
        isLoading: false,
        userName: "hulluxhd",
        userInfo: {
            avatar_url: "",
            blog: ""
       }
    },
    reducers: {
        fetchData: (state, action) => {
            state.repos = action.payload
        },
        changeUserName: (state, action) => void (state.userName = action.payload),
        setUserInfo: (state, action) => void (state.userInfo = action.payload),
        setIsLoading: (state, action) => void (state.isLoading = action.payload)
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
        type: "user/setIsLoading",
        payload
    }
}

// REDUCERS

export const { fetchData, changeUserName } = userSlice.actions

// SELECTORS

export const avatarSelector = (state) => state.user.userInfo.avatar_url
export const reposSelector = (state) => state.user.repos
export const userNameSelector = (state) => state.user.userName
export const isLoadingSelector = (state) =>state.user.isLoading



export default userSlice.reducer