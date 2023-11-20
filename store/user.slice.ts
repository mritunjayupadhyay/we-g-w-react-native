import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SavedCardDataType } from "../types/card.type";


interface IInitialState {
    cust_id: string | undefined;
    cards: SavedCardDataType[];
    selectedCard: SavedCardDataType | null
}

const initialState:IInitialState = {
    cust_id: '',
    cards: [],
    selectedCard: null
}

function createReducers() {
    return {
        setUser,
        setCards,
        selectCard
    };

    function setUser(state: IInitialState, action: PayloadAction<string>) {
        state.cust_id = action.payload;
    }

    function setCards(state: IInitialState, action: PayloadAction<SavedCardDataType[]>) {
        state.cards = action.payload
    }
    function selectCard(state: IInitialState, action: PayloadAction<SavedCardDataType | null>) {
        state.selectedCard = action.payload
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