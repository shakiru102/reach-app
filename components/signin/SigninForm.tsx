import { Motion } from '@legendapp/motion'
import { Formik } from 'formik'
import React, { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { screenSize } from '../../constants'
import { signinHookProps } from '../../hooks/auth/signinHook'
import FormInput from '../common/FormInput'
import ReeachButton from '../common/ReeachButton'
import PasswordAccessory from '../common/PasswordAccessory'

interface SignInProps extends signinHookProps {
  intiateRouteNavigation: (e?: any) => void
}

const SigninForm: FC<SignInProps> = ({
      passwordBtn,
        setPasswordBtn,
        initiateLogin,
        loading,
        error,
        errorText,
        setError,
        intiateRouteNavigation
}) => {

    const signinSchema = yup.object().shape({
        phoneNumber: yup.string().required(),
        password: yup.string().required()
    })
   const [typing, setTyping] = useState<boolean>(false)
    

    const dispatch = useDispatch()


  return (
    <>
      <Formik
    initialValues={{
        phoneNumber: '',
        password: ''
    }}
    onSubmit={async ({
      password,
      phoneNumber
    }) => {
       
      initiateLogin( password, phoneNumber )
    }}
    validateOnMount
    validationSchema={signinSchema}
    >
     {({
        values,
        handleChange,
        isValid,
        handleSubmit
     }) => {

      if(values.password || values.phoneNumber) setTyping(true)
      else setTyping(false)

      return (
        <Motion.View className='p-2 flex-1  bg-white'>
            <FormInput 
            keyboardType='phone-pad'
            label='Phone number'
            onChangeText={handleChange('phoneNumber')}
            value={values.phoneNumber}
            isTyping={typing}
            />
            <FormInput 
            keyboardType='default'
            label='Password'
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={!passwordBtn}
             renderRightAccessory={() => <PasswordAccessory btn={passwordBtn} btntoggle={() => setPasswordBtn(prev => !prev)} />}
            isTyping={typing}
            />
            <View className='px-2'>
               <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[12.52px]' : 'text-[16px]' } text-[#4F4F4F] text-right`}>
               Can’t remember password?
               <Text onPress={intiateRouteNavigation} className='text-[#2F80ED]'>{' '} Reset password</Text>
               </Text>
            </View>
            <View className='flex-row mt-8 px-2'>
            <View className='flex-1' />
            <ReeachButton
               disabled={!isValid}
              onPress={handleSubmit}
              title='Sign in'
              loading={loading}
            />
            </View>
        </Motion.View>
     )
     }}
    </Formik>
    </>
  )
}

export default SigninForm