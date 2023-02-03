import React, { FC } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { View } from 'react-native'
import { confirmOtpProps } from '../../hooks/auth/signupHook'

interface OtpProps {
    onInputFilled: (e?: any) => void;
    optStatus: confirmOtpProps;
    clear: string;
    clearOtp: (e?: any) => void
}

const Otp: FC<OtpProps> = ({
    onInputFilled,
    optStatus,
    clear,
    clearOtp
}) => {
  return (
    <View 
    className='w-[60%]  mx-auto my-10'
    >
        <OTPInputView 
        code={clear}
        clearInputs={false}
        pinCount={6}
        autoFocusOnLoad
        keyboardType='number-pad'
        codeInputFieldStyle={{
            width: 23.7,
            height: 40,
            fontFamily: 'Helvetica',
            color: optStatus === 'error' ? '#EA0E0E' :'black',
            borderWidth: 0.5,
            ...( optStatus === 'error' && {borderColor: '#EA0E0E'})
        }}
        style={{
            height: 40,
            width: '100%'
        }}
        onCodeChanged={(v) => clearOtp(v)}
        onCodeFilled={onInputFilled}
        codeInputHighlightStyle={{
            borderColor: '#2F80ED',
            borderWidth: 0.5
        }}
    />
    </View>
  )
}

export default Otp