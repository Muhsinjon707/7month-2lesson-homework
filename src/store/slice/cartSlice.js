import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state, action) => {
            const product = {
                id: Date.now(),
                name: action.payload['name'],
                quantity: action.payload['quantity']
            }

            state.value.push(product);
        },
        removeItem: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            state.value = state.value.map(item => {
                if (item.id == action.payload) {
                    item.quantity++;
                }

                return item;
            })
        },
        decrementQuantity: (state, action) => {
            state.value = state.value.map(item => {
                if (item.id == action.payload) {
                    item.quantity--;
                }

                return item;
            })
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;