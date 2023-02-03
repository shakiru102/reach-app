import { Motion } from '@legendapp/motion'
import { MotionLinearGradient } from '@legendapp/motion/linear-gradient-expo'
import React, { FC, ReactElement, ReactNode } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { screenSize } from '../../constants';

interface ReeachButtonProps {
    title: string | ReactNode | ReactElement ;
    onPress: (e?: any) => void;
    disabled?: boolean;
    childrenType?: 'element' | 'string';
    loading?: boolean
}

const ReeachButton: FC<ReeachButtonProps> = ({
    onPress,
    title,
    disabled,
    childrenType,
    loading
}) => {

  return (
    <View className='flex-1'>
        <Motion.Pressable 
    disabled={disabled}
    onPress={onPress} 
    className={`flex-1 absolute w-[100%] top-0 left-0`}>
        <Motion.View
        whileTap={{
            scale: 0.8
        }}
        transition={{ type: 'spring' }}
        className={`rounded-[8px] overflow-hidden flex-1`}
        >
        <MotionLinearGradient 
        animateProps={{
        colors: [
            disabled ? '#BDBDBD' : '#04A999', 
            disabled ? '#BDBDBD' : '#0072FF' 
        ],
        start: { x: 0, y: 0 },
        end: { x:  1, y: 0 }
        }}>

            {
              loading ? <ActivityIndicator color={'white'} className='py-2'/> :
            
                <>
                { 
                  childrenType === 'element' ? title : (
                    <Text className={`${ screenSize === 'phone' ? 'text-[11.95px]' : 'text-[18px]' } text-center py-3 font-helvetical-bold text-white`} >
                        { title }
                    </Text>
                  )
                }
                </>
          }
        </MotionLinearGradient>
    </Motion.View>
    </Motion.Pressable>
    </View>
  )
}

export default ReeachButton