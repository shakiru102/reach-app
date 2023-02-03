import { Motion } from '@legendapp/motion'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { screenSize } from '../../constants'
import { confirmOtpProps } from '../../hooks/auth/signupHook'
import Otp from '../common/Otp'
import InitializeCountDown from './InitializeCountDown'

interface VerifyPhonenummberProps {
    confirmOtp: confirmOtpProps;
    initiateConfirmOtp: (e?: any) => void;
    initiateResendOtp: (e?: any) => void;
    countdown: any;
    clear: string;
    initiateClear: (e?: any) => void;
}

const VerifyPhonenummber: FC<VerifyPhonenummberProps> = ({
    confirmOtp,
    initiateConfirmOtp,
    countdown,
    initiateResendOtp,
    clear,
    initiateClear,
}) => {
  return (
    <Motion.View 
    initial={{ opacity: 0, top: 10 }}
    exit={{ opacity: 0, top: 10 }}
    animate={{ opacity: 1, top: 0 }}
    transition={{ type: 'spring' }}
    className='flex-1 p-4'
    >
      <Motion.View>
        <Motion.Text 
        className={`${ screenSize === 'phone' ? 'text-[11.95px]' : 'text-[18px]' } font-helvetical-bold`}
        >Verify number{' '}
        { confirmOtp === 'error' && 
        <Motion.Text
         className='font-helvetical text-[#EA0E0E]'> 
        <View  className='font-helvetical-bold bg-black w-[4px] h-[4px] rounded-full' /> Incorrect code provided</Motion.Text>
        }
        </Motion.Text>
        <Motion.Text className={`${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[16px]' } font-helvetical mt-1 text-[#333333]`}>We sent you an SMS with a 6-digit Code. Provide it to verify your phone number.</Motion.Text>
      </Motion.View>
      <Otp 
      onInputFilled={initiateConfirmOtp} 
      clearOtp={initiateClear} 
      optStatus={confirmOtp} 
      clear={clear}
        />

      <InitializeCountDown 
      countdown={countdown}
      countdownState={confirmOtp}
      initiateResendOtp={initiateResendOtp}
      clearOtp={initiateClear}
      />
    </Motion.View>
  )
}

export default VerifyPhonenummber