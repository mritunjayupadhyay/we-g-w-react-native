import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user.type";
import { user } from "./initial.state";


interface IInitialState {
    selectedUser: User | undefined;
    users: User[];
}

const initialState:IInitialState = {
    selectedUser: undefined,
    users: user
}

function createReducers() {
    return {
        selectUser
    };

    function selectUser(state: IInitialState, action: PayloadAction<User>) {
        const { id } = action.payload;
        state.selectedUser = state.users.find((item) => item.id === id);
    }
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: createReducers()
});

// exports
export const userActions = { 
    ...slice.actions };
export const userReducer = slice.reducer;