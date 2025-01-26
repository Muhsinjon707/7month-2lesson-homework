import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [
            {
                id: 1,
                product: "Iphone 15pro max",
                quantity: 8,
            },
            {
                id: 2,
                product: "Iphone 16pro max",
                quantity: 9,
            },
            {
                id: 3,
                product: "Iphone 17pro max",
                quantity: 10,
            },
        ]
    },
    reducers: {
        addItem: (state) => {

        },
        removeItem: () => { },
        incrementQuantity: () => { },
        decrementQuantity: () => { }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;