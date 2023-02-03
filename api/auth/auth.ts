import axios, { AxiosResponse } from "axios"
import { api } from ".."
import { AuthSigninParams, AuthSignupParams, AuthUserResponseParams, AuthVerifyPhonenumberParams } from "../../interface/auth"

export const initiateSignup = async (params: AuthSignupParams) => {
    try {
        
        const res: AxiosResponse<AuthUserResponseParams, any> = await api.post('/auth/signup', { ...params })
 
        return { auth: res.data }
    } catch (error: any) {
        return {
            error: error.message
        }
    }
}



export const initiateSignin = async (params: AuthSigninParams) => {
    

    try {
        const res: AxiosResponse<AuthUserResponseParams, any> = await api.post(`/auth/sign-in`, { ...params })
        
        return { auth: res.data }
    } catch (error: any) {
        return {
            error: error.message
        }
    }

}

export const initiateAuthPhoneumberVerification = async ({ phoneNumber }: AuthVerifyPhonenumberParams) => {

    try {
        
        const res: AxiosResponse<string, any> = await api.post(`/auth/verify?phoneNumber=${ phoneNumber }`)
        

        return { otp: res.data }
    } catch (error: any) {
        
        return {
            error: error.message
        }
    }
}


