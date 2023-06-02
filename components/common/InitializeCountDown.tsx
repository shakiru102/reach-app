import React, { FC, useMemo } from 'react'
import { confirmOtpProps } from '../../hooks/auth/signupHook'
import Countdown from "react-countdown"
import { ActivityIndicator, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { platform, screenSize } from '../../constants';

interface InitializeCountDownProps {
    countdownState: confirmOtpProps;
    countdown: any;
    initiateResendOtp: (e?: any) => any;
    clearOtp: (e?: any) => void;
}

const InitializeCountDown: FC<InitializeCountDownProps> = ({
    countdownState,
    countdown,
    initiateResendOtp,
    clearOtp,
}) => {

  const timer = useMemo(() => {
       return Date.now() + 9000
  }, [ countdown ])
  
  return (
    <>
      {
        countdownState === 'none' ?
        <View>
           <Text 
           className={`${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px]' } text-center font-helvetical`}>
            If you haven't received it, you can 
            <Text className='font-helvetical-bold'>
                <Countdown 
                 date={timer}
                 key={countdown}
                 renderer={({ completed, minutes, seconds }) => {
                     if(completed) {
                         return <TouchableWithoutFeedback 
                                    onPress={initiateResendOtp}
                                    >
                                <Text className={`${screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px]'} text-[#2F80ED] font-helvetical-bold top-1` }>
                                  {' '} resend it 
                                </Text>
                             </TouchableWithoutFeedback>
                     } else {
                         return <Text > resend in { minutes }:{ seconds }</Text>
                     }
                 }}
                />
            </Text>
           </Text>
        </View> : countdownState === 'verifying' ? 
          <ActivityIndicator 
            size={platform === 'ios' ? 'small' : 20}
            color={'black'}
          /> : 
          <TouchableWithoutFeedback onPress={() => clearOtp('')}>
            <Text className={`${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px]' } text-[#2F80ED] font-helvetical-bold text-center`}>Clear</Text>
          </TouchableWithoutFeedback>
      }
    </>
  )
}

export default InitializeCountDown