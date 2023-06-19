import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;


/*

* create Store
* - configureStore() - RTK
* 
* Provide my store to app
* - <Provider store={store} - import from react-redux
* 
* Slice 
* - RTK - createSlice({
*    name : "",
*    intialState:
*   reducers:{
*        addItem : (state, action)=>{ state = action.payload}
*    }
* })
* export const { addItem, removeItem } = cartSlice.actions
* export default cartSlice.reducer
*
* Put that Slice in to Store
*  - reducer: {
*       cart : cartSlice,
*        user : userSlice
*    }
*
*
*/