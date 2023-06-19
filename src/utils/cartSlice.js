import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        restName : '',
        restLocation : '',
        restImage : null,
        items: []
    },
    reducers: {
        addResto: (state, action) =>{
            state.restName = action?.payload?.name;
            state.restLocation = action?.payload?.areaName;
            state.restImage = action?.payload?.cloudinaryImageId;
        },
        addItem: (state, action) => {
            state.items.push(action?.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
            state.restName = '';
            state.restLocation = '';
            state.restImage = null;
        }
    }
});

export const { addResto, addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

/* Note : CreateSlice() function will return object something like below. 
e.g.
cartSlice = {
    actions : {
        addItem,
        removeItem,
        clearCart
    },
    reducer: reducers
}
*/
