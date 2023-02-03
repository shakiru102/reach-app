import { Motion } from '@legendapp/motion'
import React, { FC } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { platform, screenSize } from '../../constants';
import { phonenumberBtnStateProps } from '../../hooks/auth/signupHook';
import { AntDesign } from '@expo/vector-icons';

interface PhonenumberAccessoryProps {
    onInitiateVerification?: (e?: any) => void;
    activeState: phonenumberBtnStateProps
}

const PhonenumberAccessory: FC<PhonenumberAccessoryProps> = ({
    activeState,
    onInitiateVerification
})  => {


  return (

   <Motion.View className={`top-1`}>
         {
            activeState === 'initiate verification' ? (
                    <TouchableOpacity 
                    onPress={onInitiateVerification}>
                        <Motion.Text
                            className={`${screenSize === 'phone' ? 'text-[10.52px]' : 'text-[14px]'} ${ platform === 'ios' ? 'bottom-1' : 'bottom-0' }  bg-white font-helvetical-bold text-[#2F80ED]`}
                        >Verify this number</Motion.Text>
                    </TouchableOpacity>
               
            ) : activeState === 'verifying' ? (
                <Motion.View 
                >
                    <ActivityIndicator 
                     size={ platform === 'ios' ? 'small' : 14}
                     color={'black'}
                    />
                </Motion.View>
            ) : activeState === 'verified' ? 
            <Motion.View
                className={`flex-row items-center gap-1`}
            >
                <Motion.Text>Verified</Motion.Text>
                <AntDesign name="checkcircle" size={12} color="#27AE60" />
            </Motion.View> : null
         }
   </Motion.View>
  )
}

export default PhonenumberAccessory