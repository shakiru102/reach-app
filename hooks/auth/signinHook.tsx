import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { initiateSignin } from '../../api/auth/auth'
import { setAuthUser } from '../../store/reducer/authSlice'

const signinHook = () => {

    const [passwordBtn, setPasswordBtn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const dispatch = useDispatch()

    const initiateLogin = async (password: string, phoneNumber: string) => {
      const number = Number(phoneNumber)
      setLoading(true)
      setError(false)
      
      const { auth, error } = await initiateSignin({ password, phoneNumber: `234${number}` })
      if(auth) {
        console.log(auth);
        
        setLoading(false)
        setError(false)
        dispatch(setAuthUser(auth))
      }
      else {
        
        setLoading(false)
        setError(true)
        setErrorText('Phonenumber or Password is incorrect')
      }
    }

  return {
    passwordBtn,
    setPasswordBtn,
    initiateLogin,
    loading,
    setLoading,
    error,
    errorText,
    setError
  }
}

export default signinHook

export type signinHookProps = ReturnType<typeof signinHook>