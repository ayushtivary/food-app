// import { createSlice } from "@reduxjs/toolkit";

// // creating slice 
// const cartSlice = createSlice({
//     // predefine props 
//     name: 'cart',
//     initialState : {
//         items: ["burger","pizzas"]
//     },
//     reducers : {

//         // action is on left side, reducer function on right side with call back function
//         // first reducer to add items to cart 
//         addItem: (state, action) => {
//             state.items.push(action.payload)
//         },
//         // second reducer to remove items from cart 
//         removeItems: (state)=>{
//             state.items.pop();
//         },
//         // third reducer to clear the cart 
//         clearCart: (state)=> {
//             state.items.length = 0
//         }
//     }
// })

// // exporting action
// export const {addItem,removeItems,clearCart} = cartSlice.actions;

// // exporting reducer 
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;  // This is important!
