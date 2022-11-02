import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRepo } from "../../types/repo.type";
import { RootState } from "../store/store";


export interface UserStateInfo {
    avatar_url: string,
    blog: string,
    name: string
}

interface UserState {
    repos: UserRepo[],
    isLoading: boolean,
    userName: string,
    searchUser: string,
    userInfo: UserStateInfo
}

const initialState: UserState = {
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
        fetchData: (state, action: PayloadAction<UserRepo[]>) => {
            state.repos = action.payload
        },
        changeUserName: (state, action: PayloadAction<string>) => void (state.userName = action.payload),
        setUserInfo: (state, action: PayloadAction<UserStateInfo>) => void (state.userInfo = action.payload),
        setIsLoading: (state, action: PayloadAction<boolean>) => void (state.isLoading = action.payload),
        clear: (state) => {
            void (state.userName = "hulluxhd")
            void (state.searchUser = "")
        },
        swapUser: (state, action: PayloadAction<string>) => void (state.searchUser = action.payload)
    }
})


// ACTIONS

export const fetchDataAction = (payload: UserRepo[]) => {
    return {
        type: "user/fetchData",
        payload
    }
}

export const isLoadingAction = (payload: boolean) => {
    return {
        type: "user/setIsLoading",
        payload
    }
}

// REDUCERS

export const { fetchData, changeUserName, clear, swapUser } = userSlice.actions

// SELECTORS

export const avatarSelector = (state: RootState) => state.user.userInfo.avatar_url
export const blogSelector = (state: RootState) => state.user.userInfo.blog
export const nameSelector = (state: RootState) => state.user.userInfo.name
export const reposSelector = (state: RootState) => state.user.repos
export const userNameSelector = (state: RootState) => state.user.userName
export const isLoadingSelector = (state: RootState) => state.user.isLoading
export const searchUserSelector = (state: RootState) => state.user.searchUser



export default userSlice.reducer