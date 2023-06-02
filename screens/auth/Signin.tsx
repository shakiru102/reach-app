import { Motion } from '@legendapp/motion'
import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Snackbar } from 'react-native-paper'
import SigninForm from '../../components/signin/SigninForm'
import { screenSize } from '../../constants'
import signinHook from '../../hooks/auth/signinHook'
import { AuthStackPramsList } from '../../interface'
import Bg from '../../assets/signupbg.png'


type Props = StackScreenProps<AuthStackPramsList, 'signin'>

const Signin: FC<Props> = ({
    navigation
}) => {

  const props = signinHook()

  return (
    <View className='flex-1 bg-white'>
        <ImageBackground source={Bg} className={`${ screenSize === 'phone' ? 'px-1' : 'px-40'}  pb-12 mb-4 pt-24`}>

<Snackbar
   visible={props.error}
   onDismiss={() => props.setError(false)}
   duration={5000}
   elevation={0}
   className={'bg-transparent'}
   >
   <Text className='text-[#EA0E0E] p-1 text-center rounded-sm'>{ props.errorText }</Text>
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
   </ImageBackground>
    <KeyboardAwareScrollView
     showsVerticalScrollIndicator={false}
      className='bg-white'
      >
        <Motion.View className={` ${ screenSize === 'phone' ? 'px-1' : 'px-40'}  pb-24 flex flex-1 bg-white`}>
        <SigninForm  {...props} intiateRouteNavigation={() => navigation.navigate('initiate-reset-password')}/>
    </Motion.View>
      </KeyboardAwareScrollView>
      </View>
  )
}

export default Signin