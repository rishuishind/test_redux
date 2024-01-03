import { createSlice } from '@reduxjs/toolkit';

const initial_toggle_state = { isShowing: false };

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initial_toggle_state,
    reducers: {
        toggleState: (state) => {
            state.isShowing = !state.isShowing;
        }
    }
})

export const toggleActions = toggleSlice.actions;
export default toggleSlice; 