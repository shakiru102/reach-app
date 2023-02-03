import { Motion } from '@legendapp/motion'
import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Snackbar } from 'react-native-paper'
import SigninForm from '../../components/signin/SigninForm'
import { platform, screenSize, statusbarHeight } from '../../constants'
import signinHook from '../../hooks/auth/signinHook'
import { AuthStackPramsList } from '../../interface'

type Props = StackScreenProps<AuthStackPramsList, 'signin'>

const Signin: FC<Props> = ({
    navigation
}) => {

  const props = signinHook()

  return (
    <SafeAreaView 
    style={{
      paddingTop: platform === 'android' ? statusbarHeight : 0
    }}
    className='flex-1 bg-white dark:bg-black'>
    <KeyboardAwareScrollView
      className='bg-white dark:bg-black'
      >
        <Motion.View className={` ${ screenSize === 'phone' ? 'px-1' : 'px-40'}  py-24 flex flex-1 bg-white`}>
        <Motion.View className={`mb-12`}>

     <Snackbar
        visible={props.error}
        onDismiss={() => props.setError(false)}
        duration={5000}
        elevation={0}
        className={'bg-transparent'}
        >
        <Text className='text-white bg-orange-600 p-1 text-center rounded-sm'>{ props.errorText }</Text>
        </Snackbar>
           <Motion.Text
           className={`${ screenSize === 'phone' ? ' pl-3 text-[20.86px]': 'text-[32px]' } font-helvetical-bold`}
           >Sign in</Motion.Text>
           <Motion.Text
           className={`${ screenSize === 'phone' ? ' pl-3 text-[12.52px]': 'text-[16px]' } mt-1 font-helvetical`}
           >Not on Reeach? 
             <TouchableWithoutFeedback onPress={() => navigation.navigate('signup')}>
             <Text className={`${ screenSize === 'phone' ? 'text-[12.52px]': 'text-[16px]' } text-[#2F80ED] font-helvetical-bold`}> Sign up</Text>
             </TouchableWithoutFeedback>
             </Motion.Text>
        </Motion.View>
        <SigninForm  {...props}/>
    </Motion.View>
      </KeyboardAwareScrollView>
      </SafeAreaView>
  )
}

export default Signin