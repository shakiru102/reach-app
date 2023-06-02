import { Motion } from '@legendapp/motion'
import React, { FC } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { platform, screenSize } from '../../constants';
import { phonenumberBtnStateProps } from '../../hooks/auth/signupHook';
import { AntDesign } from '@expo/vector-icons';
import Countdown from 'react-countdown';

interface PhonenumberAccessoryProps {
    onInitiateVerification?: (e?: any) => void;
    activeState: phonenumberBtnStateProps;
    title?: string;
    resetError?: string;
    resetErrorFunc?: (e?: any) => void
}

const PhonenumberAccessory: FC<PhonenumberAccessoryProps> = ({
    activeState,
    onInitiateVerification,
    title,
    resetError,
    resetErrorFunc
})  => {


  return (

   <Motion.View className={`top-1`}>
         {
            activeState === 'initiate verification' ? (
                    <TouchableOpacity 
                    onPress={onInitiateVerification}>
                        <Motion.Text
                            className={`${screenSize === 'phone' ? 'text-[10.52px]' : 'text-[14px]'} bottom-1  bg-white font-helvetical-bold text-[#2F80ED]`}
                        >{ title ? title :  'Verify this number' }</Motion.Text>
                    </TouchableOpacity>
               
            ) : activeState === 'verifying' ? (
                <Motion.View 
                className={'bottom-1'}
                >
                    <ActivityIndicator 
                     size={ platform === 'ios' ? 'small' : 14}
                     color={'black'}
                    />
                </Motion.View>
            ) : activeState === 'verified' ? 
            <Motion.View
                className={`flex-row items-center gap-1 bottom-1`}
            >
                <Motion.Text>{ 'Verified' }</Motion.Text>
                <AntDesign name="checkcircle" size={12} color="#27AE60" />
            </Motion.View> : 
            resetError ? <>
               <Countdown 
                 date={Date.now() + 9000}
                 renderer={({ completed, minutes, seconds }) => {
                     if(completed) {
                        if(resetErrorFunc) resetErrorFunc()
                         return null
                     } else {
                         return <Text className='text-[12px] font-helvetical-bold bottom-1 text-[#BDBDBD]'> Resend in { minutes }:{ seconds }</Text>
                     }
                 }}
                />
            </> : null
         }
   </Motion.View>
  )
}

export default PhonenumberAccessory