import React, { FC, useState } from 'react'
import { Formik } from 'formik'
import FormInput from '../common/FormInput'
import { ResetPasswordHookProps } from '../../hooks/auth/resetPasswordHook'
import PasswordAccessory from '../common/PasswordAccessory'
import { AnimatePresence, Motion } from '@legendapp/motion'
import PasswordStrength from '../common/PasswordStrength'
import { Text, View } from 'react-native'
import ReeachButton from '../common/ReeachButton'

interface ResetPasswordProps extends ResetPasswordHookProps {
    initiateRouteNavigation: (e?: any) => void
  }

const ResetPasswordForm: FC<ResetPasswordProps> = ({
    setPasswordHint,
    passwordBtn,
    setPasswordBtn,
    passwordHint,
    setConfirmPasswordHint,
    confirmPasswordHint,
    passwordSaved,
    updateUserPassword

}) => {

    const [typing, setTyping] = useState<boolean>(false)

  return (
    <Formik
    initialValues={{ newPassword: '', confirmPassword: '' }}
    onSubmit={() => {
        updateUserPassword()
    }}
    >
      { ({ setFieldValue, values, handleSubmit }) => {

    if(values.confirmPassword || values.newPassword) setTyping(true)
    else setTyping(false)

        return (
            <>
             <FormInput 
                 keyboardType='default'
                 label='New Password'
                 onChangeText={(v) => {
                     const isStrength =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/.test(v)
                     setFieldValue('newPassword', v)
                     if (v)  {
                         setPasswordHint(true) 
                     }
                     else setPasswordHint(false)
                     if(isStrength) {
                         setTimeout(() => {
                            setPasswordHint(false)
                         }, 2000)
                     }
     
                         
                 }}
                 value={values.newPassword}
                 secureTextEntry={!passwordBtn}
                  renderRightAccessory={() => <PasswordAccessory btn={passwordBtn} btntoggle={() => setPasswordBtn(prev => !prev)} />}
                 isTyping={typing}
                 />
                 <Motion.View
             className={'border-[#E0E0E0] mx-2 rounded-b-[4px] -top-1'}
             animate={ !passwordHint ? {
                 minHeight: 0,
                 opacity: 0,
                 padding: 0,
                 borderWidth: 0,
             } : {
                 minHeight: 200,
                 opacity: 1,
                 borderWidth: 0.5,
                 padding: 4
             }}
             transition={{
                 type: 'spring',
                 
             }}
             >
               <AnimatePresence>
              { passwordHint &&
                 <PasswordStrength 
                 password={values.newPassword}
                 />
              }
               </AnimatePresence>
             </Motion.View>
     
             {/* Confrim Password */}
             <Motion.View
             className={'justify-center overflow-hidden'}
             animate={ passwordSaved ? {
                 minHeight: 0,
                 opacity: 0,
             } : {
                 minHeight: 50,
                 opacity: 1,
             }}
             transition={{
                 type: 'spring',
                 
             }}
             >
             <AnimatePresence>
             { !passwordSaved && <FormInput 
                 keyboardType='default'
                 label='Retype New Password'
                 onChangeText={(v) => {
                     setFieldValue('confirmPassword', v)
                     if (v)  {
                         setConfirmPasswordHint(true) 
                     }
                     else setPasswordHint(false)
                     if(values.newPassword === v) {
                         setTimeout(() => {
                            setConfirmPasswordHint(false)
                         }, 1000)
                     }
     
                         
                 }}
                 value={values.confirmPassword}
                 secureTextEntry={!passwordBtn}
                  renderRightAccessory={() => <Text />}
                  isTyping={typing}
                  />}
             </AnimatePresence>
                 </Motion.View>
                 <Motion.View
             className={'border-[#E0E0E0] mx-2 rounded-b-[4px] -top-1'}
             animate={ !confirmPasswordHint ? {
                 minHeight: 0,
                 opacity: 0,
                 padding: 0,
                 borderWidth: 0,
             } : {
                 minHeight: 50,
                 opacity: 1,
                 borderWidth: 0.5,
                 padding: 4
             }}
             transition={{
                 type: 'spring',
                 
             }}
             >
               <AnimatePresence>
              { confirmPasswordHint &&
                 <PasswordStrength 
                 replica={values.newPassword}
                 password={values.confirmPassword}
                 />
              }
               </AnimatePresence>
             </Motion.View>
             <View className='flex-row px-2 top-8'>
                 <View className='flex-1' />
                 <ReeachButton
                    disabled={values.confirmPassword !== values.newPassword}
                   onPress={handleSubmit}
                   title={ !passwordSaved ? 'Save new password' : 'Sign in'}
                 //   loading={loading}
                 />
                 </View>
            </>
           )
      }}
    </Formik>
  )
}

export default ResetPasswordForm