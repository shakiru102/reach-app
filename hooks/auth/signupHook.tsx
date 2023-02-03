import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { initiateAuthPhoneumberVerification, initiateSignup } from '../../api/auth/auth'
import { AuthSignupParams } from '../../interface/auth'
import { RootState } from '../../store'
import { setAuthUser, setOtp } from '../../store/reducer/authSlice'

export type phonenumberBtnStateProps = 'initiate verification' | 'verifying' | 'verified' | 'none'
export type confirmOtpProps = 'none' | 'verifying' | 'error'

function signupHook() {

    const [phonenumberBtnState, setPhonenumberBtnState] = useState<phonenumberBtnStateProps>('none')
    const [verifyPhonenumber, setVerifyPhonenumber] = useState<boolean>(false)
    const [confirmOtp, setConfirmOtp] = useState<confirmOtpProps>('none')
    const [clear, setclear] = useState<string>('')
    const [countdown, setCountdown] = useState<any>(false)
    const [passwordBtn, setPasswordBtn] = useState<boolean>(false)
    const [passwordHint, setPasswordHint] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')

    const dispatch = useDispatch()
    const { otp } = useSelector((state: RootState) => state.auth)
    



    const signupSchema = Yup.object().shape({
        firstName: Yup.string().required().min(3),
        lastName: Yup.string().required().min(3),
        phoneNumber: Yup.number().required(),
        password: Yup.string().required()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/, 
        'please make sure your password has a minimum of 8 characters, one uppercase letter, one number, and one special character'),
       verified: Yup.bool().oneOf([true], 'Field must be checked').required(),
       tsp: Yup.bool().oneOf([true], 'Field must be checked').required(),
       nob: Yup.string().required()
      })

    const initiatePhonenumberVerification = async (phoneNumber: any) => {

      const number = Number(phoneNumber)
      setPhonenumberBtnState('verifying')

        const { error, otp } = await initiateAuthPhoneumberVerification({ phoneNumber: `234${ number }` })
       
       if(otp) {
        setVerifyPhonenumber(true)
        setPhonenumberBtnState('none')
        dispatch(setOtp(otp))
       }else {
        setPhonenumberBtnState('initiate verification')
        setLoading(false)
        setError(true)
        setErrorText(error)
       }
            
    }

    const initiateConfirmOtp = (arg?: any) => {

      
         
      setPasswordHint(false)
      const isVerified = arg == otp

      console.log(isVerified, otp);
      
 
        //  Error Proccess
        if(!isVerified){
          setConfirmOtp('error')
          return
        }

        setPhonenumberBtnState('verified')
        setVerifyPhonenumber(false)
        setclear('')

          return {
            fieldValue: true
          }
             
        
    }

    const initiateUserSignup = async (arg: AuthSignupParams) => {
      const number = Number(arg.phoneNumber)
      setLoading(true)
      const { auth, error } = await initiateSignup({...arg , phoneNumber: `234${number}`})
      console.log(arg.phoneNumber);
      
      if(auth) {
        setLoading(false)
        setError(false)
        dispatch(setAuthUser(auth))
      }
      else {
        setLoading(false)
        setError(true)
        setErrorText(error)
        
      }

    }

    const initiateResendOtp = async (phoneNumber: any) => {

      const number = Number(phoneNumber)

      const { otp, error } = await initiateAuthPhoneumberVerification({ phoneNumber : `234${ number }`})

      if(otp){
        dispatch(setOtp(otp))
        setCountdown((prev: any) => !prev)
      }else {
        setLoading(false)
        setError(true)
        setErrorText(error.replace('Error:', ''))
      }
    }

  return {
     phonenumberBtnState,
     setPhonenumberBtnState,
     verifyPhonenumber,
     setVerifyPhonenumber,
     signupSchema,
     initiatePhonenumberVerification,
     confirmOtp,
     setConfirmOtp,
     initiateConfirmOtp,
     initiateResendOtp,
     countdown,
     setCountdown,
     clear,
     setclear,
     passwordBtn,
     setPasswordBtn,
     passwordHint,
     setPasswordHint,
     initiateUserSignup,
     error,
     errorText,
     setError,
     loading
  }
}

export default signupHook

export type signupHookProps = ReturnType<typeof signupHook>