import React, { useState } from 'react'
import * as Yup from 'yup'



function ResetPasswordHook() {

    const [passwordBtn, setPasswordBtn] = useState<boolean>(false)
    const [passwordHint, setPasswordHint] = useState<boolean>(false)
    const [confirmPasswordHint, setConfirmPasswordHint] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [passwordSaved, setPasswordSaved] = useState<boolean>(false)


    const ResetPasswordSchema = Yup.object().shape({
        newPassword: Yup.number().required(),
       confirmPassword: Yup.bool().oneOf([true], 'Field must be checked').required()
      })

    

    const updateUserPassword = () => {
        setPasswordSaved(prev => !prev)
    } 



  return {
     ResetPasswordSchema,
     passwordBtn,
     setPasswordBtn,
     passwordHint,
     setPasswordHint,
     error,
     errorText,
     setError,
     loading,
     confirmPasswordHint,
     setConfirmPasswordHint,
     passwordSaved,
     updateUserPassword
  }
}

export default ResetPasswordHook

export type ResetPasswordHookProps = ReturnType<typeof ResetPasswordHook>