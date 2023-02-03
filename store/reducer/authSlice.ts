import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserResponseParams } from "../../interface/auth";

interface initialStateProps {
    loggedIn: boolean;
    otp: string;
    auth: AuthUserResponseParams | null
}

const initialState: initialStateProps = {
  loggedIn: false,
  otp: '',
  auth: null 
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       
        toggleAuth: (state) => {
            state.loggedIn = !state.loggedIn
        },
        setOtp: (state, action: PayloadAction<string>) => {
             state.otp = action.payload
        },
        setAuthUser: (state, action: PayloadAction<AuthUserResponseParams | null>) => {
            state.auth = action.payload
        }
    }

})

export const { toggleAuth, setOtp, setAuthUser } = authSlice.actions

export default authSlice.reducer