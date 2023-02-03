import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Motion } from '@legendapp/motion'
import { MotionLinearGradient } from '@legendapp/motion/linear-gradient-expo'
import { screenSize } from '../../constants';
import Night from '../../assets/night.png'
import Day from '../../assets/day.png'

interface ActiveStatusButtonProps {
    onPress: (e?: any) => void;
    status: 'open' | 'close';
    title: string
}

const ActiveStatusButton: FC<ActiveStatusButtonProps> = ({
    onPress,
    status,
    title
}) => {
  return (
    <View className={` ${ screenSize === 'phone' ? 'h-[23px]' : 'h-[31px]]' } min-w-[49px]`}>
        <Motion.Pressable 
        onPress={onPress} 
        className={`flex-1 absolute w-[100%] top-0 left-0`}>
        <Motion.View
        whileTap={{
            scale: 0.8
        }}
        transition={{ type: 'spring' }}
        className={`rounded-full overflow-hidden flex-1`}
        >
        <MotionLinearGradient 
        animateProps={{
        colors: [
            status === 'close' ? '#533809' : '#FF512F', 
            status === 'close' ? '#533809' : '#F09819' 
        ],
        start: { x: 0, y: 0 },
        end: { x:  1, y: 0 }
        }}>
        <View className='flex-row justify-center items-center py-[3px]'>
        <Text className={`${ screenSize === 'phone' ? 'text-[11.95px]' : 'text-[18px]' } text-center  font-helvetical-bold text-white`} >
            { title }
        </Text>
       { screenSize === 'tablet' && <Motion.Image source={ status === 'close' ? Night : Day } className='w-[24px] h-[24px]' /> }
        </View>
        </MotionLinearGradient>
    </Motion.View>
    </Motion.Pressable>
    </View>
  )
}

export default ActiveStatusButton