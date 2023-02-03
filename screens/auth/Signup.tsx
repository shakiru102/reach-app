import { View, Text, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { FC, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackPramsList } from '../../interface'
import { Motion } from '@legendapp/motion'
import SignupForm from '../../components/signup/SignupForm'
import { platform, screenSize, statusbarHeight } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import signupHook from '../../hooks/auth/signupHook'
import { Snackbar } from 'react-native-paper'

type SignpScreenProps = StackScreenProps<AuthStackPramsList, 'signup'>

const Signup: FC<SignpScreenProps> = ({ 
    navigation
}) => {

  const props = signupHook()

  return (
    <SafeAreaView 
    style={{
      paddingTop: platform === 'android' ? statusbarHeight : 0
    }}
    className='flex-1 bg-white dark:bg-black'>
       

      <KeyboardAwareScrollView
      className='bg-white dark:bg-black'
      enableOnAndroid
      >
        
        <Motion.View className={` ${ screenSize === 'phone' ? 'px-1' : 'px-40'}  py-24 flex-1 bg-white`}>
        <Motion.View className={`mb-12`}>
        <Snackbar
        visible={props.error}
        onDismiss={() => props.setError(false)}
        duration={5000}
        elevation={0}
        className={'bg-transparent'}
        >
        <Text className='text-white bg-orange-600 p-1 rounded-[8px] text-center'>{ props.errorText }</Text>
        </Snackbar>
           <Motion.Text
           className={`${ screenSize === 'phone' ? ' pl-3 text-[20.86px]': 'text-[32px]' } font-helvetical-bold`}
           >Join Reeach</Motion.Text>
           <Motion.Text
           className={`${ screenSize === 'phone' ? ' pl-3 text-[12.52px]': 'text-[16px]' } mt-1 font-helvetical`}
           >Already joined Reeach? 
             <TouchableWithoutFeedback onPress={() => navigation.navigate('signin')}>
             <Text className={`${ screenSize === 'phone' ? 'text-[12.52px]': 'text-[16px]' } text-[#2F80ED] font-helvetical-bold`}> Sign in</Text>
             </TouchableWithoutFeedback>
             </Motion.Text>
        </Motion.View>
        <SignupForm {...props} />
    </Motion.View>
      </KeyboardAwareScrollView>
      </SafeAreaView>
  )
}

export default Signup