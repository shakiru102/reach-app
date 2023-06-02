import { View, Text, SafeAreaView } from 'react-native'
import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackPramsList } from '../../interface'
import { platform, screenSize, statusbarHeight } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Motion } from '@legendapp/motion'
import { Snackbar } from 'react-native-paper'
import InitiateResetPasswordForm from '../../components/initiateresetpassword/InitiateResetPasswordForm'
import initiateResetPasswordHook from '../../hooks/auth/initiateResetPasswordHook'

type Props = StackScreenProps<AuthStackPramsList, 'initiate-reset-password'>

const InitiateResetPassword: FC<Props> = ({
    navigation
}) => {

    const props = initiateResetPasswordHook()

  return (
    <SafeAreaView 
    style={{
      paddingTop: platform === 'android' ? statusbarHeight : 0
    }}
    className='flex-1 bg-white'>
    <KeyboardAwareScrollView
     showsVerticalScrollIndicator={false}
     className='bg-white'
      >
        <Motion.View className={` ${ screenSize === 'phone' ? 'px-1' : 'px-40'}  py-24 flex flex-1 bg-white`}>
        <Motion.View className={`mb-12`}>

           <Motion.Text
           className={`${ screenSize === 'phone' ? ' pl-3 text-[20.86px]': 'text-[32px]' } font-helvetical-bold`}
           >Reset password</Motion.Text>
           { !props.verifyPhonenumber && <>
            <Motion.Text
           className={`${ screenSize === 'phone' ? ' pl-3 text-[12.52px]': 'text-[16px]' } mt-4 font-helvetical-bold`}
           > { 
             !props.errorText ? 'Seems like you forgot your password?' : 'Didn’t receive any code to reset your password?'
           } </Motion.Text>
             <Text className={`${ screenSize === 'phone' ? ' pl-3 text-[12.52px]': 'text-[16px]' } mt-1 font-helvetical`}>
                { 
                  !props.errorText ? 'Don’t worry, we prepared for this. Provide your phone number and we will send a code to allow you reset your password.' :
                  'Wait for a few minutes or check to make sure you signed up on Reeach with this phone number.'
                }
            </Text>
           </> }
        </Motion.View>
      <InitiateResetPasswordForm initiateRouteNavigation={() => navigation.navigate('reset-password')} {...props}/>
      { props.errorText && 
         <View className='px-3 mt-8'>
         <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[12.52px]' : 'text-[16px]' } text-[#4F4F4F] text-right`}>
         Not on Reeach? 
         <Text onPress={() => navigation.navigate('signup')} className='text-[#2F80ED] font-helvetical-bold'>{' '} Sign up</Text>
         </Text>
      </View>
      }
    </Motion.View>
      </KeyboardAwareScrollView>
      </SafeAreaView>
  )
}

export default InitiateResetPassword