import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserCard } from "../types/user.type";
import { user } from "./initial.state";
import { SavedCardDataType } from "../types/card.type";


interface IInitialState {
    cust_id: string | undefined;
    cards: SavedCardDataType[];
}

const initialState:IInitialState = {
    cust_id: '',
    cards: []
}

function createReducers() {
    return {
        setUser,
        setCards
    };

    function setUser(state: IInitialState, action: PayloadAction<string>) {
        state.cust_id = action.payload;
    }

    function setCards(state: IInitialState, action: PayloadAction<SavedCardDataType[]>) {
        state.cards = action.payload
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