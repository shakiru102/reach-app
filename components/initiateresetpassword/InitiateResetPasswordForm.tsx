import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Formik } from 'formik'
import FormInput from '../common/FormInput'
import PhonenumberAccessory from '../common/PhonenumberAccessory'
import { AnimatePresence, Motion } from '@legendapp/motion'
import VerifyPhonenummber from '../common/VerifyPhonenummber'
import { initiateResetPasswordHookProps } from '../../hooks/auth/initiateResetPasswordHook'
import ReeachButton from '../common/ReeachButton'

interface InitiateResetPasswordProps extends initiateResetPasswordHookProps {
    initiateRouteNavigation: (e?: any) => void
  }

const InitiateResetPasswordForm: FC<InitiateResetPasswordProps> = ({
    setPhonenumberBtnState,
    setVerifyPhonenumber,
    setConfirmOtp,
    phonenumberBtnState,
    verifyPhonenumber,
    clear,
    setclear,
    initiateConfirmOtp,
    initiatePhonenumberVerification,
    confirmOtp,
    initiateResendOtp,
    countdown,
    errorText,
    initiateRouteNavigation
}) => {
  return (
    <Formik
    initialValues={{ phoneNumber: '' }}
    onSubmit={() => {
       initiateRouteNavigation()
    }}
    >
      { ({ setFieldValue, values, handleSubmit }) => (
        <>
        <FormInput 
         keyboardType='phone-pad'
         label='Phone number'
         onChangeText={(v) => {

            setFieldValue('phoneNumber', v)
            const validNumber = /^(0)?[7-9][0-1]\d{8}$/gm.test(v)
            if (validNumber) setPhonenumberBtnState('initiate verification')  
            else {
              setPhonenumberBtnState('none')
              setVerifyPhonenumber(false)
              setConfirmOtp('none')
            } 
            
         }}
         value={values.phoneNumber}
         renderRightAccessory={() => 
         <PhonenumberAccessory 
            title='Send me the code' 
            activeState={phonenumberBtnState} 
            onInitiateVerification={() => initiatePhonenumberVerification(values.phoneNumber)}
            resetError={errorText}
            resetErrorFunc={() => setPhonenumberBtnState('initiate verification')}
             />}
        />

        <Motion.View
        className={'border-[#E0E0E0] mx-2 rounded-b-[4px] -top-1'}
        animate={ !verifyPhonenumber ? {
            minHeight: 0,
            opacity: 0,
            padding: 0,
            borderWidth: 0,
        } : {
            minHeight: 200,
            opacity: 1,
            borderWidth: 0.5
        }}
        transition={{
            type: 'spring',
            
        }}
        >
        <AnimatePresence>
         { verifyPhonenumber &&
          
            <View>
            <VerifyPhonenummber 
          clear={clear}
          actionType='reset'
          initiateClear={(v) => setclear(v)}
          initiateConfirmOtp={(code) => {
          
            const result = initiateConfirmOtp(code)
            if(result?.fieldValue) setFieldValue('verified', result.fieldValue)
        }}
          confirmOtp={confirmOtp}
          initiateResendOtp={() => initiateResendOtp(values.phoneNumber)}
          countdown={countdown}
         />
          <View className='flex-row px-2 top-8'>
            <View className='flex-1' />
            <ReeachButton
               disabled={false}
              onPress={handleSubmit}
              title='Next'
            //   loading={loading}
            />
            </View>
            </View>
         }
          </AnimatePresence>
        </Motion.View>
        </>
      )}
    </Formik>
  )
}

export default InitiateResetPasswordForm