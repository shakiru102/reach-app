import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackPramsList } from '../../interface'
import { SafeAreaView } from 'react-native-safe-area-context'
import { platform, screenSize, statusbarHeight } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Motion } from '@legendapp/motion'
import ResetPasswordForm from '../../components/resetpassword/ResetPasswordForm'
import ResetPasswordHook from '../../hooks/auth/resetPasswordHook'

type Props = StackScreenProps<AuthStackPramsList, 'reset-password'>

const ResetPassword: FC<Props> = ({
    navigation
}) => {

    const props = ResetPasswordHook()

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
        </Motion.View>
        <ResetPasswordForm {...props} initiateRouteNavigation={() => null}/>
    </Motion.View>
      </KeyboardAwareScrollView>
      </SafeAreaView>
  )
}

export default ResetPassword