import { createSlice } from "@reduxjs/toolkit";


interface initialStateProps {
    focusMode: boolean;
    buisnessHour: 'open' | 'close'
}

const initialState: initialStateProps = {
    focusMode: false,
    buisnessHour: 'close'
}

const utilitySlice = createSlice({
    name: 'utility',
  initialState,
  reducers: {
     setFocusMode: (state) => {
        state.focusMode = !state.focusMode
     },
     setBuisnessHour: (state) => {
        state.buisnessHour = state.buisnessHour === 'close' ? 'open' : 'close'
     }
  }
})

export default utilitySlice.reducer

export const { setFocusMode, setBuisnessHour } = utilitySlice.actions