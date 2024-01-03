import { createSlice } from '@reduxjs/toolkit';

const initial_toggle_state = { isShowing: false, notification: null };

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initial_toggle_state,
    reducers: {
        toggleState: (state) => {
            state.isShowing = !state.isShowing;
        },
        setNotification: (state, action) => {
            state.notification = {
                title: action.payload.title,
                message: action.payload.message,
                status: action.payload.status
            }
        }
    }
})

export const toggleActions = toggleSlice.actions;
export default toggleSlice; 