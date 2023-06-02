import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { initiateAuthPhoneumberVerification, initiateSignup } from '../../api/auth/auth'
import { AuthSignupParams } from '../../interface/auth'
import { RootState } from '../../store'
import { setAuthUser, setOtp } from '../../store/reducer/authSlice'
import { confirmOtpProps, phonenumberBtnStateProps } from './signupHook'



function initiateResetPasswordHook() {

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
    



    const initiateResetPasswordSchema = Yup.object().shape({
        phoneNumber: Yup.number().required(),
       verified: Yup.bool().oneOf([true], 'Field must be checked').required()
      })

    const initiatePhonenumberVerification = async (phoneNumber: any) => {

      const number = Number(phoneNumber)
      setPhonenumberBtnState('verifying')

        const { error, otp } = await initiateAuthPhoneumberVerification({ phoneNumber: `234${ number }` })
       
       if(otp) {
        setVerifyPhonenumber(true)
        setPhonenumberBtnState('none')
        dispatch(setOtp(otp))
        setErrorText('')
       }else {
        setPhonenumberBtnState('none')
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
     initiateResetPasswordSchema,
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
     error,
     errorText,
     setError,
     loading,
  }
}

export default initiateResetPasswordHook

export type initiateResetPasswordHookProps = ReturnType<typeof initiateResetPasswordHook>