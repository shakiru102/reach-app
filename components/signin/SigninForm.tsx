import { Motion } from '@legendapp/motion'
import { Formik } from 'formik'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { initiateSignin } from '../../api/auth/auth'
import { screenSize } from '../../constants'
import signinHook, { signinHookProps } from '../../hooks/auth/signinHook'
import { toggleAuth } from '../../store/reducer/authSlice'
import FormInput from '../common/FormInput'
import ReeachButton from '../common/ReeachButton'
import PasswordAccessory from '../signup/PasswordAccessory'
import { Snackbar } from 'react-native-paper'
import axios, { AxiosResponse } from 'axios'
import { AuthUserResponseParams } from '../../interface/auth'

const SigninForm: FC<signinHookProps> = ({
      passwordBtn,
        setPasswordBtn,
        initiateLogin,
        loading,
        error,
        errorText,
        setError,
}) => {

    const signinSchema = yup.object().shape({
        phoneNumber: yup.string().required(),
        password: yup.string().required()
    })

    

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
     }) => (
        <Motion.View className='p-2 flex-1  bg-white'>
            <FormInput 
            keyboardType='phone-pad'
            label='Phone number'
            onChangeText={handleChange('phoneNumber')}
            value={values.phoneNumber}
            />
            <FormInput 
            keyboardType='default'
            label='Password'
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={!passwordBtn}
             renderRightAccessory={() => <PasswordAccessory btn={passwordBtn} btntoggle={() => setPasswordBtn(prev => !prev)} />}
            />
            <View className='px-2'>
               <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[12.52px]' : 'text-[16px]' } text-[#4F4F4F] text-right`}>
               Can’t remember password?
               <Text className='text-[#2F80ED]'>{' '} Reset password</Text>
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
     )}
    </Formik>
    </>
  )
}

export default SigninForm