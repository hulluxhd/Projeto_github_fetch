import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    repos: [],
    isLoading: false,
    userName: "hulluxhd",
    searchUser: "",
    userInfo: {
        avatar_url: "",
        blog: "",
        name: ""
   }
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.repos = action.payload
        },
        changeUserName: (state, action) => void (state.userName = action.payload),
        setUserInfo: (state, action) => void (state.userInfo = action.payload),
        setIsLoading: (state, action) => void (state.isLoading = action.payload),
        clear: (state) => {
            void (state.userName = "hulluxhd")
            void (state.searchUser = "")
        },
        swapUser: (state, action) => void (state.searchUser = action.payload)
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

export const { fetchData, changeUserName, clear, swapUser } = userSlice.actions

// SELECTORS

export const avatarSelector = (state) => state.user.userInfo.avatar_url
export const blogSelector = (state) => state.user.userInfo.blog
export const nameSelector = (state) => state.user.userInfo.name
export const reposSelector = (state) => state.user.repos
export const userNameSelector = (state) => state.user.userName
export const isLoadingSelector = (state) =>state.user.isLoading
export const searchUserSelector = (state) =>state.user.searchUser



export default userSlice.reducer