import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const playersSlice = createSlice({
    name: "players",
    initialState: [],
    reducers: {
        addPlayer: (state, action) => {
            const player = {
                id: Date.now(),
                player: action.payload["player"],
                score: action.payload["score"]
            }
            state.push(player);
        },
        removePlayer: (state, action) => {
            state = state.filter(item => item.id !== action.payload)
        },
        updateScore: (state, action) => {
            const player = state.find(player => player.id === action.payload[0]);
            if (player) player.score = action.payload[1]
        }
    }
})

export default playersSlice.reducer;
export const { addPlayer, removePlayer, updateScore } = playersSlice.actions;